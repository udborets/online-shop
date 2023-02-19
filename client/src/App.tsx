import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useUser } from './hooks/useUser';
import { useState, useEffect } from 'react';
import { check } from './http/userApi';
import './styles/Spinner.scss'
import LogoutSure from './components/modals/LogoutSure';

const App = () => {
  const user = useUser();
  const [isLoading, setIsLoding] = useState(false);

  useEffect(() => {
    console.log(user)
    if (localStorage.getItem("token")) {
      setIsLoding(true);
      check()
        .then(data => {
          user.changeUser(data);
          user.toggleUserAuth(true);
        })
        .finally(() => setIsLoding(false))
    }
  }, [])

  if (isLoading) {
    return <div className="loader"></div>
  }

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
