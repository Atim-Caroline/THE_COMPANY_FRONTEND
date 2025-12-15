import React from 'react';
import styled from 'styled-components';
import { Shield, Activity, FileText, Wrench } from 'lucide-react';

const Container = styled.div`
  max-width: 1100px;
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

const Dashboard = () => (
  <Container>
    <h1>Admin Dashboard</h1>
    <Card>
      <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Shield size={18} /> Role-based admin area
      </strong>
      <p style={{ color: '#cdd3e1' }}>Configure site, review audit logs, and enforce age verification.</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Pill><Activity size={14} /> Structured logs</Pill>
        <Pill><FileText size={14} /> Webhook error handling</Pill>
        <Pill><Wrench size={14} /> Delivery assignment controls</Pill>
      </div>
    </Card>
  </Container>
);

export default Dashboard;

