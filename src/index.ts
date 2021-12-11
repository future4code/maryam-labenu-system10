import app from "./app";
import createStudents from "./endpoints/createStudents";
import { createClasses } from "./endpoints/createClasses";
import { getAllClasses } from "./endpoints/getAllClasses";
import { putClassesModule } from "./endpoints/putClassModule";
import { createTeachers } from "./endpoints/createTeacher";
// Turma

app.post("/classes", createClasses);
app.get("/classes", getAllClasses);
app.put("/classes", putClassesModule);

// Estudantes

app.post("/students", createStudents);

// Docentes

app.post("/teachers", createTeachers);
