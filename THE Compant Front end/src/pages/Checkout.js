import React from 'react';
import styled from 'styled-components';
import { CreditCard, Lock, CheckCircle2 } from 'lucide-react';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  color: #f9fafb;
  display: grid;
  gap: 1.25rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 1.25rem;
  display: grid;
  gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 0.9rem;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
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

const Checkout = () => {
  return (
    <Container>
      <h1>Checkout</h1>
      <Grid>
        <Card>
          <h3>Contact details (optional)</h3>
          <Input placeholder="Contact email (for reveal token)" />
          <Input placeholder="Phone number (kept private)" />
          <p style={{ color: '#cdd3e1', fontSize: '0.9rem' }}>
            A contact fee link is optional but validated when present. Once Stripe confirms payment via webhook,
            a one-time contact_token is generated with expiry for reveal.
          </p>
        </Card>
        <Card>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><CreditCard size={18} /> Stripe PaymentIntent</h3>
          <p style={{ color: '#cdd3e1' }}>Mocked UI: create PaymentIntent for contact fee.</p>
          <Button><Lock size={16} /> Pay securely</Button>
          <div style={{ display: 'flex', gap: '0.5rem', color: '#cdd3e1', fontSize: '0.9rem' }}>
            <CheckCircle2 size={16} color="#7dd3fc" /> Webhook updates order status and tokens.
          </div>
        </Card>
      </Grid>
    </Container>
  );
};

export default Checkout;

