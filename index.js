const express = require('express')

const app = express()

app.get('/', (res, req) => {
  res.send('Hello Omari')
}

app.listen(3000)

