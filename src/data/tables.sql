CREATE TABLE IF NOT EXISTS LabenuSystem_Classes (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    module ENUM ("0", "1", "2", "3", "4", "5", "6") DEFAULT "0"
);

CREATE TABLE IF NOT EXISTS LabenuSystem_Students (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birthdate DATE NOT NULL,
    classId VARCHAR(255) NOT NULL,
    FOREIGN KEY (classId) REFERENCES LabenuSystem_Classes(id)
);
CREATE TABLE IF NOT EXISTS LabenuSystem_Hobby (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS LabenuSystem_Hobby_Student (
    id VARCHAR(255) PRIMARY KEY,
    studentsId VARCHAR(255),
    hobbyId VARCHAR(255),
    FOREIGN KEY (studentsId) REFERENCES LabenuSystem_Students(id),
    FOREIGN KEY (hobbyId) REFERENCES LabenuSystem_Hobby(id)
);


CREATE TABLE IF NOT EXISTS LabenuSystem_Teachers (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birthdate DATE NOT NULL,
    classId VARCHAR(255) NOT NULL,
    FOREIGN KEY (classId) REFERENCES LabenuSystem_Classes(id)
);

CREATE TABLE IF NOT EXISTS LabenuSystem_Specialties (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE DEFAULT "JS"
);

CREATE TABLE IF NOT EXISTS LabenuSystem_Specialties_Teacher (
    id VARCHAR(255) PRIMARY KEY,
    teachersId VARCHAR(255) NOT NULL,
    specialtiesId VARCHAR(255) NOT NULL,
    FOREIGN KEY (teachersId) REFERENCES LabenuSystem_Teachers(id),
    FOREIGN KEY (specialtiesId) REFERENCES LabenuSystem_Specialties(id)
);