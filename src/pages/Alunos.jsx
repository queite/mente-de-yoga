/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { Button } from '../Styles/buttons';
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

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log('Estou aqui');
// };

export default function AdminLogin() {
  const a = 'alunosPage';
  return (
    <Div>
      <Form
        action="/adminconfigurations" // para onde é enviada a informação no servidor
        // method="post"
        // target="_blank"
        target="/adminconfigurations"
        // onClick={(event) => handleSubmit(event)}
      >
        <label htmlFor="fEmail">
          Email:
          <input
            type="email"
            name="fEmail"
          />
        </label>
        <label htmlFor="fPassword">
          Password:
          <input
            type="password"
            name="fPassword"
          />
        </label>
        <Button
          infos={a}
          type="submit"
        >
          Entrar
        </Button>
      </Form>
    </Div>
  );
}
