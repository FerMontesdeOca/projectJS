import { app } from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./db.js";



console.log('Iniciando el Backend:..');

connectDB();

app.listen(PORT, ()=>{
  console.log('Server is Running on port:',PORT);
})



