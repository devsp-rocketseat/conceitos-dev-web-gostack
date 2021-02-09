
// Para adicionar os tipos aos parametros podemos usar o dois pontos:
// name: string, email: string, password: string

// Para definir os tipos de um obj, criamos uma interface

interface TechObject {
    title: string
    experience: number
}

interface CreateUserData {
    name?: string
    email: string
    password: string
    // Para determinar o tipo de uma string, usamos o Obj Array e dentro de <> passamos o tipo que o array vai carregar.
    techs: Array<string | TechObject>
    // Outra forma de determinar um array seria: 
    // Tipo unico: (techs: string[])
    // Tipo variavel: (techs: Array<string | TechObject>)

    // O sinal de | ou, pode ser usado em outras situações: (email: string | number)
}


export default function createUser({ name, email, password }: CreateUserData) {
    const user = {
        name,
        email,
        password
    }

    return user
}