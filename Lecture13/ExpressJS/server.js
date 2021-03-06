const express = require('express')
const path = require('path')

const server = express()

server.get('/', (req, res) => {
  res.send("HELLO THERE!!")
})

server.get('/greet', (req, res) => {
  res.send("How are you ?")
})
server.get('/greet/:person', (req, res) => {
  res.send(`How are you ${req.params.person}?`)
})
server.get('/greet/:person/night', (req, res) => {
  res.send(`Goodnight ${req.params.person}!`)
})

server.get('/bye', (req, res) => {
  res.send(`Goodbye ${req.query.p}!`)
})

server.get('/good', (req, res) => {
  res.send(`Good${req.query.t} <b>${req.query.p}</b>!`)
})

server.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'file.html'))
})
server.get('/server', (req, res) => {
  res.send(`body.a`)
})

server.use('/site', express.static(path.join(__dirname, 'static')))

// server.get('/site/:page', (req, res) => {
//   if (!req.params.page) {
//     req.params.page = 'index.html'
//   }
//   res.sendFile(path.join(__dirname, 'static', req.params.page))
// })

// http://google.com/search?q=javascript



server.listen(4444)