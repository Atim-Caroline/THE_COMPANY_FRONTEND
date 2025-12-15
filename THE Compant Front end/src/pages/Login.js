import React from 'react';
import styled from 'styled-components';
import { LogIn, Mail, Lock, ShieldCheck } from 'lucide-react';

const Container = styled.div`
  max-width: 420px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  color: #f9fafb;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 1.5rem;
  display: grid;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  color: #f9fafb;
`;

const Button = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.9rem 1.2rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
`;

const Login = () => (
  <Container>
    <h1 style={{ marginBottom: '1rem' }}>Login</h1>
    <Card>
      <Input placeholder="Email" type="email" aria-label="Email" />
      <Input placeholder="Password" type="password" aria-label="Password" />
      <Button><LogIn size={18} /> Sign in (JWT)</Button>
      <p style={{ color: '#cdd3e1', fontSize: '0.9rem' }}>
        JWT login, refresh, and email verification supported. Password reset links are delivered by email. Age verification required for buyers and delivery partners.
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', color: '#cdd3e1', fontSize: '0.9rem' }}>
        <ShieldCheck size={16} /> Role-based routes for admins, sellers, riders.
      </div>
    </Card>
  </Container>
);

export default Login;

