import jwt from 'jsonwebtoken'

const SECRET = 'secret'

export default (req, res, next) => {
  const auth = req.headers.authorization
  if (!auth) return res.status(401).json({ message: 'Token requerido' })
  const token = auth.split(' ')[1]
  try {
    req.user = jwt.verify(token, SECRET)
    next()
  } catch {
    res.status(401).json({ message: 'Token inválido' })
  }
}