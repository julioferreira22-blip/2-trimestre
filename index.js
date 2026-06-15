//npm init
//npm i express
//baixa RapidAPI Client nas extensões do VSCode
const express = require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')

app.post("/clientes", (req, res) =>{
    const cliente = req.body
   
try{
    
    //abrir o arquivbo
    const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
     //adicionar cliente
      bd.push(cliente)
      //salvar o arquivo 
fs.writeFileSync("bd.json", JSON.stringify(bd), "utf8")
    //resposta
    res.status(201).json({resposta: "Cliente cadastrado!"}) 

}catch (erro) {
    res.status(500).json({erro:erro.message})
}
  
   
})

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