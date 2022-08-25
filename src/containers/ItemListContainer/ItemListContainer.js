import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import Producto from '../../components/helpers/Producto'
import Loading from '../../components/Loading/Loading'
import { ProductsData } from '../../Data/ProductsData'

const ItemListContainer2 = () => {
  return(
    <div className='productContainer'>
      {ProductsData.map((product, i) => (
      <>
          <div key={i} className='product'>
              <img src={product.image} alt={product.name}/>
          
            <div>
              <p>
                {product.name} - ${product.price}
              </p>
            </div>
            <button className='addBtn' onClick={() => console.log (product)}>Agregar al Carrito</button>
        </div>
      </>  
      ))}
    </div>
  )
}

export default ItemListContainer2
// const ItemListContainer = () => {




//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(false)
//   const {categoriaId} = useParams()
//   const [bool, setBool] = useState(true)

//   useEffect ( () =>{
//     if (categoriaId) {
//       Producto()
//       .then(resp => setProducts(resp.fitler(product =>product.categoria === categoriaId)))
//       .catch (err => console.log(err))
//       .finally(() => setLoading(false))
//     }else {
//       Producto()
//       .then(resp => setProducts(resp))
//       .catch (err => console.log(err))
//       .finally(() => setLoading(false))
//     }
    
//   }, [categoriaId])

//   const handleClick=(e)=>{
//     e.preventDefault()
//     setBool(!bool)
//   }
    

//     const handleAgregar=()=>{
//       setProducts([
//         ...products,
//         {id: products.length + 1, name:"articuro", url: 'https://productosquimicoslimpieza.com/wp-content/uploads/2021/03/detergente-ropa-de-color-ariel-mascolor-mas-color-galon.jpg'}
//       ])
//     }

  
  
//   return(

//     <>
      
      
//       { loading ? 

//         <Loading/>
//       :

      
//               <ItemList products={products}/> }
              

//     </>   
//   )
  
//   }
  
  


  