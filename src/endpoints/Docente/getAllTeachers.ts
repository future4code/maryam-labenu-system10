import { teacherType } from "../../types";
import { connection } from "../../data/connection";
import { Request, Response } from "express";

export const getAllTeachers = async (req:Request,res:Response): Promise<void>=>{
    try{
        const teachers: teacherType[] = await connection("LabenuSystem_Teachers")
        res.send(teachers)
    }catch(Error:any){
        res.status(404).send({message: Error.message})

    }
}