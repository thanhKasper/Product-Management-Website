const express = require('express')
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    console.log("Server gets the request")
    res.json({name: "Kieu Tien Thanh"})
})

app.listen(8080, () => {
    console.log("Listening on port 8080")
})