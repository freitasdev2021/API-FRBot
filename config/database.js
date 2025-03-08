import { Sequelize } from "sequelize";

const sequelize = new Sequelize("frbot", "usuario", "senha", {
  host: "localhost",
  dialect: "mysql", // ou 'postgres', 'sqlite', 'mssql'
  logging: false, // Opcional: remove logs SQL do console
});

export default sequelize;
