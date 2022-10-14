import logo from './logo.svg';
import './App.css';

function App() {
    const onHandleClick () =>{
      console.log ("hubo clic")
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          HOLA MUNDO
        </p>
        <button onClick={} className='boton_primario'>CLIC AQUI</button>
      </header>
    </div>
  );
}

export default App;
