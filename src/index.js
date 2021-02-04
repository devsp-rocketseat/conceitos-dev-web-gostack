// Importando o express
const express = require('express')


// Criando um servidor
const app = express()


// Criando as rotas
app.get('/', (request, response) => {
    return response.send('Hello World')
})

app.get('/projects', (request, response) => {
    return response.json({ message: 'Hello World' })
})


// Definindo uma porta para o Node
app.listen(3333, () => console.log('🚀 Back-end started!'))