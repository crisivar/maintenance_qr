import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { RootState } from './store/store';
import { loginSuccess } from './store/authSlice';
import Login from './views/Login';
import HomeView from './views/HomeView';
import MainLayout from './components/MainLayout';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // Al montar el componente, simulamos el inicio de sesión del usuario (podría ser a través de una cookie, token, etc.)
  useEffect(() => {
    dispatch(loginSuccess('admin'));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/login">
          {/* Si el usuario no está autenticado, renderizamos el componente de Login */}
          {!isAuthenticated ? <Login /> : <Navigate to="/" />}
        </Route>
        <Route path="/">
          {/* Si el usuario está autenticado, renderizamos el componente de HomeView dentro de MainLayout */}
          {isAuthenticated ? <MainLayout><HomeView /></MainLayout> : <Navigate to="/login" />}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
