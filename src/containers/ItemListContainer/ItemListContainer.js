import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
// import Item from '../../components/navegacion/Item'
import ItemList from '../../components/ItemList/ItemList'

import Producto from '../../components/helpers/Producto'
import Loading from '../../components/Loading/Loading'
// import { Input } from '../../components/paginas/Input'

// function ItemListContainer () {
//   const [bool, setBool] = useState(true)
//   const [items, setItems] = useState([])
//   const {category} = useParams()

//   useEffect (() => 

//     if(category === undefined) {

//       tarea
//       .then ((resp) => setItems)


//     }
  
//   )
// }


const ItemListContainer = () => {




  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoriaId} = useParams()
  const [bool, setBool] = useState(true)

  useEffect ( () =>{
    if (categoriaId) {
      Producto()
      .then(resp => setProducts(resp.fitler(product =>product.categoria === categoriaId)))
      .catch (err => console.log(err))
      .finally(() => setLoading(true))
    }else {
      Producto()
      .then(resp => setProducts(resp))
      .catch (err => console.log(err))
      .finally(() => setLoading(false))
    }
    
  }, [categoriaId])

  const handleClick=(e)=>{
    e.preventDefault()
    setBool(!bool)
  }
    

    const handleAgregar=()=>{
      setProducts([
        ...products,
        {id: products.length + 1, name:"articuro", url: 'https://productosquimicoslimpieza.com/wp-content/uploads/2021/03/detergente-ropa-de-color-ariel-mascolor-mas-color-galon.jpg'}
      ])
    }

  
  
  return(

    <>
      
      
      { loading ? 

        <Loading/>
      :

      
              <ItemList products={products}/> }
              <button onClick={handleClick}>Change State</button>
              <button onClick={handleAgregar}>Add Item</button>

    </>   
  )
  
  }
  
  


  export default ItemListContainer
  