import { useState } from 'react';
import './App.css'

export default function App() {
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function criarTarefa() {
    if (descricaoTarefa === '') {
      return;
    }

    const tarefa = {
      id: Date.now(),
      descricao: descricaoTarefa
    }

    setTarefas([...tarefas, tarefa]);
    setDescricaoTarefa('');
  }

  function excluirTarefa(idTarefa) {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== idTarefa));
  }

  return (
    <main id='container'>
      <h1>To-do-List</h1>

      <input type="text" value={descricaoTarefa}
      onChange={e => setDescricaoTarefa(e.target.value)} />

      <button onClick={criarTarefa}>Criar</button>

      {tarefas.map(tarefa => (
          <div key={tarefa.id} className='tarefa'>
            <p><strong>{tarefa.descricao}</strong></p>
            <button onClick={() => excluirTarefa(tarefa.id)}>🗑️</button>
          </div>
      ))}
    </main>
  )
}