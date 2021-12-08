import { connection } from "./connection";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
};

const createTables = () =>
    connection
        .raw(
            `
        CREATE TABLE IF NOT EXISTS aula51_users (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            nickname VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            address VARCHAR(255) NOT NULL
        );

        `)
        .then(() => { console.log("Tabelas criadas") })
        .catch(printError)


//

const closeConnection = () => { connection.destroy() }

createTables()
    .then()
    .finally(closeConnection)