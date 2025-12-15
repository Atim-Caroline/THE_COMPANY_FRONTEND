import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ShoppingCart, Heart, Star, ShieldCheck, Info, MapPin, Link2 } from 'lucide-react';

const DetailContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #f9fafb;
`;

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ProductImage = styled.div`
  height: 420px;
  background: linear-gradient(145deg, rgba(255,107,107,0.12), rgba(255,255,255,0.04));
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cdd3e1;
  font-size: 1.2rem;
  border: 1px solid rgba(255,255,255,0.08);
`;

const ProductInfo = styled.div`
  display: grid;
  gap: 1rem;
  
  h1 {
    margin-bottom: 0.25rem;
    color: #f9fafb;
  }
  
  .price {
    font-size: 2rem;
    font-weight: bold;
    color: #ffaba7;
  }
  
  .description {
    line-height: 1.6;
    color: #cdd3e1;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffc107;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 0.95rem 1.4rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  transition: all 0.2s ease;
  
  &.primary {
    background: #ff6b6b;
    color: white;
    
    &:hover {
      background: #ff5252;
    }
  }
  
  &.secondary {
    background: transparent;
    color: #ff6b6b;
    border: 2px solid #ff6b6b;
    
    &:hover {
      background: #ff6b6b;
      color: white;
    }
  }
`;

const DetailCard = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
  padding: 1rem;
  margin-top: 1rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.5rem;
  
  li {
    color: #cdd3e1;
  }
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.65rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  color: #cdd3e1;
  font-size: 0.85rem;
  border: 1px solid rgba(255,255,255,0.08);
`;

const BadgeRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ProductDetailPage = () => {
  const { id } = useParams();
  
  // Mock product data with snapshot + contact fee visibility and no telegram_username
  const product = useMemo(() => ({
    id,
    name: 'Premium Single Malt Whiskey',
    price: 89.99,
    rating: 4.8,
    reviews: 124,
    description: '12-year single malt, matured in oak, vanilla and caramel with a light smoke finish. Perfect neat or in elevated cocktails.',
    abv: 40,
    origin: 'Speyside, Scotland',
    volume: '750ml',
    brand: 'Glen Peak',
    category: 'whiskey',
    contactFeeEligible: true,
    contactTokenPreview: 'one-time token generated post-payment',
    details: [
      'Aged 12 years in oak barrels',
      'Alcohol content: 40% ABV',
      'Origin: Scotland',
      'Volume: 750ml',
      'Smooth finish with vanilla notes'
    ]
  }), [id]);
  
  return (
    <DetailContainer>
      <ProductDetail>
        <ProductImage>
          Bottle imagery
        </ProductImage>
        
        <ProductInfo>
          <BadgeRow>
            <Pill><ShieldCheck size={14} /> Role-gated seller</Pill>
            <Pill><Info size={14} /> No telegram_username exposed</Pill>
            <Pill><MapPin size={14} /> {product.origin}</Pill>
          </BadgeRow>

          <h1>{product.name}</h1>
          
          <Rating>
            <Star size={20} fill="#ffc107" color="#ffc107" />
            <span>{product.rating} • {product.reviews} reviews</span>
          </Rating>
          
          <div className="price">${product.price.toFixed(2)}</div>
          
          <p className="description">{product.description}</p>
          
          <BadgeRow>
            <Pill>{product.brand}</Pill>
            <Pill>{product.category}</Pill>
            <Pill>{product.abv}% ABV</Pill>
            <Pill>{product.volume}</Pill>
          </BadgeRow>
          
          <ButtonGroup>
            <Button className="primary">
              <ShoppingCart size={20} />
              Add to Cart
            </Button>
            
            <Button className="secondary">
              <Heart size={20} />
              Save for later
            </Button>
          </ButtonGroup>

          <DetailCard>
            <strong style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#f9fafb' }}>
              <Link2 size={16} /> Contact fee & token flow
            </strong>
            <p style={{ color: '#cdd3e1', marginTop: '0.35rem' }}>
              Contact fee is optional but validated at checkout. On successful Stripe webhook, a one-time contact_token is issued with expiry and shown here for the buyer. Refunds revoke the token.
            </p>
            <Pill>Preview: {product.contactTokenPreview}</Pill>
          </DetailCard>
        </ProductInfo>
      </ProductDetail>
      
      <div>
        <h3 style={{ color: '#f9fafb', marginBottom: '0.75rem' }}>Product Details</h3>
        <List>
          {product.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </List>
      </div>
    </DetailContainer>
  );
};

export default ProductDetailPage;
