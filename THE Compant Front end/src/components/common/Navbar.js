import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, MapPin } from 'lucide-react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: rgba(20, 16, 26, 0.9);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(255,255,255,0.05);
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff6b6b;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.08);
  border-radius: 25px;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  border: 1px solid rgba(255,255,255,0.08);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 0.25rem;
  width: 200px;
  background: transparent;
  color: white;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 0.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff6b6b;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Liquor Market</Logo>
      
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/delivery">Delivery</NavLink>
        
        <SearchBar>
          <Search size={20} color="#cdd3e1" />
          <SearchInput type="text" placeholder="Search products..." />
        </SearchBar>
        
        <IconButton as={Link} to="/profile" aria-label="Profile">
          <User size={22} />
        </IconButton>
        
        <IconButton as={Link} to="/cart" aria-label="Cart">
          <ShoppingCart size={22} />
        </IconButton>

        <IconButton as={Link} to="/delivery" aria-label="Delivery map">
          <MapPin size={22} />
        </IconButton>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
