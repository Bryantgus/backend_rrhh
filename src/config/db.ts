// src/config/database.ts
import { Sequelize } from "sequelize";
import colors from 'colors'

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "src/data/db.sqlite",
  logging: false,
});

export default async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log(colors.green.bold("🟢 Conexión a la base de datos establecida correctamente."));
    await sequelize.sync(); 
    console.log(colors.gray.bold("📦 Tablas sincronizadas."));
  } catch (error) {
    console.error("🔴 Error al conectar con la base de datos:", error);
    process.exit(1);
  }
}