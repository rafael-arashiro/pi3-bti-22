require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Conexão com o banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nome_do_banco'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err.message);
  } else {
    console.log('Conectado ao MySQL');
  }
});

// Rota para listar instituições
app.get('/api/v1/instituicoes', (req, res) => {
    const query = `
      SELECT 
        id,
        nome,
        ST_X(localizacao) AS localx,
        ST_Y(localizacao) AS localy,
        descricao AS servico
      FROM ong
    `;
  
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erro ao buscar instituições:', err.message);
        res.status(500).json({ error: 'Erro no servidor' });
      } else {
        res.json(results);
      }
    });
  });
  


// Rota raiz
app.get('/', (req, res) => {
  res.send('API funcionando! 🚀');
});

app.post('/api/v1/instituicoes', async (req, res) => {
    const { nome, localx, localy, servico } = req.body;
  
    if (!nome || !localx || !localy || !servico) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }
  
    const query = `
      INSERT INTO ong (nome, descricao, telefone, email, website, endereco_textual, localizacao)
      VALUES (?, ?, ?, ?, ?, ?, POINT(?, ?))
    `;
  
    const values = [
      nome,
      servico,         
      '',              
      '',              
      '',             
      '',              
      parseFloat(localx), 
      parseFloat(localy) 
    ];
  
    try {
      await db.promise().query(query, values);
      res.status(201).json({ message: "Instituição cadastrada com sucesso!" });
    } catch (error) {
      console.error('Erro ao cadastrar instituição:', error);
      res.status(500).json({ error: 'Erro interno no servidor' });
    }
  });
  
// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
