import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Classes } from "../types";

export const createClasses = async (req: Request, res: Response): Promise<void> => {
    try {

        const {name, teachers, students, module} = req.body

        if(!name || !teachers || !students || !module) {
            throw new Error("É necessário preencher todos os parâmetros.")
        }

        const classes: Classes = {
            id: Date.now().toString(),
            name: name,
            teachers: teachers,
            students: students,
            module: module
        }

        await connection("LabenuSystem_Classes")
        .insert(classes)

        res.status(201).send({message: "Turma criada com sucesso!"})

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
} 