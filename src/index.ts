import app from "./app"

import { createClasses } from "./endpoints/createClasses";
import { getAllClasses } from "./endpoints/getAllClasses";
import { putClassesModule } from "./endpoints/putClassModule";
import { createTeachers} from "./endpoints/createTeacher"
// Turma 

app.post("/classes", createClasses)
app.get("/classes", getAllClasses)
app.put("/classes", putClassesModule )
app.post("/teachers",createTeachers)

// Estudantes



// Docentes