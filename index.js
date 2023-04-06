const express = require("express")
const cors = require("cors")
const app = express();
require("dotenv").config()
const PORT = process.env.port || 3000

app.use(cors())
app.use(express.static(`${__dirname}/public`))
app.get("/home", (_, res) => res.status(200).sendFile(`${__dirname}/models/home.json`))
app.get("/menu", (_, res) => res.status(200).sendFile(`${__dirname}/models/menus.json`))
app.get("/menu/:item", (req, res) => res.status(200).sendFile(`${__dirname}/models/menu/${req.params.item}.json`))

app.listen(PORT)

