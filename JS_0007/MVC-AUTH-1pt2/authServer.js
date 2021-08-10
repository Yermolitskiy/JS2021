require('dotenv').config()

const express = require('express')
const server = express()
const jwt = require ('jsonwebtoken')


server.use(express.json())

let refreshTokens = []

server.post('/token', (req, res) => {
  const refreshToken = req.body.token

  if (refreshToken === null) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({name: user.name})
    res.json({accessToken: accessToken})
  })
})

server.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token)
  res.sendStatus(204)
})

server.post('/login', (req, res) => {
  // authentication will be here
  
  const username = req.body.username
  const user = { name: username }

  const accessToken = generateAccessToken(user)//jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
  res.json({ accessToken: accessToken, refreshToken: refreshToken })
})

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '300s'})

}



server.listen(4000)
