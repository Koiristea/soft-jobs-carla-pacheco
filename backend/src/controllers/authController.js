import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import pool from "../db.js"

const SECRET = "secret" // Usa variable de entorno en producción

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const { rows } = await pool.query(
      "SELECT * FROM usuarios WHERE email = $1",
      [email]
    )
    const user = rows[0]
    if (!user) return res.status(401).json({ message: "Usuario no existe" })
    const valid = await bcrypt.compare(password, user.password)
    if (!valid)
      return res.status(401).json({ message: "Contraseña incorrecta" })
    const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: "1h" })
    res.json({ token })
  } catch (error) {
    res.status(500).json({ error: "Error en login" })
  }
}
