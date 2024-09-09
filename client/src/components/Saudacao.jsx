import { useEffect, useState } from "react";

//Criando função Saudacao
function Saudacao(){
    //Criando estado de saudação
    const[saudacaoPerioddo, setSaudacaoPeriodo] = useState('');
    
    //Chamando função de saudação e defiindo um intervalo de 1 segundo
    useEffect(()=> {
        atualizaSaudacao();
        const intervalo = setInterval(atualizaSaudacao,1000);
        return ()=>{
            clearInterval(intervalo);
        }
    },[])

   //Criando texto da saudação do cabeçalho     
   function atualizaSaudacao(){

    //Declarando obejto do tipo Date
    const agora = new Date();

    //Obtendo hora em inteiro exmplo 07:35:00 retorn 7
    const hora = agora.getHours();

    //Obtendo dia da semana em inteiro iniciando em domingo que retorna 0 e sabado retorna 6
    const dia = agora.getDay();

    //Declarano variavel do exto da saudacao
    let textoSaudacao = '';

    //Definindo array com dias da semana
    const diaSemana = [
        'Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sabado'
    ];
    
    //Adicionando o dia da semana ao textoSaudacao
    textoSaudacao += diaSemana[dia];
    //Adicionando saudação ao textoSaudacao
    if(hora>=18){
        textoSaudacao += ' Boa Noite';
    }else if (hora>=12){
        textoSaudacao += ' Boa Tarde';
    }else{
        textoSaudacao += ' Bom Dia';
    }
    //Chamando função de atribuição
    setSaudacaoPeriodo(textoSaudacao);
    }

    return(
        <div>{saudacaoPerioddo}</div>
    )
}

export default Saudacao;