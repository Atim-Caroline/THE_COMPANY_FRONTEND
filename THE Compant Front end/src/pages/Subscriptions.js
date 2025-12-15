import React from 'react';
import styled from 'styled-components';
import { Repeat, ShieldCheck, CreditCard } from 'lucide-react';

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

const Button = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
`;

const Subscriptions = () => (
  <Container>
    <h1>Delivery Subscriptions</h1>
    <Card>
      <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Repeat size={18} /> Stripe subscription
      </strong>
      <p style={{ color: '#cdd3e1' }}>Delivery partners need an active subscription to accept assignments. Stripe webhook activates/deactivates access.</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Pill><ShieldCheck size={14} /> Webhook-driven status</Pill>
        <Pill><CreditCard size={14} /> Auto-renew & cancellations</Pill>
      </div>
      <Button>Start subscription</Button>
    </Card>
  </Container>
);

export default Subscriptions;

