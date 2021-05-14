import Articles from './components/Articles';
import './App.css';
import React, { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <>
      <button onClick={handleAuth}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      <Articles/>
    </>
  );
}

export default App;
