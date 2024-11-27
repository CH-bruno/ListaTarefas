import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Checkbox, FormControlLabel, Box, Typography, Paper } from '@mui/material';
import { useState } from 'react';

// Definindo a interface para os valores do formulário
interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const TelaLogin = () => {
  const [loginError, setLoginError] = useState(''); // Estado para armazenar o erro de login
  let navigate = useNavigate();

  // Função de simulação de login com tipo LoginFormValues
  const simulateLogin = (values: LoginFormValues) => {
    const { email, password } = values;
    // Simular login com username = 'teste' e senha = '123'
    if (email === 'teste' && password === '123') {
      setLoginError(''); // Limpar erros anteriores
      navigate('/tarefas');
    } else {
      setLoginError('Usuário ou senha incorretos!');
    }
  };

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Campo obrigatório'),
      password: Yup.string().required('Campo obrigatório'),
    }),
    onSubmit: (values) => {
      simulateLogin(values); // Chamar a função de simulação de login
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8', // Cor de fundo mais clara
      }}
    >
      {/* Adicionando o fundo branco e borda arredondada */}
      <Paper elevation={3} sx={{ padding: '32px', borderRadius: '8px', width: '350px', backgroundColor: 'white' }}>
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
          <Typography variant="h4" component="h1" align="center" color="primary">
            Entrar
          </Typography>
          <Typography align="center" color="textSecondary">
            Bem-vindo usuário, faça login para continuar
          </Typography>

          <TextField
            fullWidth
            id="email"
            name="email"
            label="Endereço de email"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            type="password"
            id="password"
            name="password"
            label="Senha"
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                id="rememberMe"
                name="rememberMe"
                onChange={formik.handleChange}
                checked={formik.values.rememberMe}
              />
            }
            label="Lembre de mim"
          />

          {/* Exibir mensagem de erro, se houver */}
          {loginError && (
            <Typography color="error" variant="body2" style={{ marginTop: '10px', textAlign: 'center' }}>
              {loginError}
            </Typography>
          )}

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            style={{ marginTop: '16px', backgroundColor: '#1976d2', color: 'white' }}
          >
            Entrar
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default TelaLogin;
