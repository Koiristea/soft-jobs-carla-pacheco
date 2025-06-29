import bcrypt from "bcrypt"
import pool from "../db.js"

export const registerUser = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    await pool.query(
      "INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4)",
      [email, hashedPassword, rol, lenguage]
    )
    res.status(201).json({ message: "Usuario registrado" })
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" })
  }
}

export const getUser = async (req, res) => {
  try {
    const { email } = req.user
    const { rows } = await pool.query(
      "SELECT email, rol, lenguage FROM usuarios WHERE email = $1",
      [email]
    )
    if (rows.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado" })
    }
    res.json([rows[0]])
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error al obtener usuario" })
  }
}
