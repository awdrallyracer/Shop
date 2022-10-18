import axios, { Axios, AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { iProduct } from "../models";;


export function useProducts(){

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [products, setProducts] = useState<iProduct[]>([])
  

    async function fetchProducts(){
  
      try {
  
        setError('')
        setLoading(true)
        const response = axios.get<iProduct[]>('https://fakestoreapi.com/products?limit=5')
        setProducts((await response).data)
        setLoading(false)
  
      } catch (e: unknown){
  
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
  
      }
  
    }
  
    useEffect(() => { fetchProducts() }, [])

    return { products, error, loading}
}