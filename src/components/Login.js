import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from './Alert';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const { login } = useAuth();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await login({ email: user.email, password: user.password });
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      {error && <Alert message={error} />}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@company.com"
          onChange={handleChange}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="******"
        />

        <button>Iniciar Sesión</button>

        <a href='/reset-password'>Olvidé mi contraseña</a>

      </form>
    </div>
  );
};

export { Login };
