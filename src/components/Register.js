import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import { Alert } from './Alert';

const Register = () => {
  const [user, setUser] = useState({ email: '', password: '' });

  const { signup } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await signup({ email: user.email, password: user.password });
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
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

        <button>Registrarse</button>
      </form>
    </div>
  );
};

export { Register };
