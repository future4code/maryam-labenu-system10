/// Classes (Turma)

export type Users = {
    id: string,
    name: string,
    email: string,
}

export type Classes = {
    id: string
    name: string
    teachers: string
    students: string
    module: string
}

/// Student (Estudante)

export type Student = {
    id: string
    name: string
    email: string
    birth_date: string
    classes_id: string
}

export type Hobby_Student = {
    id: string
    students_id: string
    hobby_id: string
}

export type Hobby = {
    id: string
    name: string
}


/// Teachers (Docentes)

export type Teachers = {
    id: string
    name: string
    email: string
    birth_date: string
    classes_id: string
}

export type Specialties_Teacher = {
    id: string
    teachers_id: string
    specialties_id: string
}

export type Specialties = {
    id: string
    name: string
}