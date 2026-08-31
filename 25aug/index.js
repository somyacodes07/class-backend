const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}`;
  fs.appendFileSync('server.log', logMessage + '\n');
  next();
})

app.get('/home', (req, res) => {
  res.send('Niggaahhoooooo mei.....')
  // console.log(res)
})

app.get('/contact', (req, res) => {
  res.send('this is contact page')
})




app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`)
})
