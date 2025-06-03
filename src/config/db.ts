import { Sequelize } from 'sequelize-typescript';
import colors from 'colors';
import path from 'path'

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'src/data/db.sqlite',
  logging: false,
  models: [path.resolve(__dirname, '../models')], // Solo funciona con sequelize-typescript
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
