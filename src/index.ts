import app from "./app"

import { createClasses } from "./endpoints/createClasses";
import { getAllClasses } from "./endpoints/getAllClasses";
import { putClassesModule } from "./endpoints/putClassModule";

// Turma 

app.post("/classes", createClasses)
app.get("/classes", getAllClasses)
app.put("./classes", putClassesModule )

// Estudantes



// Docentes