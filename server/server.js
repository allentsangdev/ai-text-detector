const { writer_content_detect } = require('./modules/writer_ai_service')
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

// POST Request: Writer Content Detect
router.post('/writer/content-detect', async (req,res) => {
    try {
        const {writerApiKey, organzationId, content } = req.body
        const result = await writer_content_detect(writerApiKey, organizationId, content)
        res.status(200).json(result)
    } 
    catch(error) {
        res.status(500).send(error.message)
    }
})

app.use('/', router)

app.listen(PORT, ()=> {
    console.log(`Server listening on ${PORT}`)
})