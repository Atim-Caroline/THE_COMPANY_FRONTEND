import React from 'react';
import styled from 'styled-components';
import { ShoppingBag, Link2, ShieldCheck, Bell } from 'lucide-react';

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
  gap: 0.8rem;
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

const Orders = () => {
  const orders = [
    { id: 'ORD-101', status: 'confirmed', total: 159.49, contactFeeTx: 'txn_123', snapshot: 'prices locked at checkout' },
    { id: 'ORD-102', status: 'awaiting_payment', total: 92.00, contactFeeTx: null, snapshot: 'pending contact fee link' },
  ];

  return (
    <Container>
      <h1>Orders</h1>
      {orders.map(order => (
        <Card key={order.id}>
          <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShoppingBag size={18} /> {order.id}
          </strong>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Pill>Status: {order.status}</Pill>
            <Pill>Total: ${order.total.toFixed(2)}</Pill>
            <Pill><ShieldCheck size={14} /> Snapshot pricing</Pill>
            <Pill><Bell size={14} /> Signals notify delivery</Pill>
          </div>
          <p style={{ color: '#cdd3e1' }}>{order.snapshot}</p>
          <p style={{ color: '#cdd3e1' }}>
            Contact fee transaction link is {order.contactFeeTx ? `present (${order.contactFeeTx})` : 'optional and not provided yet (will be validated when added)'}.
          </p>
          <Pill><Link2 size={14} /> Order → Delivery handoff after confirmation</Pill>
        </Card>
      ))}
    </Container>
  );
};

export default Orders;

