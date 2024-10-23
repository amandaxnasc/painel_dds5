//Importando funções do AulaModel
import { createAula, readAula, updateAula, deleteAula, showOneAula } from "../models/AulaModel.js";
import { isNullOEmpty, verificaAula } from "../validations/AulaValidation.js";

export async function criarAula(req, res) {

    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController cirarAula');

    //Criando constante com a requisição
    const aula = req.body;

    //Exibindo corpo da requisição
    console.log(aula);

    if (verificaAula(aula)) {
        res.status(400).json({ messaage: 'Todas as propriedades devem ser criadas' })
    } else {

        //Tentando criar aula
        try {
            const [status, resposta] = await createAula(aula)
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

export async function mostrarAulas(req, res) {

    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController mostrarAula');

    //Criando constante com a requisição
    const aula = req.body;

    //Tentando mostrar aula
    try {
        const [status, resposta] = await readAula(aula);
        res.status(status).json(resposta)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export async function atualizarAula(req, res) {
    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController atualizarAula');

    //Criando constante com a requisição
    const aula = req.body;
    const { id } = req.params;

    if (verificaAula(aula) || isNullOEmpty(id)) {
        res.status(400).json({ messaage: 'Todas as propriedades devem ser criadas' })
    } else {

        //Tentando criar aula
        try {
            const [status, resposta] = await createAula(aula)
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }


        //Tentando atualizar aula
        try {
            const [status, resposta] = await updateAula(aula, id);
            res.status(status).json(resposta)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

export async function excluirAula(req, res) {
    //Ao ser chamado o criarAula controller virá no console
    console.log('AulaController excluirAula');

    //Criando constante com a requisição
    const { id } = req.params;

    if (isNullOEmpty(id)) {        
        res.status(400).json({ messaage: 'O id deve ser informado' })
    } else {

        //Tentando criar aula
        try {
            const [status, resposta] = await createAula(aula)
            res.status(status).json(resposta);
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }


        //Tentando deletar aula
        try {
            const [status, resposta] = await deleteAula(id);
            res.status(status).json(resposta)
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
}

export async function mostrarUmaAula(req, res) {
    //Ao ser chamado o mostrar uma aula controller virá no console
    console.log('AulaController mostrarUmaAula');

    //Criando constante com a requisição
    const { id } = req.params;

    //Tentando mostrar uma aula
    try {
        const [status, resposta] = await showOneAula(id);
        res.status(status).json(resposta)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}