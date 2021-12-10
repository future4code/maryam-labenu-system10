import { connection } from "../../data/connection";

export const updateTeachers = async (id:string, classId:string):Promise<any> => {
    if(classId){
        await connection.raw(`
            UPDATE LabenuSystem_Teachers
            SET classId='${classId}'
            WHERE id = '${id}'
        `)
    }
} 