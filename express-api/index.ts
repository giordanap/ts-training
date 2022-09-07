import express from 'express';
// const express = require('express')

const app = express()
const port = 1809

app.get('/', (req, res) => {

  res.status(400).json({
    ok: false,
    msg: 'No hay token en la peticion'
  })

  res.json({
    ok: true,
    msg: 'Todo ok!'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})