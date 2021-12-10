import {Request, Response} from "express";
import { updateClasses } from "./updateClasses";

export const putClassesModule = async (req:Request, res: Response):Promise<any> => {
    try {
        if (
            !req.body.id ||
            !req.body.module
        ) {
            res.status(400).send({
                message: "Insira os dados corretamente!"
            })
        }

        await updateClasses(
            req.body.id,
            req.body.module
        )

        res.status(200) .send("Modulo de turma atualizada")

    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
} 
