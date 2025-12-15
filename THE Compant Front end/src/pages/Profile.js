import React from 'react';
import styled from 'styled-components';
import { User, KeyRound, ShieldCheck, RefreshCw } from 'lucide-react';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  color: #f9fafb;
  display: grid;
  gap: 1rem;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 1.2rem;
  display: grid;
  gap: 0.6rem;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  color: #cdd3e1;
  font-size: 0.85rem;
`;

const Profile = () => (
  <Container>
    <h1>Profile</h1>
    <Card>
      <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <User size={18} /> carol@example.com
      </strong>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Pill><ShieldCheck size={14} /> Role: buyer</Pill>
        <Pill><KeyRound size={14} /> JWT refresh active</Pill>
        <Pill><RefreshCw size={14} /> Token refresh endpoint ready</Pill>
      </div>
      <p style={{ color: '#cdd3e1' }}>
        Age verified and email confirmed. Use password reset if needed. Roles and permissions are enforced across catalog, orders, payments, and delivery UIs.
      </p>
    </Card>
  </Container>
);

export default Profile;

