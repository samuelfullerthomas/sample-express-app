const express = require('express')

const app = express()

app.get('/', (res, req) => {
  res.send(`I honestly don't know what is going on, sorry gavin`)
}

app.listen(3000)
