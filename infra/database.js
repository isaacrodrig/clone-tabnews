import { Client } from "pg"; // Importar o Client no módulo `pg`

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  });

  await client.connect(); // Pedir para se conectar e aguardar por isso, antes do restante do script continuar

  const result = await client.query(queryObject); // Depois de conectado, rodar a Query e aguardar o retorno

  await client.end(); // Pedir para encerrar a conexão com o banco de dados, desconectar esse client.

  return result;
}

export default {
  query: query,
};
