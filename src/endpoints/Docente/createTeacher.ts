import { teacherType } from "../../types";
import { connection } from "../../data/connection";
import { Request, Response } from "express";

export const createTeachers = async (req:Request,res:Response): Promise<void> =>{
	try {
		const {name,email,birthdate,classId,specialties} = req.body

		if(!name || !email|| !birthdate || !classId || !specialties){
			throw new Error("É necessário preencher todos os parâmetros")
		}
		const teachers: teacherType = {
			id:Date.now().toString(),
			name:name,
			email:email,
			birthdate:new Date(birthdate),
			classId:classId,
			specialties:specialties
			
		}


		await connection("LabenuSystem_Teachers")
		.insert({
			id:teachers.id,
			name:teachers.name,
			email:teachers.email,
			birthdate:teachers.birthdate,
			classId:teachers.classId
		})

		for(let specialty of specialties){

			const arrSpecialty = await connection ("LabenuSystem_Specialties")
			.select()
			.where({name:specialty})

			await connection ("LabenuSystem_Specialties_Teacher")
			.insert({
				id:Date.now().toString(),
				teachersId:teachers.id,
				specialtiesId:arrSpecialty[0].id
			})
		}

		res.status(201).send({message:"Docente Criado com sucesso"})

	}catch (error:any) {
		res.status(400).send({message:error.message})
	}
}