export type Classes = {
    id: string
    nome: string
    docentes: string
    estudantes: string
    modulo: string
}

export type Student = {
    id: string
    nome: string
    email: string
    data_nasc: string
    turma_id: string
    hobbies: string
}

export type Docente = {
    id: string
    nome: string
    email: string
    data_nasc: string
    turma_id: string
    especialidades: string
}
