
import React from 'react';
import "./ProductCard.css";
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'MEN',
    description: 'A stylish and comfortable Men clothes.',
    category: 'men',
    image: require('./Assets/id1.jpg'),
  },
  {
    id: 2,
    name: 'WOMEN',
    description: 'A stylish and comfortable Women clothes',
    category: 'women',
    image: require('./Assets/id2.jpg'),
  },
  {
    id: 3,
    name: 'KIDS',
    description: 'A stylish and comfortable Kids clothes',
    category: 'kids',
    image: require('./Assets/id4.jpg'),
  },
];


const ProductCard = ({ product }) => {
    const categoryLink = `/${product.category}`;
    return (
      <div className="product-card">
        <Link to={categoryLink}>
          <img src={product.image} alt={product.name} />
        </Link>
        <h2><Link to={categoryLink}>{product.name}</Link></h2>
        <p>{product.description}</p>
      </div>
    );
};


const MainComponent = () => {
  return (
    <div className="main-container">
      <nav>
        {/* <ul>
          <li><Link to="/men">MEN</Link></li>
          <li><Link to="/women">WOMEN</Link></li>
          <li><Link to="/kids">KIDS</Link></li>
        </ul> */}
      </nav>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <MainComponent />
    </div>
  );
};

export default App;