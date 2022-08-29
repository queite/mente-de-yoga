/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

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
    gap: 4px;
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
