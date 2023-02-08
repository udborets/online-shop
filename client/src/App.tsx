import './App.scss'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
