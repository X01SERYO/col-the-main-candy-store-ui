import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Link,
  Grid,
  Paper,
  Typography,
  Avatar,
  Box,
  Alert,
  FormHelperText,
} from '@mui/material';
import { Visibility, VisibilityOff, LockOutlined } from '@mui/icons-material';
import './login.css';

const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState();
  const [emailError, setEmailError] = useState();
  const [error, setError] = useState();
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = user;
    setEmailError();
    setPasswordError();
    if (!email) setEmailError('El correo electrónico es obligatorio');
    if (!password) setPasswordError('La contraseña es obligatoria');
    if (!email || !password) return;
    try {
      await login({ email, password });
      navigate('/');
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/user-not-found') {
        setError('El correo electrónico no se encuentra registrado');
        return;
      }
      if (error.code === 'auth/wrong-password') {
        setError('La contraseña es incorrecta');
        return;
      }
      setError(error.message);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
    if (user.email) setEmailError();
    if (user.password) setPasswordError();
  };

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleAlertClose = () => setError();

  return (
    <div>
      <Grid sx={{ height: '100vh' }} padding={3}>
        {error && (
          <Alert onClose={handleAlertClose} severity="error">
            {error}
          </Alert>
        )}
        <Grid
          container
          component="main"
          sx={
            (error && { height: 'calc(100% - 11%)' }) || {
              height: 'calc(100% - 2%)',
            }
          }
          paddingTop={3}
          paddingBottom={2}
        >
          <Grid item xs={false} sm={12} md={6} className="image" />
          <Grid
            item
            xs={12}
            sm={12}
            md
            elevation={6}
            component={Paper}
            display="flex"
            justifyContent="center"
          >
            <Box
              margin={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlined />
              </Avatar>
              <Typography component="h1" variant="h5">
                Iniciar Sesión
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                marginTop={1}
              >
                <TextField
                  type="email"
                  margin="normal"
                  required
                  autoFocus
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&.Mui-focused fieldset': { borderColor: '#FC5400' },
                    },
                  }}
                  label="Correo Electrónico"
                  name="email"
                  id="email"
                  fullWidth
                  onChange={handleChange}
                  helperText={emailError}
                  error={emailError}
                />
                <FormControl
                  margin="normal"
                  required
                  fullWidth
                  variant="outlined"
                  error={passwordError}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Contraseña
                  </InputLabel>
                  <OutlinedInput
                    color="secondary"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Contraseña"
                  />
                  {passwordError && (
                    <FormHelperText>{passwordError}</FormHelperText>
                  )}
                </FormControl>
                <Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Iniciar Sesión
                  </Button>
                </Grid>
              </Box>
              <Grid container>
                <Grid item xs>
                  <Link href="/reset-password" variant="body2">
                    Olvidé mi contraseña
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Registrarme
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid>
          <Copyright />
        </Grid>
      </Grid>
    </div>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Dulcería La Principal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export { Login };
