const express = require('express')
const fs = require('fs')

const app = express()
app.use(express.text())

app.get('/', (req, res) => {
  res.send("THIS IS DEFAULT / PAGE")
})

app.get('/home', (req, res) => {
  res.send(`
    <h1>Welcome to Home Page</h1>
    <img src="https://play-lh.googleusercontent.com/VJirc_TxKSSCZVvtX3thz46qLuMnr2v4VL4gBQ7JEzWQPvEnaNCV9U0mT9KFrc59iUT1tStoZOpV6YwCwyrYWQ" alt="png" />
    `)
})

app.get('/data', async (req, res) => {
  fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send("Error reading data.json")
    } else {
      res.send(data)
    }
  })
})

app.

  app.post('/sendData', (req, res) => {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
    data.push(req.body)
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2))
    res.send("Data received and saved successfully")
  })

app.patch('/sendData/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
  const id = parseInt(req.params.id)
  const index = data.findIndex(item => item.id === id)
})

app.listen(6967, () => {
  console.log('server is running on http://localhost:6967')
})
