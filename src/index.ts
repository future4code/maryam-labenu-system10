import app from "./app"

import {createClasses } from "./endpoints/turma/createClasses";
import {getAllClasses } from "./endpoints/turma/getAllClasses";
import {putClassesModule } from "./endpoints/turma/putClassModule";
import {createTeachers} from "./endpoints/Docente/createTeacher"
import {getAllTeachers} from "./endpoints/Docente/getAllTeachers"
import {putTeachersClass} from "./endpoints/Docente/putTeacherClass"
// Turma 
app.post("/classes", createClasses)
app.get("/classes", getAllClasses)
app.put("/classes", putClassesModule)
// Estudantes



// Docentes
app.post("/teachers",createTeachers)
app.get("/teachers",getAllTeachers)
app.put("/teachers",putTeachersClass)