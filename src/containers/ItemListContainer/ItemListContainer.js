import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
import Productos from '../../components/helpers/Producto'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
  const {categoriaId} = useParams()
  const [bool, setBool] = useState(true)

  // useEffect(() => {
  //   const db = getFirestore()
  //   const queryProduct = doc(db, 'items', 'ySOHvLoXhFeaUVYSVEJN ')
  //   getDoc(queryProduct)
  //   .then(resp => setProduct({id:resp.id, ...resp.data()}))
  // }, [])

  useEffect ( () =>{
    if (categoriaId) {
      Productos()
      .then(resp => setProducts(resp.fitler(product =>product.categoria === categoriaId)))
      .catch (err => console.log(err))
      .finally(() => setLoading(false))
    }else {
      Productos()
      .then(resp => setProducts(resp))
      .catch (err => console.log(err))
      .finally(() => setLoading(false))
    }
    
  }, [Productos])

  const handleClick=(e)=>{
        e.preventDefault()
        setBool(!bool)
      }

  return(
    <div >
      
      
        { loading ? 

          <Loading/>
      :

      
              <ItemList  products={products}/> }
              

    </div>   
  )
}

export default ItemListContainer
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
  
  


  