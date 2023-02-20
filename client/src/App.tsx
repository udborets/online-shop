import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useUser } from './hooks/useUser';
import { useState, useEffect } from 'react';
import { check } from './http/userApi';
import './styles/Spinner.scss'
import LogoutSure from './components/modals/LogoutSure';
import { useLogout } from './hooks/useLogout';

const App = () => {
  const { isShowingLogout, changeUser, toggleUserAuth } = useUser();
  const { toggleIsShowingLogout } = useLogout();
  const [isLoading, setIsLoding] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoding(true);
      check()
        .then(data => {
          changeUser(data);
          toggleUserAuth(true);
        })
        .finally(() => {
          setIsLoding(false);
        })
    }
  }, [])

  if (isLoading) {
    return <div className="loader"></div>
  }

  return (
    <BrowserRouter>
      <LogoutSure
        active={isShowingLogout}
        setActive={toggleIsShowingLogout}
      />
      <NavBar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
