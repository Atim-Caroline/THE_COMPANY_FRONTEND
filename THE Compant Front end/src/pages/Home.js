import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowRight, Star, Shield, Truck, Sparkles, CreditCard, ShieldCheck, MapPin } from 'lucide-react';

const HomeContainer = styled.div`
  min-height: 100vh;
  color: #f9fafb;
`;

const HeroSection = styled.section`
  padding: 5rem 2rem 3rem;
  text-align: center;
  background: radial-gradient(circle at 20% 20%, rgba(255,107,107,0.15), transparent 25%),
              radial-gradient(circle at 80% 0%, rgba(245,165,36,0.15), transparent 30%),
              linear-gradient(135deg, #1f1027 0%, #0f0a14 60%, #0f0a14 100%);
`;

const HeroContent = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
  justify-items: center;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,107,107,0.1);
  color: #ffaba7;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  font-weight: 600;
  border: 1px solid rgba(255,107,107,0.25);
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 4vw, 3.6rem);
  font-weight: 800;
  line-height: 1.1;
`;

const Highlight = styled.span`
  color: #ff6b6b;
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  max-width: 780px;
  opacity: 0.88;
`;

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: ${({ variant }) => (variant === 'ghost' ? 'transparent' : '#ff6b6b')};
  color: white;
  padding: 0.95rem 1.5rem;
  text-decoration: none;
  border-radius: 14px;
  font-weight: 700;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  border: ${({ variant }) => (variant === 'ghost' ? '1px solid rgba(255,255,255,0.2)' : 'none')};
  color: ${({ variant }) => (variant === 'ghost' ? '#f9fafb' : 'white')};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ variant }) => (variant === 'ghost' ? '0 10px 30px rgba(0,0,0,0.25)' : '0 10px 30px rgba(255,107,107,0.3)')};
    background: ${({ variant }) => (variant === 'ghost' ? 'rgba(255,255,255,0.08)' : '#ff5252')};
  }
`;

const Grid = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  color: #f9fafb;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
`;

const FeatureCard = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 1.5rem;
  display: grid;
  gap: 0.6rem;
  min-height: 160px;
  transition: transform 0.2s ease, border-color 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255,107,107,0.4);
  }
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.85rem;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.06);
  color: #cdd3e1;
`;

const CardRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
`;

const StatCard = styled.div`
  background: linear-gradient(145deg, rgba(255,107,107,0.08), rgba(255,255,255,0.03));
  border: 1px solid rgba(255,107,107,0.35);
  border-radius: 16px;
  padding: 1.5rem;
  display: grid;
  gap: 0.5rem;
`;

const Home = () => {
  const highlights = [
    { icon: <Star size={22} color="#f5a524" />, title: 'Curated craft & premium bottles', copy: 'Sommelier-picked, role-gated seller tools, and verified catalogs.' },
    { icon: <ShieldCheck size={22} color="#7dd3fc" />, title: 'JWT-first security', copy: 'Login, refresh, and role-based controls surfaced across the app.' },
    { icon: <CreditCard size={22} color="#ffaba7" />, title: 'Stripe-ready flows', copy: 'Contact fee intents, webhooks, and one-time reveal tokens visualized.' },
    { icon: <Truck size={22} color="#a5f3fc" />, title: 'Delivery telemetry', copy: 'Assignments, live status, and subscription gating for partners.' }
  ];

  const roleFlows = [
    { title: 'Accounts & Auth', text: 'JWT login/refresh, email verification, password reset, and role-aware UI with age gate.', cta: 'Explore auth', to: '/login' },
    { title: 'Catalog', text: 'Price, ABV, brand, and category filters with secure product serializers.', cta: 'Browse catalog', to: '/products' },
    { title: 'Orders', text: 'Cart → checkout → order snapshot with optional contact fee linkage.', cta: 'View orders', to: '/orders' },
    { title: 'Payments', text: 'Stripe PaymentIntents, webhooks, refunds, and one-time contact tokens.', cta: 'Payment center', to: '/payments' },
    { title: 'Delivery', text: 'Assignments status (assigned → picked_up → delivered) and proof of handoff.', cta: 'Delivery board', to: '/delivery' },
    { title: 'Subscriptions', text: 'Delivery subscriptions via Stripe, webhook-backed activation, and gating.', cta: 'Manage subs', to: '/subscriptions' },
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <Badge><Sparkles size={16} /> Liquor Market OS</Badge>
          <HeroTitle>
            Elevate your <Highlight>spirits</Highlight> delivery with secure, role-aware experiences.
          </HeroTitle>
          <HeroSubtitle>
            A modern React front end for alcohol and wine delivery—featuring JWT auth, curated catalogs, Stripe-powered payments,
            protected contact flows, and delivery partner tooling that respects regional rules.
          </HeroSubtitle>
          <CTAGroup>
            <CTAButton to="/products">
              Shop the Cellar <ArrowRight size={18} />
            </CTAButton>
            <CTAButton to="/payments" variant="ghost">
              View Payments & Tokens
            </CTAButton>
          </CTAGroup>
        </HeroContent>
      </HeroSection>

      <Grid>
        <SectionHeader>
          <SectionTitle>Why customers and partners trust us</SectionTitle>
          <Pill><Shield size={16} /> Age 21+ Verified</Pill>
        </SectionHeader>
        <FeaturesGrid>
          {highlights.map((item, idx) => (
            <FeatureCard key={idx}>
              <Pill>{item.icon} {item.title}</Pill>
              <p style={{ color: '#cdd3e1', lineHeight: 1.5 }}>{item.copy}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Grid>

      <Grid>
        <SectionHeader>
          <SectionTitle>Role-aligned journeys</SectionTitle>
          <Pill><MapPin size={16} /> Accounts → Catalog → Orders → Payments → Delivery</Pill>
        </SectionHeader>
        <CardRow>
          {roleFlows.map((flow, idx) => (
            <FeatureCard key={idx}>
              <h3 style={{ color: '#f9fafb' }}>{flow.title}</h3>
              <p style={{ color: '#cdd3e1', lineHeight: 1.5 }}>{flow.text}</p>
              <CTAButton to={flow.to} variant="ghost">
                {flow.cta} <ArrowRight size={16} />
              </CTAButton>
            </FeatureCard>
          ))}
        </CardRow>
      </Grid>

      <Grid style={{ paddingBottom: '5rem' }}>
        <SectionHeader>
          <SectionTitle>Operational clarity</SectionTitle>
        </SectionHeader>
        <CardRow>
          <StatCard>
            <Pill>Catalog</Pill>
            <h3 style={{ color: '#f9fafb' }}>Smart filters</h3>
            <p style={{ color: '#cdd3e1' }}>Search by name, brand, category, price, ABV; telegram handles never exposed.</p>
          </StatCard>
          <StatCard>
            <Pill>Payments</Pill>
            <h3 style={{ color: '#f9fafb' }}>Contact fee & tokens</h3>
            <p style={{ color: '#cdd3e1' }}>Stripe intent UI with optional contact fee link, one-time reveal tokens, refund states.</p>
          </StatCard>
          <StatCard>
            <Pill>Delivery</Pill>
            <h3 style={{ color: '#f9fafb' }}>Assignment lifecycle</h3>
            <p style={{ color: '#cdd3e1' }}>Assignments move assigned → picked_up → delivered with proof and map context.</p>
          </StatCard>
        </CardRow>
      </Grid>
    </HomeContainer>
  );
};

export default Home;
