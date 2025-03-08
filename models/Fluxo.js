import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Usuario = sequelize.define("Usuario", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
  });

  return Usuario;
};
