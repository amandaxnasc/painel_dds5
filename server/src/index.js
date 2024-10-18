// Importando express
import express from 'express';

// Importando cross
import cors from 'cors';

// Importando funções (metodos do cntroller)
import { mostrarAulas,criarAula, atualizarAula, excluirAula } from './controllers/AulaController.js';

// Chamando função express
const app = express();
const porta = 5000;

// Habilitando cors
app.use(cors());

//Habilitando Json
app.use(express.json());

// Rota padrão para teste de API
app.get('/',(req,res)=>{
    res.send('Teste de API funcionando')
});

// Rotas de aulas
app.post('/aulas',criarAula);
app.get('/aulas',mostrarAulas);
app.put('/aulas/:id',atualizarAula);
app.delete('/aulas/:id',excluirAula)


// Iniciando API e exibindo mensagem no console com a porta
app.listen(porta,()=>{
    console.log(`API Rodando na porta ${porta}`)
});