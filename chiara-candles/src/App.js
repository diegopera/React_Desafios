import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
      <Route path="/" element= {<ItemListContainer />} />
      <Route path="/category/:categoryID" element= {<ItemListContainer />} />
      <Route path="/product/:productID" element= {<ItemDetailContainer />} />
      <Route path="about" element= {<About />} />
      <Route path="*" element= {<h1> Page Not Found - Error: 404</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
