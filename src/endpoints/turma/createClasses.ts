import { Request, Response } from "express";
import { connection } from "../../data/connection";

export const createClasses = async (req: Request, res: Response): Promise<void> => {
    try {

        const {name, module} = req.body

        if(!name || !module) {
            throw new Error("É necessário preencher todos os parâmetros.")
        }

        const newClasses = {
            id: Date.now().toString(),
            name: name,
            module: module
        }

        await connection("LabenuSystem_Classes")
        .insert({
            id: newClasses.id,
            name: newClasses.name,
            module: newClasses.module
        })

        res.status(201).send({message: "Turma criada com sucesso!"})

    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
} 