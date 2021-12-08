import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Classes } from "../types";

export const getAllClasses = async (req: Request, res: Response): Promise<void> => {
    // try {

    //     const classesOrigin: Classes[] = await connection("Classes")
    //     const students = await connection.raw(`
    //     SELECT students.id, students.name, students.name, students.birth_date, students.classes_id FROM Students
    //     JOIN Classes
    //     ON 
    //     JOIN Classes
    //     ON 
    // `)

    //     const students = students[0]
    //     const classes = {...classesOrigin, }

    //     res.status(200).send({classes})

    // } catch (error:any) {
    //     res.status(400).send({message: error.message})
    // }
} 