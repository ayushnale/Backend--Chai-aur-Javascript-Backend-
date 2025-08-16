const express = require ('express')
const app = express ()

require ('dotenv').config()

app.get('/', (req,res) => {
    res.send("Hello World!")
    
})

app.get('/ip',(req,res) => {
    const ip = req.i
    console.log (ip)
    res.send(`YOUR IP IS ${ip}`)
})

app.listen(process.env.PORT,( ) => {
    console.log(` ⚙️   app is listening on port ${process.env.PORT} ......`)
    
})