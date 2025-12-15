import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Filter, ShoppingCart, Tag, Droplet, Sparkles } from 'lucide-react';

const ProductsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: #f9fafb;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  color: #f9fafb;
`;

const Filters = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 0.6rem 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: #f9fafb;
  min-width: 200px;
`;

const Select = styled.select`
  padding: 0.6rem 1rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  background: rgba(255,255,255,0.04);
  color: #f9fafb;
`;

const Range = styled.input`
  accent-color: #ff6b6b;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
`;

const ProductCard = styled(Link)`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease, border-color 0.2s ease;
  color: inherit;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-4px);
    border-color: rgba(255,107,107,0.4);
  }
`;

const ProductImage = styled.div`
  height: 190px;
  background: linear-gradient(145deg, rgba(255,107,107,0.1), rgba(255,255,255,0.05));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cdd3e1;
`;

const ProductInfo = styled.div`
  padding: 1rem;
  display: grid;
  gap: 0.5rem;
`;

const ProductName = styled.h3`
  color: #f9fafb;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffaba7;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  color: #cdd3e1;
  font-size: 0.85rem;
`;

const AddToCartButton = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  transition: background 0.2s ease;
  
  &:hover {
    background: #ff5252;
  }
`;

const FilterCard = styled.div`
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  padding: 1rem;
  display: grid;
  gap: 0.75rem;
`;

const FiltersLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [brand, setBrand] = useState('all');
  const [maxPrice, setMaxPrice] = useState(200);
  const [maxAbv, setMaxAbv] = useState(60);

  // Mock product data with ABV/brand/category; telegram_username intentionally omitted
  const products = useMemo(() => ([
    { id: 1, name: 'Highland Single Malt', price: 89.99, abv: 40, brand: 'Glen Peak', category: 'whiskey' },
    { id: 2, name: 'Napa Valley Reserve', price: 64.5, abv: 14, brand: 'Vintner House', category: 'wine' },
    { id: 3, name: 'Dry Craft Gin', price: 42.0, abv: 45, brand: 'Juniper Co.', category: 'gin' },
    { id: 4, name: 'Small Batch Bourbon', price: 54.99, abv: 47, brand: 'Red Oak', category: 'whiskey' },
    { id: 5, name: 'Champagne Brut', price: 129.99, abv: 12, brand: 'Maison 88', category: 'wine' },
    { id: 6, name: 'Citrus IPA Pack', price: 22.5, abv: 6.4, brand: 'Hopsmith', category: 'beer' },
    { id: 7, name: 'Ultra Premium Vodka', price: 39.0, abv: 40, brand: 'Nordic Frost', category: 'vodka' },
  ]), []);
  
  const filteredProducts = useMemo(() => products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    const matchesBrand = brand === 'all' || product.brand === brand;
    const matchesPrice = product.price <= maxPrice;
    const matchesAbv = product.abv <= maxAbv;
    return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesAbv;
  }), [products, searchTerm, category, brand, maxPrice, maxAbv]);
  
  const uniqueBrands = ['all', ...new Set(products.map(p => p.brand))];

  return (
    <ProductsContainer>
      <Header>
        <Title>Catalog</Title>
        <Filters>
          <Input
            type="text"
            placeholder="Search by name…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="all">All Categories</option>
            <option value="whiskey">Whiskey</option>
            <option value="wine">Wine</option>
            <option value="beer">Beer</option>
            <option value="vodka">Vodka</option>
            <option value="gin">Gin</option>
          </Select>
          <Select value={brand} onChange={(e) => setBrand(e.target.value)}>
            {uniqueBrands.map(b => <option key={b} value={b}>{b === 'all' ? 'All Brands' : b}</option>)}
          </Select>
        </Filters>
      </Header>

      <FiltersLayout>
        <FilterCard>
          <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Filter size={16} /> Price up to ${maxPrice}
          </strong>
          <Range
            type="range"
            min="10"
            max="200"
            step="1"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </FilterCard>
        <FilterCard>
          <strong style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Droplet size={16} /> ABV up to {maxAbv}%
          </strong>
          <Range
            type="range"
            min="0"
            max="60"
            step="1"
            value={maxAbv}
            onChange={(e) => setMaxAbv(Number(e.target.value))}
          />
        </FilterCard>
      </FiltersLayout>
      
      <ProductsGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} to={`/products/${product.id}`}>
            <ProductImage>
              <Sparkles size={42} />
            </ProductImage>
            
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              <MetaRow>
                <Pill><Tag size={14} /> {product.brand}</Pill>
                <Pill><Filter size={14} /> {product.category}</Pill>
                <Pill><Droplet size={14} /> {product.abv}% ABV</Pill>
              </MetaRow>
              
              <AddToCartButton>
                <ShoppingCart size={16} />
                Add to Cart
              </AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};

export default Products;
