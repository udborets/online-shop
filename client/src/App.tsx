import './styles/App.scss'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouterComponent';
import NavBar from './components/NavBarComponent';
import Footer from './components/FooterComponent';


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
