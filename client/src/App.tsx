import './styles/App.scss'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import React from 'react';


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
