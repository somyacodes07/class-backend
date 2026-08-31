const express = require('express')();
const app = express();
const morgan = require('morgan');

const fs = require('fs');
const port = 8000;



app.use(morgan('tiny'));

app.get('/home', (req, res) => {
  res.send('Niggaahhoooooo mei.....')
})

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`)
});
