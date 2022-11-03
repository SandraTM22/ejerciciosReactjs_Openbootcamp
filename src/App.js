import './App.css';
import ContactListComponent from './components/container/contactListComponent';
import Cuadrado from './components/container/cuadrado';

function App() {
  return (
    <div className="App">      
        <ContactListComponent></ContactListComponent>
        
        {/* Ejercicio de lección 10,11 y 12 */}
        <Cuadrado></Cuadrado>
    </div>
  );
}

export default App;
