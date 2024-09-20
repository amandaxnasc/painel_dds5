import React from 'react';
import styles from './Home.module.css';
import Cabecalho from '../layout/Cabecalho';
import TabelaAulas from '../tabelaAulas/TabelaAulas';
import LateralImagens from '../Lateral_imagens/LateralImagens';

function Home() {
  return (
    <>
      <Cabecalho/>
      <TabelaAulas/>
      <LateralImagens/>
    </>
  )
}

export default Home;