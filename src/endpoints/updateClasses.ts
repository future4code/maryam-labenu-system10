import { connection } from "../data/connection";

export const updateClasses = async (id:string, module:string):Promise<any> => {
    if(module){
        await connection.raw(`
            UPDATE Classes
            SET module ='${module}'
            WHERE id = '${id}'
        `)
    }
} 