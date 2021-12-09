import { connection } from "./connection";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
};

const createTables = () =>
    connection
        .raw(`

        CREATE TABLE IF NOT EXISTS Classes (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            module ENUM ("0", "1", "2", "3", "4", "5", "6") DEFAULT "0"
        );



        CREATE TABLE IF NOT EXISTS Students (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            birth_date DATE NOT NULL,
            classes_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (classes_id) REFERENCES Classes(id)
        );

        CREATE TABLE IF NOT EXISTS Hobby_Student (
            id VARCHAR(255) PRIMARY KEY,
            students_id VARCHAR(255) FOREIGN KEY NOT NULL,
            hobby_id VARCHAR(255) FOREIGN KEY NOT NULL,
            FOREIGN KEY (students_id) REFERENCES Students(id),
            FOREIGN KEY (hobby_id) REFERENCES Hobby(id)
        );
        
        CREATE TABLE IF NOT EXISTS Hobby (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
        );



        CREATE TABLE IF NOT EXISTS Teachers (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            birth_date DATE NOT NULL,
            classes_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (classes_id) REFERENCES Classes(id)
        );
        
        CREATE TABLE IF NOT EXISTS Specialties_Teacher (
            id VARCHAR(255) PRIMARY KEY,
            teachers_id VARCHAR(255) NOT NULL,
            specialties_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (teachers_id) REFERENCES Teachers(id),
            FOREIGN KEY (specialties_id) REFERENCES Specialties(id)
        );
        
        CREATE TABLE IF NOT EXISTS Specialties (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL UNIQUE,
        );

        `)
        .then(() => { console.log("Tabelas criadas") })
        .catch(printError)


//

const closeConnection = () => { connection.destroy() }

createTables()
    .then()
    .finally(closeConnection)