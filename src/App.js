// App.js
import './App.css';
import Evento from './components/Evento'; // Certifique-se de que o caminho está correto
import Formulario from './components/Formulario'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <div className="App">
      <h1>Testando os eventos</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <Formulario />
    </div>
  );
}

export default App;
