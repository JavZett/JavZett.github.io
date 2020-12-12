import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const MainContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 80px);
  width: 100%;
`;

export const Login = () => {
  return (
    <>
      <Helmet>
        <title>Iniciar sesión - Cetis 30</title>
      </Helmet>
      <MainContainer></MainContainer>
    </>
  );
};
