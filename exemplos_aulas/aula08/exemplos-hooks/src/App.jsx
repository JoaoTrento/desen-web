import { useState } from 'react';
import './App.css'
import Button from './components/button';

export default function App() {
  const [contador, setContador] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [nomeProduto, setNomeProduto] = useState('');
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Teclado Gamer - RedDragon', valor: 200},
    { id: 2, nome: 'Memória Ram Corsair - DDR5', valor: 42200},
  ])

  function incrementar() {
    setContador(contador + 1);

    console.log(contador)
  }

  function criarProduto() {
    const produto = {
      id: produtos.length + 1,
      nome: nomeProduto,
      valor: 50.48
    }

    setProdutos([...produtos, produto])
  }

  setInterval(() => setCarregando(false), 5000)

  return(
    <main id='root'>
      <h1>Contador</h1>
      <p>Valor:{contador}</p>
      <Button texto='Incrementar' 
      funcao={incrementar}/>
      <h1>Carrinho</h1>
      {carregando ?
        <h3>Carregando</h3>
        :
        produtos.map(produto => (
          <span key={produto.id}>
            <p>Nome: {produto.nome}</p>
            <p>Valor: {produto.valor}</p>
          </span>
        ))
      }
      <h3>Adicionar Produto</h3>
      <input type="text" value={nomeProduto}
      onChange={e => setNomeProduto(e.target.value)} />
      <p>{nomeProduto}</p>
      <Button texto='Criar' 
      funcao={criarProduto}/>
    </main>
  )
}