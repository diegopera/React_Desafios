import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import OrderConfirmation from './components/OrderConfirmation/OrderConfirmation';
import CartContainer from './components/CartContainer/CartContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from './context/cartContext';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/product/:productID" element={<ItemDetailContainer />} />
          <Route path="/orders/:orderID" element={<OrderConfirmation />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="about" element={<About />} />
          <Route path="/notfound" element={<PageNotFound/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
