const fs = require('fs').promises
const http = require('http')

const server = http.createServer(async (req, res) => {
    console.log(req.url)

    if (req.url == "/home" && req.method == "GET") {
        res.end("This is Home page")
    }

    else if (req.url == "/blogs") {
        res.end("This is blogs page")
    }

    else if (req.url == "/data") {

        try {
            const data = await fs.readFile('./data.json', 'utf-8')
            res.end(data)
        }
        catch (err) {
            console.log(err)
            res.end("Error reading data.json")
        }
    } else if (req.url == "/sendData" && req.method == "POST") {
        res.end("data is sent successfully......")
        let str = '';
        req.on("data", (chunk) => {
            str += chunk
        })
        req.on('end', () => {
            console.log(str)
        })
    }

    else {
        res.end("404 Not Found")
    }
})

server.listen(8000, () => {
    console.log("Server is running on 8000")
})
