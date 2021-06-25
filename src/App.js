import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {
  return (
   <div className="App">
	<NavBar/>
	<header className="App-header">
		<h1>Pizzas y algo mas...</h1>
		<ItemListContainer/>	
     </header>
    </div>
  );
}

export default App;
