import { Alert } from './Alert';
import { useState } from 'react';
import { useAuth } from '../context/authContext';

const RecoverPassword = () => {
  const [user, setUser] = useState({ email: '' });
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const { resetPassword } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ [name]: value });
  };

  const handleRecoverPassword = async e => {
    e.preventDefault();
    setError('');
    if (!user.email) return setError('Ingrese un correo electronico');
    try {
      console.log(user);
      await resetPassword({ email: user.email });
      setSuccess('Ingrese a su correo para cambiar su contraseña');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      {error && <Alert message={error} />}
      {success && <Alert message={success} />}

      <form onSubmit={handleRecoverPassword}>
        <label htmlFor="email">Correo</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="youremail@company.com"
          onChange={handleChange}
        />
        <h3>RECAPHCTA</h3>
        <button>Enviar correo electronico</button>
      </form>
    </div>
  );
};

export { RecoverPassword };
