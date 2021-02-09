import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWord(request: Request, response: Response) {
    const user = createUser({
        email: 'vitor@teste.com',
        password: '113124321',
        techs: [
            'NodeJS',
            {
                title: '',
                experience: 100
            }
        ]
    })

    return response.json({ message: 'Hello World' })
}