/* 
Instale as bibliotecas e o cliente de API:
npm init
npm i express
Procure pela extensão RapidAPI Client no VSCode.
*/
// Para executar a API no terminal: node index.js
// Link para testar a API: http://localhost:3000/famosos
const express = require("express")
const app = express()
const port = 3000
app.use(express.json()) 
const fs = require('fs')


app.post("/aulas", (req, res) => {
    const aula = req.body
    try {
       
        const aulas = JSON.parse(fs.readFileSync("aulas.json", "utf8"))
      
        aulas.push(aula)
     
        fs.writeFileSync("aulas.json", JSON.stringify(aulas), "utf8")
      
        res.status(201).json({resposta: "Aula cadastrada"})
    } catch (erro) {
        res.status(500).json({erro: erro.message})
    }
})

// Lê o último ID
const idData = JSON.parse(fs.readFileSync("id.json", "utf8"))
const novoId = idData.ultimoId + 1

// Atualiza o contador de ID
idData.ultimoId = novoId
fs.writeFileSync("id.json", JSON.stringify(idData, null, 2), "utf8")

// Cria a aula com o novo ID
const aula = {
    id: novoId,
    ...req.body
}

app.listen(port, ()=>{
    console.log("API rodando na porta " + port)
})