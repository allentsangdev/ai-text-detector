const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
const PORT = process.env.port || 4000

// Middlewares
app.use(cors())
app.use(express.json())

/* ----- Define Routes ----- */

// Landing Route
router.get("/", (req,res) => {
    res.send("<h1>Server On!!!</h1>")
})