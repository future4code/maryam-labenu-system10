import { connection } from "./connection";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
};

const createTables = () =>
    connection
        .raw(`
        CREATE TABLE IF NOT EXISTS LabenuSystem_Classes (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            module ENUM ("0", "1", "2", "3", "4", "5", "6") DEFAULT "0"
        );


        CREATE TABLE IF NOT EXISTS LabenuSystem_Students (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            birth_date DATE NOT NULL,
            classes_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (classes_id) REFERENCES LabenuSystem_Classes(id)
        );

        CREATE TABLE IF NOT EXISTS LabenuSystem_Hobby (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE
        );

        CREATE TABLE IF NOT EXISTS LabenuSystem_Hobby_Student (
            id VARCHAR(255) PRIMARY KEY,
            students_id VARCHAR(255) FOREIGN KEY NOT NULL,
            hobby_id VARCHAR(255) FOREIGN KEY NOT NULL,
            FOREIGN KEY (students_id) REFERENCES LabenuSystem_Students(id),
            FOREIGN KEY (hobby_id) REFERENCES LabenuSystem_Hobby(id)
        );
        


        CREATE TABLE IF NOT EXISTS LabenuSystem_Teachers (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            birth_date DATE NOT NULL,
            classes_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (classes_id) REFERENCES LabenuSystem_Classes(id)
        );

        CREATE TABLE IF NOT EXISTS LabenuSystem_Specialties (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE DEFAULT "JS",
        );
        
        CREATE TABLE IF NOT EXISTS LabenuSystem_Specialties_Teacher (
            id VARCHAR(255) PRIMARY KEY,
            teachers_id VARCHAR(255) NOT NULL,
            specialties_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (teachers_id) REFERENCES LabenuSystem_Teachers(id),
            FOREIGN KEY (specialties_id) REFERENCES LabenuSystem_Specialties(id)
        );
        
        
        
        
        `)
        .then(() => { console.log("Tabelas criadas") })
        .catch(printError)


//

const closeConnection = () => { connection.destroy() }

createTables()
    .then()
    .finally(closeConnection)