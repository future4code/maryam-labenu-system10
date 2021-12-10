import { Request, Response } from "express";
import { connection } from "../../data/connection";
import { Students } from "../../types";

export const createStudents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, birthdate, classId, hobby } = req.body;

    if (!name || !email || !birthdate || !classId || !hobby) {
      throw new Error("Preencha todos os parâmetros");
    }

    const generateId = () => {
      return Date.now().toString();
    };

    const student = new Students(
      generateId(),
      name,
      email,
      birthdate,
      classId,
      hobby
    );

    await connection("LabenuSystem_Students").insert({
      id: student.getId(),
      name: student.getName(),
      email: student.getEmail(),
      birthdate: student.getBirthdate(),
      classId: student.getClassId(),
    });

    const hobbies = student.getHobby();

    for (let hobby of hobbies) {
      const hobbyId = generateId();
      await connection("LabenuSystem_Hobby").insert({ id: hobbyId, name });

      await connection("LabenuSystem_Hobby_Student").insert({
        id: generateId(),
        studentsId: student.getId(),
        hobbyId,
      });
    }

    res.status(201).send({ message: "Estudante criadx com sucesso!" });
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
};

export default createStudents;
