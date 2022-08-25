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
  // const [items,setItems] = useState ([])
  // const [loading, setLoading] = useState(true)
  // // const promesa = () => useState ([])
  // const productos = [
  //     {id: 1, name: "trufa", price:150, stock: 5, image: 'https://definicion.de/wp-content/uploads/2012/11/trufa-1.jpg' },
  //     {id: 2, name: "aceite de oliva", price:20, stock: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' },
  //     {id: 3, name: "papa", price:10, stock: 2, image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1'},
  //     {id: 4, name: "asado", price:100, stock: 20, image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' },
  //     {id: 5, name: "harina", price:5, stock: 30, image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' },
  
  //   ]
  
  //   const task = new Promise ((res, rej) => {
  //     setTimeout(()=>
  //     {
    //       res(productos)
    //     }, 2000)
    //   })
    
    //   useEffect(() => {
      
  //     // task
  //     //   .then (res => setItems(res))
  //     //   .catch(error => console.log(error))
  //     //   .finally(() => setLoading(false))
  //       fetch("https:/rickandmortyapi.com/api/character")
  //       .then(res=> res.json())
  //       .then(res => setItems(res.results))
  //       .catch(error => console.log(error))
  //       .finally(() => setLoading(false))
  //   }, [])
  
  
  //   const getTask = async () => {
  //     try {
    //       let res = await task
    //       setItems(res)
    //     } catch (error) {
      //       console.log (error)
  //     }
  //   }
  
  //   useEffect(() => {
    
    //       getTask()
    
    
    //   }, [])
    //   // const onAdd = (count) =>{
      //   //       alert('Pedido de ' + name + ' por: ' + count + ' kg')
  //   // }
    

  //   console.log (items)
  
        // const [productos, setProductos] = useState([])
        // const {categoriaId} = useParams()
        
        // useEffect(() =>{
        // if (categoriaId){
        //   productos()
        //   .then(resp => setProductos(resp.filter (productos => productos.categoria === categoriaId)))
        //   .catch(err => console.log(err))
        
        // }else {
        //   productos()
        //   .then(resp=> setProductos(resp))
        //   .catch(err => console.log(err))
        // }}, [categoriaId])
        
        // console.table(categoriaId)

//         const [ result, setResult] = useState({ result : [] });

// useEffect(() =>{
  //   fetch('https://pokeapi.co/api/v2/{endpoint}/')
//   .then(res => res.json())
//   .then(json => setResult(json));
// }, []);

// const onAdd =(count) =>{
      //   alert(`Seleccionaste: `+ count)
      // }

      
        
      
      // <ItemList productos={productos}/>
      // loading ? 
      //     <h1>Aguarde un momento..</h1>:
      // <ItemList productos ={productos}/>
      // <div style= {{ textAlign:'center', marginTop: 50}}>
      //   {greeting} 
      //   {/* <ItemCount initial={1} stock={10} onAdd={onAdd} /> */}
      //   <ItemList items ={items} />
      // </div>

      
      
      // const onAdd = (count) =>{
        //   alert('Pedido de zzzz por: ' + count + ' kg')
    // }
  //   const [productos, setProductos] = useState ([])
  //   const [loading, setLoading] = useState (true)
  //   const { categoriaId} = useParams()

  // useEffect(() => {
  //   if (categoriaId) {
  //     getFetch  ()
  //     .then(resp => setProductos(resp.filter(productos => productos.categoria === categoriaId)))
  //     .catch( err => console.log(err))
  //     .finaly (()=> setLoading(false))
  //   } else {
  //     getFetch()
  //     .then(resp => setProdutos(resp))
  //     .catch( err => console.log(err))
  //     .finaly (()=> setLoading(false))
  //   }
  
  // }, [categoriaId])
  
  
  //   const[items, setItems ] = useState ([])
  
  
  
  //   const task = new Promise ((res, rej) => {
  //       setTimeout(()=>
  //       {
    //           res(productos)
    //       }, 2000)
    //   })
    
    //   useEffect(() => {
      
  //       task
  //           .then (res => setItems(res))
  //           .catch(error => console.log(error))
  
  //   }, [])
  
  
  
  
  //   console.log (items)
  

  //   const [personajes, setPersonaje] = useState([])
  
  //   const getFetch = async()=> {
  
  //     try {
  //       const resp = await fetch("./assets/Json/DATA")
  //       const dataParse = await resp.json()
  //       setPersonaje(dataParse)
  //       } catch (error) {
  //         console.log(error)
        
  //     }
  
      
  //   }
  
  
  
  //   const [items, setItems] = useState([])
  //   const { categoriaId } = useParams()
  //   // const [loading, setLoading] = useState(true, 2000)
  
  //       useEffect(() =>{
  //         if (categoriaId) {
            
  //           fetch('https:/rickandmortyapi.com/api/character')
  //           .then(resp => setItems(resp.filter(item => item.categoria === categoriaId))
  //           .catch(error => console.log(error)))
  //           // .finally(() => setLoading(false))
  //         }else{
  //             fetch('https:/rickandmortyapi.com/api/character')
  //             .then(resp => setItems(resp))
  //           }
          
  //       }, [categoriaId])
      
         
  
  // console.table(categoriaId)
  // console.table(personajes)
