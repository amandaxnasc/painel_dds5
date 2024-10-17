//Importando funções do AulaModel
import { createAula, readAula } from "../models/AulaModel.js";
// import { readAula } from "../models/AulaModel.js";

export async function criarAula(req,res) {
    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController cirarAula');

    //Criando constante com a requisição
    const aula = req.body;

    //Exibindo corpo da requisição
    console.log(aula);

    //Tentando criar aula
    try {
        const[status,resposta] = await createAula(aula)
        res.status(status).json(resposta);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function mostrarAulas(req, res) {
    console.log('AulaController mostrarAula');
    const aula = req.body;

    //Exibindo corpo da requisição
    console.log(aula);

    try {
       const [status,resposta] = await readAula(aula);
        res.status(status).json(resposta)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}