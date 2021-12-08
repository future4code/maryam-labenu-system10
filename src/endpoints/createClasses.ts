import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Classes } from "../types";

export const createClasses = async (req: Request, res: Response): Promise<void> => {
    try {

        const {nome, docentes, estudantes, modulo} = req.body

        if(!nome || !docentes || !estudantes || !modulo) {
            throw new Error("É necessário preencher todos os parâmetros.")
        }

        const classes: Classes = {
            id: Date.now().toString(),
            nome: nome,
            docentes: docentes,
            estudantes: estudantes,
            modulo: modulo
        }

        await connection("labenu-system")
        .insert(classes)

        res.status(201).send({message: "Turma criada com sucesso!"})

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
} 