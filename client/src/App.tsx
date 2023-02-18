import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useUser } from './hooks/useUser';
import LogoutSure from './components/modals/LogOutSure';



const App = () => {
  const user = useUser();
  return (
    <BrowserRouter>
      <LogoutSure
        active={user.user.isShowingLogout}
        setActive={user.toggleIsShowingLogout}
      />
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
