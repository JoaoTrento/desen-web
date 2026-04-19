import { useState } from 'react';
import './App.css'
import CardCarro from './components/cardCarro';
import imagem_cruze from '../../../imagens/imagem_cruze.jpg'
import BarraLateral from './components/barraLateral';

export default function App() {

  return(
    <div id='root'>
      <h1>Trento Multimarcas - Cruze 2014</h1>
      <nav id='navegacao'>
        <ul>
          <li>Home</li>
          <li>Contato</li>
          <li>Carros</li>
          <li>Sobre</li>
        </ul>
      </nav>
      <div id='pag'>
        <main>
          <CardCarro 
            titulo="Cruze sedã 2014 R$57.000,00" 
            data="2026-04-19" 
            data_escrita="19 de abril de 2026" 
            descricao="Chevrolet Cruze 2014 LT sedã, equipado com motor 1.8 Ecotec Flex e câmbio automático. Um sedã médio que oferece conforto, estabilidade e ótimo desempenho para o dia a dia ou viagens.

    O modelo conta com direção elétrica, ar-condicionado, airbags, freios ABS, controle de tração e central multimídia, proporcionando uma experiência de condução segura e confortável." 
            img={imagem_cruze} 
            img_descricao="Cruze 2014"
            />
        </main>
        <BarraLateral 
        titulo="Outros Carros"
        items={[
          { id: 1, nome: 'Onix Plus 2020 - R$45.000,00' },
          { id: 2, nome: 'Fiesta 2015 - R$25.000,00' },
          { id: 3, nome: 'Civic 2018 - R$80.000,00' },
        ]}
        />
      </div>
    </div>
  )
}