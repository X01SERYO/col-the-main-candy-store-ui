import { useAuth } from '../context/authContext';

const Home = () => {
  const { logout, user, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <h1>LOADING</h1>;

  return (
    <div>
      <h1>Bienvenido {user.email} </h1>

      <button onClick={handleLogout}>Salir</button>
    </div>
  );
};

export { Home };
