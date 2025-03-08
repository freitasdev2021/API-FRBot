import { readdirSync } from "fs";
import { basename as _basename, join } from "path";
import { fileURLToPath } from "url";
import sequelize from "../config/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

const models = {};

// Ler todos os arquivos da pasta models e importar como models
readdirSync(__dirname)
  .filter((file) => file !== _basename(__filename) && file.endsWith(".js"))
  .forEach((file) => {
    import(`file://${join(__dirname, file)}`).then((module) => {
      const model = module.default(sequelize);
      models[model.name] = model;
    });
  });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;