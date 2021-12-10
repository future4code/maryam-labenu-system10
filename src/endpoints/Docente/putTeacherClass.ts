import {Request, Response} from "express";
import { updateTeachers } from "./updateTeachers";
export const putTeachersClass = async (req:Request, res: Response):Promise<any> => {
    try {
        if (
            !req.body.id ||
            !req.body.classId
        ) {
            res.status(400).send({
                message: "Insira os dados corretamente!"
            })
        }
        await updateTeachers(
            req.body.id,
            req.body.classId
        )
        res.status(200) .send("Turma do professor atualizada")
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }
}