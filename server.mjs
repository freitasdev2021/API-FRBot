import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken"; 
import CryptoJS from "crypto-js";

function randomHash() {
  // Gerar uma string única baseada no timestamp e dados aleatórios
  const uniqueData = Date.now().toString() + Math.random().toString(36).substring(2);

  // Gerar o hash SHA-256
  return CryptoJS.SHA256(uniqueData).toString(CryptoJS.enc.Hex);
}

const app = express();
app.use(express.json()); // ✅ Permite JSON no body
app.use(cors()); // ✅ Permite requisições de outras origens

const users = [{ id: 1, email: "admin@teste.com", password: "123456" }];
var SECRET_KEY = randomHash(); 

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Recebido:", email, password); // 🔍 Verifique no console

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Usuário ou senha inválidos" });

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

// 🔹 Inicia o servidor
app.listen(3000, () => console.log("API rodando em http://localhost:3000"));
