import React, { useEffect, useState } from 'react'
import styles from './LateralImagens.module.css';

function LateralImagens() {
    const [imagens, setImagens] = useState([]);

    useEffect(() => { carregarImagens() }, []);

    async function carregarImagens() {
        try {
            const resposta = await fetch('http://localhost:5000/imagens', {
                method: 'GET',
                headers: {
                    'Content-Type': 'aplication/json'
                }

            });
            if (!resposta) {
                throw new Error('Erro ao buscar imagens');
            }
            const consulta = await resposta.json();
            setImagens(consulta);
        } catch (error) {
            console.log('Error ao buscar imagens', error);
        }
    }
    return (
        <div c0lassName={styles.lateral}>
            {imagens.map((imagem) => (
                <div key={imagem.id}>
                    <img src={imagem.caminho} alt={imagem.alt} />
                </div>

            ))}
        </div>
    )
}

export default LateralImagens;