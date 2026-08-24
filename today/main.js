const express = require('express');
const middleware = require('./middleware.js');
const app = express();
const PORT = 8000;

app.use(middleware)

app.get('/home', middleware, (req, res) => {
  res.send('this is home page')
  console.log('this is home page')
})

app.get('/contact', (req, res) => {
  res.send("this is contact page....")
  console.log("this is contact page....")
})

app.get('/blogs', (req, res) => {
  res.send('this is blogs page')
  console.log("this is blogs page")
})



app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
