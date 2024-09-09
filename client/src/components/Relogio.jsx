import { useEffect, useState } from "react";

//Declarando função relogio
function Relogio(){
    //Declarando hora como estado
    const [hora,setHora] = useState('');

    //Chamando função pós carregamento
    useEffect(()=>{
        //Chamando função de Atualizar Horário primeira vez
        atualizaHorario();

        //Declarando intervalo de 1 segundo para atualizar o relógio
        const intervalo = setInterval(atualizaHorario,1000);
        return()=>{
            clearInterval(intervalo);
        }
    },[]);

    //Declarando função que atribui a hora, minutos e segundos atuais
    function atualizaHorario(){
        //Declarando objeto do tipo date
        const agora = new Date();
        //Pegando hora, minutos e segundos
        const horaMinutosSegundos = agora.toLocaleTimeString('pt-br',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
        //Atualizando o estado hora para hora, minutos e segundos atuais
        setHora(horaMinutosSegundos);
    }
    return(
        //Retornado uma div com a hora, minutos e segundos de forma correta.
        <div>{hora}</div>
    )
}

export default Relogio;