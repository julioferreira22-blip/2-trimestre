//npm init
//npm i express
//baixa RapidAPI Client nas extensões do VSCode
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())


app.get('/ola', (req, res) => {
    res.send({resposta: "olá mundo!"})
})

app.get('/Perfil', (req, res) => {
    res.send({nome: "Júlio César Ferreira"})
})
    app.get('/Perfil', (req, res) => {
    res.send({idade: "15 anos"})
})


app.listen(port, () => {
    console.log("API executando na porta " + port)
})
