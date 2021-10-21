require('dotenv').config();
const express = require('express')
const cors = require('cors')
const path=require('path')

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    const indexHtml=path.join(__dirname,'..','public','index.html')
    res.sendFile(indexHtml)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})