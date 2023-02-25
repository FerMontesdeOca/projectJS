import mongoose from "mongoose";
import { MONGODBURI } from "./config.js";

export async function connectDB() {
  try {
    mongoose.set('strictQuery', false);
    const db = await mongoose.connect(MONGODBURI);
    console.log("Connected to:", db.connection.db.namespace);
    if(db.connection.db.namespace){
      console.log(`Conexion exitosa a DB: ${db.connection.db.namespace}`);
    }else{
      console.log('Talvez hay un error en la conexion a la DB:...');
    }
  } catch (error) {
    console.error(`Talvez hay un error en la conexion a la DB:...${error}`);
  }
}