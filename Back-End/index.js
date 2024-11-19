import express from 'express'

const app = express()
const PORT = 4000

app.get('/',(req,res)=>{
    res.status(200).send("Hello World! Backend em funcionamento")
})


app.listen(PORT,()=>{
    console.log(`Backend Academia rodando na porta: ${PORT}`)
})