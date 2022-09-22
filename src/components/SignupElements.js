// import React from 'react'

import React from 'react'
import { useRef, useState, useEffect } from "react";
import { Grid, Paper, Typography, Avatar, TextField, Button, FormHelperText } from '@mui/material';
// import { style } from 'styled';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
// import { Container } from '@mui/material';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/cadastro';


const SignupElements = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    //when the component loads:
    useEffect(() => {
      userRef.current.focus();
    }, [])

    useEffect(() => {
      setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [user, password, matchPassword])

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




  return (
    <Grid align='center'>
      <Paper elevation={20} style={paperStyle}>
        <Grid>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <Avatar style={avatarStyle}>
            {/* escolher imagem */}
          </Avatar>
          <h2>Cadastre-se</h2>
          <Typography variant='caption'>Por favor, preencha o formulário com as suas informações.</Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label='Nome de usuário'
            // error
            // helperText='TESTETESTE'
            color='success'
            sx={{ marginTop: 5 }}
            required
            // id="outlined-required"
            size="small"

            placeholder='Nome de usuário'
            ref={userRef}
            autoComplete="off"

            onChange={(e) => setUser(e.target.value)}
            value={user}
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
            id="uidnote"
            // className={userFocus && user && !validName ? "instructions" : "offscreen"}
            helperText={userFocus && user && !validName ? "O nome de usuário deve possuir entre 4 e 24 caracteres e começar com uma letra." : ""}
          />

          {/* <TextField
            fullWidth
            label='Email'
            color='success'
            sx={{ marginTop: 3 }}
            required
            id="outlined-required"
            size="small"/>

          <TextField fullWidth
            label='Telefone'
            color='success'
            sx={{ marginTop: 3 }}
            required
            id="outlined-required"
            size="small"/> */}

          <FormControl size="small" fullWidth variant="outlined" sx={{marginTop: 3}} color='success'>
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="password"
              label="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
              helperText={passwordFocus && !validPassword ? "De 4 a 24 caracteres. Deve incluir letras maiúsculas e minúsculas, um número e um caractere especial." : ""}



            />
          </FormControl>

          <FormControl size="small" fullWidth variant="outlined" sx={{marginTop: 3}} color='success'>
            <InputLabel htmlFor="outlined-adornment-password-confirm">Confirmar senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-confirm"
              label="Password"
              type="password"
              required
              onChange={(e) => setMatchPassword(e.target.value)}
              value={matchPassword}
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
              helperText={matchFocus && !validMatch ? "A senha deve ser idêntica à primeira." : ""}
            />
          </FormControl>
          <Button
            disabled={!validName || !validPassword || !validMatch ? true : false}
            type='submit'
            variant='contained'
            color='success'
            sx={{marginTop: 7}}
            align='center'

          >Cadastrar</Button>
        </form>
      </Paper>
  </Grid>
  )

}

export default SignupElements
