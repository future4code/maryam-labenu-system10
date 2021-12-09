import { Request, Response } from "express";
import { connection } from "../data/connection";
import { Classes } from "../types";

export const getAllClasses = async (req:Request, res: Response): Promise<void> => {
    try{
        const classes: Classes[] = await connection("Classes")
        res.send(classes)
    
        } catch (error: any) {
        res.status(400). send({message: error.message})
        }
    }