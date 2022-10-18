import {Product} from './components/Product'
import {useProducts} from './hooks/products'
import {Loader} from './components/Loader'
import {ErrorMessage} from './components/ErrorMessage'
import { Modal } from './components/Modal'
import { CreateProduct } from './components/CreateProduct'
import { Header } from './components/Header'



function App() {
  

  const {error, loading, products} = useProducts()
  
  
  return( 
  <div className = "container mx-auto max-w-2xl pt-5">
    <Header title="SimpleShop" />

    {loading && <Loader />}
    {error && <ErrorMessage error = {error} />}

    {products.map(product => <Product product = {product}  key = {product.id} />)}

    <Modal title="Create new product"> 
        <CreateProduct />
    </Modal>

</div>

)
}

export default App;
