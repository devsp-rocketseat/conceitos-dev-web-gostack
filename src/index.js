// Importando o express
const express = require('express')


// Criando um servidor
const app = express()


/*
    Métodos HTTP:

    GET: Buscar informações do back-end
    POST: Criar uma informação no back-end
    PUT/PATCH: Alterar uma informação no back-end
        PUT: Para modificar varias informações de uma vez.
        PATCh: Para modificar uma unica informação.
    DELETE: Deletar uma informação no back-end

    OBS: Chamamos o que vem depois da barra '/projects' de recurso, 
    qual é o recurso que o user esta tentando acessar. 
*/


// Criando as rotas
app.get('/', (request, response) => {
    return response.send('Hello World')
})

app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ])
})

app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ])
})

app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 2',
        'Projeto 3',
    ])
})


// Definindo uma porta para o Node
app.listen(3333, () => console.log('🚀 Back-end started!'))