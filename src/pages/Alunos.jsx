/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import logo from '../img/LogoYogaBlack.png';

const Div = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   color: var(--g5);
   background-image: url(${logo});
   background-repeat: no-repeat;
  background-size: 800px;
  background-position: 500px;
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
    button {
      padding: 12px 24px;
      color: var(--d7);
      border: 1px solid var(--g1);
      border-radius: 4px;
      cursor: pointer;
      text-transform: uppercase;
    }
`;

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log('Estou aqui');
// };

export default function AdminLogin() {
  return (
    <Div>
      <Form
        action="/admin_configuration" // para onde é enviada a informação no servidor
        method="post"
        // target="_blank"
        target="/admin_configuration"
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
        <button
          type="submit"
        >
          Envie
        </button>
      </Form>
    </Div>
  );
}
