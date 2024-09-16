import { useEffect, useState } from "react";
import AbreviaData from "./AbreviaData";
import AbreviaInstrutor from "./AbreviaInstrutor";
import AbreviaUC from "./AbreviaUC";
import AbreviaAmbiente from "./AbreviaAmbiente";

function TabelaAulas() {

    const [aulas, setAulas] = useState([]);
    useEffect(() => {
        baixarAulas();
    }, [])

    async function baixarAulas() {
        try {
            const resposta = await fetch('http://localhost:5000/aulas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'aplication/json'
                }
            });

            if (!resposta) {
                throw new Error('Erro ao buscar aulas');
            }
            const consulta = await resposta.json();
            setAulas(consulta);
        } catch (error) {
            console.log('Erro ao consultar aulas', error);
        }
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Inicio</th>
                        <th>Fim</th>
                        <th>Turma</th>
                        <th>Instrutor</th>
                        <th>Unidade Curricular</th>
                        <th>Ambiente</th>
                    </tr>
                </thead>
                <tbody>
                    {aulas.map((aula) => (
                        <tr key={aulas.id}>
                            <td><AbreviaData data={aula.data_hora_inicio} /></td>
                            <td><AbreviaData data={aula.data_hora_fim} /></td>
                            <td>{aula.turma}</td>
                            <td><AbreviaInstrutor instrutor={aula.instrutor} /></td>
                            <td><AbreviaUC unidade_curricular ={aula.unidade_curricular} /></td>
                            <td><AbreviaAmbiente ambiente={aula.ambiente} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaAulas;