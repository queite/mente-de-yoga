/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../Styles/buttons';
// import { sendData } from '../helpers/requests';
// import logo from '../img/LogoYogaBlack.png';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: var(--g5);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: end;
    background-color: var(--g10);
    border-radius: 4px;
    padding: 40px;
    gap: 8px;
    input {
        margin-left: 8px;
        padding: 4px;
    }
`;

export default function AdminLogin() {
  const a = 'alunosPage';
  const navigate = useNavigate();
  const [login, setLogin] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { token } = await sendData('/login', { email: login.email, password: login.password });
    // console.log('Token', token);
    navigate('/');
  };

  return (
    <Div>
      <Form>
        <label htmlFor="fEmail">
          Email:
          <input
            type="email"
            name="fEmail"
            value={login.email}
            onChange={(e) => setLogin({ email: e.target.value, password: login.password })}
          />
        </label>
        <label htmlFor="fPassword">
          Password:
          <input
            type="password"
            name="fPassword"
            value={login.password}
            onChange={(e) => setLogin({ email: login.email, password: e.target.value })}
          />
        </label>
        <Button
          infos={a}
          type="submit"
          onClick={(event) => handleSubmit(event)}
        >
          Entrar
        </Button>
      </Form>
    </Div>
  );
}
