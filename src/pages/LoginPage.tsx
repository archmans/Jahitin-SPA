import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Proses autentikasi atau tindakan setelah login
    console.log('Login dengan:', username, password);
  };

  return (
    <Container className="ms-auto d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Container className="d-flex flex-column justify-content-center bg-white rounded-4" style={{ height: '550px', width: '450px'}}>
            <Container className="d-flex flex-column align-items-center">
                <img
                    src="../../public/logo.png"
                    height="120"
                    className="d-inline-block mb-4"
                    alt="logo jahitin"
                />
                <h1 className="mb-4 font-weight-bolder">Login</h1>
                <Form className="d-flex flex-column align-items-center" onSubmit={handleLogin} style={{ width: '100%' }}>
                    <Form.Group className="mb-3 px-5" controlId="formBasicUsername" style={{ width: '100%' }}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    />
                    </Form.Group>

                    <Form.Group className="mb-3 px-5" controlId="formBasicPassword" style={{ width: '100%' }}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    </Form.Group>

                    <Button
                      className="mt-4 py-2 px-5 rounded-5"
                      variant="primary"
                      type="submit"
                      style={{
                        background: '#279864',
                        color: '#fff',
                        border: 'none',
                        outline: 'none',
                      }}
                      // Efek hover
                      onMouseOver={(e) => {
                        e.currentTarget.style.scale = '1.1';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.scale = '1';
                      }}
                    >
                      Login
                    </Button>

                    <p className="mt-3">
                      Don't Have an Account?{' '}
                      <Link to="/register" style={{ color: '#279864', textDecoration: 'none' }}>
                        Register Here
                      </Link>
                    </p>
                </Form>
            </Container>
        </Container>
    </Container>
  );
};

export default LoginPage;
