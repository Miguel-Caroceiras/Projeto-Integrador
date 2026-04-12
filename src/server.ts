import app from "./app";
import database from "./config/database";

const PORT = 3000;

async function startServer() {
  await database.connect();

  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

startServer();