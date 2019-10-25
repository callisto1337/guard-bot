import React from 'react';
import { Button } from 'react-bootstrap';

function LoginPage(props: { handlerLogin: () => void }) {
  const { handlerLogin } = props;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <h1>
        Добро пожаловать
      </h1>
      <h2 className="h5">
        Пожалуйста, авторизируйтесь
      </h2>
      <Button
        onClick={handlerLogin}
        variant="danger"
        className="mt-3"
      >
        Войти
      </Button>
    </div>
  );
}

export default LoginPage;
