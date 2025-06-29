const requestLogger = (req, res, next) => {
  console.log("--------------------")
  console.log(`Petición recibida: ${req.method} a la ruta ${req.originalUrl}`)
  console.log("Body:", req.body)
  next()
}

export default requestLogger

const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
  expiresIn: "7s",
})
