import React, { useState } from 'react';
import './App.css';

import {getCategories, getProducts} from './fetcher';

import Category from './components/Category';
import CategoryProduct from './components/CategoryProduct';

function App() {
  const [categories, setCategories] = useState({errorMessage: '', data: []});
  const [products, setProducts] = useState({errorMessage: '', data: []});

  React.useEffect(() => {
    const fetchData = async ()=>{
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();    
  }, [])

  const handleCategoryClick = id=>{
    const fetchData = async ()=>{
      const responseObject = await getProducts(id);
      setProducts(responseObject);
    }
    fetchData();
    
  }

  const renderCategories =()=>{
    return categories.data.map(c =>
      <Category key={c.id} id={c.id} title={c.title} onCategoryClick={() => handleCategoryClick(c.id)} />
      );
  }
  const renderProducts = ()=>{
    return products.data.map(p =>
      <CategoryProduct key={p.id}{...p}>
        {p.title}
        </CategoryProduct>
      );
  }
  

  return (
    <>
    <header>My Store</header>
    <section>
      <nav>
        {categories.errorMessage && (<div>Error: {categories.errorMessage}</div>)}

        <ul>{ categories.data && renderCategories()}</ul>
        
      </nav>
      <main>
      {products.errorMessage &&  <div>Error: {products.errorMessage}</div>}
       
       {products.data && renderProducts()}
      </main>
    </section>

    <footer>Footer</footer>

    </>
  );
}

export default App;
