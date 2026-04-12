import Cabecalho from "./components/Cabecalho";

export default function App() {
  const nome = "João"
  
  return (
    <main>
      <Cabecalho titulo="Dale Grêmio"/>
      <h1 className="">
        Olá {nome}
      </h1>
    </main>
  );
}