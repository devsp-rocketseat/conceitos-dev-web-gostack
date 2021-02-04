// Importando o express
const express = require('express')


// Importando pacote que gera IDs unicos
const { v4: uuid, validate: isUuid } = require('uuid')


// Criando um servidor
const app = express()


// Configurando o express para receber JSON nas requisições
app.use(express.json())


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

/*
   Tipos de parâmetros:

   Query Params: Filtros e paginação
   Route Params: Identificar recursos (Atualizar/Deletar)
   Request Body: Conteúdo na hora de criar ou editar um recurso (JSON)
*/

/*
    Middleware:

    Interceptador de requisições que pode interromper totalmente a requisição ou alterar dados da requisição.
*/


// Emulando um banco de dados para praticar
const projects = []


// Criando um Middleware
function logRequests(request, response, next) {
    const { method, url } = request

    const logLabel = `[${method}] ${url}`

    console.log(logLabel)

    next()
}

function validateProjectId(request, response, next) {
    const { id } = request.params

    if (!isUuid(id)) {
        return response.status(400).json({ error: 'Invalid project ID.' })
    }

    return next()
}


// Setando os Middlewares para ser executado antes de outras rotas
app.use(logRequests)
app.use('/projects/:id', validateProjectId)


// Criando as rotas
app.get('/', (request, response) => {
    return response.send('Hello World')
})

app.get('/projects', (request, response) => {
    const { title } = request.query

    const results = title
        ? projects.filter(project => project.title.includes(title))
        : projects

    return response.json(results)
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body

    const project = { id: uuid(), title, owner }

    projects.push(project)

    return response.json(project)
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params
    const { title, owner } = request.body

    const projectIndex = projects.findIndex(project => project.id === id)

    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found.' })
    }

    const project = { id, title, owner }

    projects[projectIndex] = project

    return response.json(project)
})

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params

    const projectIndex = projects.findIndex(project => project.id === id)

    if (projectIndex < 0) {
        return response.status(400).json({ error: 'Project not found.' })
    }

    projects.splice(projectIndex, 1)

    return response.status(204).send()
})


// Definindo uma porta para o Node
app.listen(3333, () => console.log('🚀 Back-end started!'))