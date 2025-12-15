import React from 'react';
import styled from 'styled-components';
import { Trash, ShoppingBag, ShieldCheck } from 'lucide-react';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
  color: #f9fafb;
`;

const Card = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 1.25rem;
  display: grid;
  gap: 1rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  align-items: center;
`;

const Item = styled.div`
  display: grid;
  gap: 0.3rem;
`;

const Button = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.85rem 1.2rem;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 700;
  transition: background 0.2s ease;
  
  &:hover {
    background: #ff5252;
  }
`;

const Ghost = styled.button`
  background: transparent;
  color: #ff6b6b;
  border: 1px solid rgba(255,107,107,0.4);
  padding: 0.6rem 0.9rem;
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
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

const Cart = () => {
  const items = [
    { id: 1, name: 'Highland Single Malt', price: 89.99, qty: 1 },
    { id: 2, name: 'Napa Valley Reserve', price: 64.5, qty: 2 },
  ];

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const contactFee = 5.0; // optional; validated if present
  const total = subtotal + contactFee;

  return (
    <Container>
      <h1 style={{ marginBottom: '1rem' }}>Cart</h1>
      <Card>
        {items.map(item => (
          <Row key={item.id}>
            <Item>
              <strong>{item.name}</strong>
              <span style={{ color: '#cdd3e1' }}>Qty: {item.qty} • ${(item.price * item.qty).toFixed(2)}</span>
            </Item>
            <Ghost aria-label="Remove item">
              <Trash size={16} /> Remove
            </Ghost>
          </Row>
        ))}
      </Card>

      <Card>
        <h3>Summary</h3>
        <div style={{ color: '#cdd3e1' }}>Subtotal: ${subtotal.toFixed(2)}</div>
        <div style={{ color: '#cdd3e1' }}>Contact fee (optional, validated): ${contactFee.toFixed(2)}</div>
        <div style={{ color: '#f9fafb', fontWeight: 700 }}>Total: ${total.toFixed(2)}</div>
        <Pill><ShieldCheck size={14} /> JWT protected checkout</Pill>
        <Button>
          <ShoppingBag size={18} /> Checkout
        </Button>
      </Card>
    </Container>
  );
};

export default Cart;

