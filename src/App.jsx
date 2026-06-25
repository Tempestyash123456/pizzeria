import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import OrderPizza from './pages/OrderPizza/OrderPizza.jsx'
import BuildPizza from './pages/BuildPizza/BuildPizza.jsx'
import Cart from './pages/Cart/Cart.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="order-pizza" element={<OrderPizza />} />
          <Route path="build-pizza" element={<BuildPizza />} />
          <Route path="cart" element={<Cart />} /> 
        </Routes>
      </main>
      <Footer />
    </div>
  );
}