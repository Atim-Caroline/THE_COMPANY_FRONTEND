import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    color: #ff6b6b;
  }
  
  ul {
    list-style: none;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
  
  a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #ff6b6b;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/returns">Returns</Link></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/age-verification">Age Verification</Link></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Connect</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </FooterSection>
      </FooterContent>
      
      <div style={{ textAlign: 'center', marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #333' }}>
        <p>&copy; 2024 Liquor Market. All rights reserved. Must be 21+ to purchase.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
