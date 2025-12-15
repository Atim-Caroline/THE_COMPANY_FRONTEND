import React from 'react';
import styled from 'styled-components';
import { CreditCard, RefreshCw, ShieldCheck, Lock, Ticket } from 'lucide-react';

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
  gap: 0.7rem;
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
  padding: 0.8rem 1.1rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
`;

const Payments = () => (
  <Container>
    <h1>Payments & Contact Tokens</h1>
    <Card>
      <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <CreditCard size={18} /> Contact fee PaymentIntent
      </strong>
      <p style={{ color: '#cdd3e1' }}>Create Stripe PaymentIntent for optional contact fee. Webhook confirms and updates the order.</p>
      <Button><Lock size={16} /> Create intent</Button>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Pill><RefreshCw size={14} /> Webhook retries & structured logs</Pill>
        <Pill><ShieldCheck size={14} /> Refund handling & status updates</Pill>
      </div>
    </Card>

    <Card>
      <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Ticket size={18} /> One-time contact_token
      </strong>
      <p style={{ color: '#cdd3e1' }}>
        Generated on successful webhook; expires automatically. Reveal endpoint consumes the token and locks future use.
      </p>
      <Pill>Example token: tok_contact_demo</Pill>
    </Card>
  </Container>
);

export default Payments;

