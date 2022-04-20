// Importações de components, estilização, libs
import "./App.css";
import Card from "./components/Card";

// Declaração do componente Funcional ou Classe
function App() {
  // Lógica do componente
  const infos = [
    {
      country: "Brasil",
      population: "220 milhoes",
      size: "9 milhões de KM",
    },
    {
      country: "Estados Unidos",
      population: "340 milhoes",
      size: "9.5 milhões de KM",
    },
    {
      country: "Argentina",
      population: "40 milhoes",
      size: "6.5 milhões de KM",
    },
    {
      country: "França",
      population: "95 milhoes",
      size: "2.5 milhões de KM",
    },
  ];

  return (
    // JSX - HTML que será colocado na tela
    <div className="App">
      <header className="App-header">
        {infos.map((info, index) => {
          return <Card key={index} info={info} />;
        })}
      </header>
    </div>
  );
}

// Exportação do componente
export default App;
