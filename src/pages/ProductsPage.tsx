import React, {useState} from 'react'
import {Product} from '../components/Product'
import {useProducts} from '../hooks/products'
import {Loader} from '../components/Loader'
import {ErrorMessage} from '../components/ErrorMessage'
import { Modal } from '../components/Modal'
import { CreateProduct } from '../components/CreateProduct'
import { Header } from '../components/Header'
import { iProduct } from "../models"


export function ProductPage(){
    const {error, loading, products, addProduct} = useProducts()
    const[modal, setModal] = useState(false)
  
  
    const createHandler = (product: iProduct) => {
      setModal(false)
      addProduct(product)
    }
  
  
    return( 
    <div className = "container mx-auto max-w-2xl pt-5">
      <Header title="SimpleShop" />
  
      {loading && <Loader />}
      {error && <ErrorMessage error = {error} />}
  
      {products.map(product => <Product product = {product}  key = {product.id} />)}
  
      {modal && <Modal title="Create new product" onClose = {() => setModal(false)}> 
          <CreateProduct onCreate={createHandler} />
      </Modal>}
  
      <button className='fixed bottom-5 right-5 rounded-full text-2xl bg-blue-400 px-4 py-2'
      onClick = {() => setModal(true)}
      > + </button>
  
  </div>
  
  )
}