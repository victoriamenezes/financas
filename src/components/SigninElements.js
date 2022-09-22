import React from 'react'
import { Controller, useForm } from "react-hook-form";
import { Avatar, Grid, Paper, Checkbox, Button, Typography, Link } from '@mui/material'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const SigninElements = () => {

  const paperStyle={
    padding: 20,
    height: '70vh',
    width: '60vh',
    margin: '2rem auto',
    backgroundColor: 'rgb(13, 59, 102, 0.1)'
  }

  const avatarStyle={
    backgroundColor:'#377D33',
    marginBottom: '1.4rem'
  }

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
    // setChecked(event.target.checked);
  // };






  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOpenIcon /></Avatar>
            <h2>Acessar</h2>
        </Grid>
        <Grid align='center'>
          <TextField
            color='success'
            sx={{ marginTop: 5 }}
            required
            id="outlined-required"
            fullWidth
            size="small"
            label="Usuário"
            placeholder='email ou telefone'
          />
          <FormControl size="small" fullWidth variant="outlined" sx={{marginTop: 3}} color='success'>
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {/* <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          /> */}
          <Button type='submit' color='success' variant='contained' sx={{marginTop: 3}}>Entrar</Button>
        </Grid>
        <Grid>
          <Typography sx={{marginTop: 5}}>
            <Link href='#'> Esqueceu a sua senha?</Link>
          </Typography>
          <Typography sx={{marginTop: 2}}> Ainda não possui uma conta?
            <Link href='#'> Cadastre-se</Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default SigninElements
