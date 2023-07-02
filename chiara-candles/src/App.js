import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <ItemListContainer greetings="Bievenidos - Primera Entrega React"/>
      <Footer />
    </div>

  );
}

export default App;
