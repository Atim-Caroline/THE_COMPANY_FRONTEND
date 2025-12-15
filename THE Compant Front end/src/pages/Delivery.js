import React from 'react';
import styled from 'styled-components';
import { MapPin, Navigation, PackageCheck, CheckCircle2 } from 'lucide-react';

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

const Delivery = () => {
  const assignments = [
    { id: 'DLV-201', status: 'assigned', address: '123 Market St', orderId: 'ORD-101' },
    { id: 'DLV-202', status: 'picked_up', address: '55 River Rd', orderId: 'ORD-102' },
  ];

  return (
    <Container>
      <h1>Delivery Board</h1>
      <Card>
        <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Navigation size={18} /> Assignment lifecycle
        </strong>
        <p style={{ color: '#cdd3e1' }}>assigned → picked_up → delivered, with audit logs and admin site config mirrored in UI.</p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Pill><CheckCircle2 size={14} /> Subscription required for partners</Pill>
          <Pill><PackageCheck size={14} /> Proof of delivery captured</Pill>
        </div>
      </Card>

      {assignments.map(item => (
        <Card key={item.id}>
          <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={18} /> {item.id} — {item.address}
          </strong>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Pill>Status: {item.status}</Pill>
            <Pill>Order: {item.orderId}</Pill>
          </div>
          <p style={{ color: '#cdd3e1' }}>Admin can update statuses and view audit logs. Partners with active delivery subscriptions can accept assignments.</p>
        </Card>
      ))}
    </Container>
  );
};

export default Delivery;

