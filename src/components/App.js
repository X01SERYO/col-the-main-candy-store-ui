import { Home } from './Home';
import { Login } from './Login';
import { Catalog } from './Catalog';
import { Register } from './Register';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/authContext';
import { ProtectedRoute } from './ProtectedRoute';
import { RecoverPassword } from './ResetPassword';

//import { Login } from './pages/login/Login';
import { ResetPassword } from './pages/resetPassword/ResetPassword';
import { NotFound } from './pages/notFound/NotFound';
import { Header } from './molecules/header/Header';
import { Branches } from './pages/braches/Branches';
import { Products } from './pages/products/Products';
import { Customers } from './pages/customers/Customers';

const App = () => {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="*" Component={NotFound} />
        <Route path="/login" Component={Login} />
        <Route path="/braches" Component={Branches} />
        <Route path="/products" Component={Products} />
        <Route path="/customers" Component={Customers} />
        <Route path="/reset-password" Component={ResetPassword} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/catalog"
          element={
            <ProtectedRoute>
              <Catalog />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
};

export { App };
