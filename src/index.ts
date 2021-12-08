import app from "./app"

import { createClasses } from "./endpoints/createClasses";
import { getAllClasses } from "./endpoints/getAllClasses";


app.post("/classes", createClasses)
app.get("/classes", getAllClasses)