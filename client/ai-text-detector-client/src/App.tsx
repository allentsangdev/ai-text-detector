import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import TextInputForm from './components/TextInputForm';

function App() {
  return (
    <>
    <AppNavbar/>
    <div className="App">
      
      <header className="App-header">
        <TextInputForm/>
        
      </header>
      
    </div>
    </>
  );
}

export default App;
