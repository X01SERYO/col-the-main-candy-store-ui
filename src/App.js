import { Home } from './components/Home';
import { Login } from './components/Login';
import { Catalog } from './components/Catalog';
import { Register } from './components/Register';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { RecoverPassword } from './components/ResetPassword';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/reset-password" element={<RecoverPassword />}></Route>
      </Routes>
    </AuthProvider>
  );
};

export { App };
