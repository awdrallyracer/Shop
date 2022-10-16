import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Product} from './components/Product'
//import {products} from './data/products'
import { iProduct } from './models';


function App() {
  

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<iProduct[]>([])


  async function fetchProducts(){
    setLoading(true)
    const response = axios.get<iProduct[]>('https://fakestoreapi.com/products?limit=5')
    setProducts((await response).data)
    setLoading(false)

  }


  useEffect(() => { fetchProducts() }, [])
  
  
  return( 
  <div className = "container mx-auto max-w-2xl pt-5">

    {loading && <p className='text-center'>Loading...</p>}

    {products.map(product => <Product product = {product}  key = {product.id} />)}

</div>

)
}

export default App;