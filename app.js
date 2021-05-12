// app.js
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }))

// middleware的主要方法
app.use((req, res, next) => {
  const reqTime = Date.now()
  const date = new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' })
  res.on('finish', () => {
    const resTime = Date.now()
    const duration = resTime - reqTime
    console.log(`Time: ${date} | Request URL: ${req.method} ${req.originalUrl} |total tine: ${duration} ms`)
  })

  next()
})

app.get('/', (req, res, next) => {
  // console.log('Request URL:', req.method, req.originalUrl)
  res.send('列出全部 Todo')
})

app.get('/new', (req, res, next) => {
  // console.log('Request URL:', req.method, req.originalUrl)
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`)
})
