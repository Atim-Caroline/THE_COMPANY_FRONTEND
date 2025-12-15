import React from 'react';
import styled from 'styled-components';
import { UserPlus, MailCheck, Lock, Shield } from 'lucide-react';

const Container = styled.div`
  max-width: 520px;
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

const Select = styled.select`
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

const Register = () => (
  <Container>
    <h1 style={{ marginBottom: '1rem' }}>Create account</h1>
    <Card>
      <Input placeholder="Email" type="email" aria-label="Email" />
      <Input placeholder="Password" type="password" aria-label="Password" />
      <Input placeholder="Confirm Password" type="password" aria-label="Confirm Password" />
      <Select aria-label="Role selection">
        <option value="buyer">Buyer (21+)</option>
        <option value="seller">Seller</option>
        <option value="delivery">Delivery partner</option>
        <option value="admin">Admin</option>
      </Select>
      <Button><UserPlus size={18} /> Register (JWT)</Button>
      <p style={{ color: '#cdd3e1', fontSize: '0.9rem' }}>
        Email verification is required. Password reset flow available. Roles drive permissions across catalog, orders, payments, and delivery.
      </p>
      <div style={{ display: 'flex', gap: '0.6rem', color: '#cdd3e1', fontSize: '0.9rem' }}>
        <MailCheck size={16} /> Email verification
        <Shield size={16} /> Age & role checks
        <Lock size={16} /> Secure auth tokens
      </div>
    </Card>
  </Container>
);

export default Register;

