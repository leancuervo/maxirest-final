import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import {Producto} from '../helpers/Producto'
import React, { useEffect, useState } from 'react'







const Item = ({item}) => {

  const { name, price, stock, image } = item
  
  const onAdd = (count) =>{
    alert('Pedido de ' + name + ' por: ' + count + ' kg')
    }
    

    // console.log (items)
    return (
        <Card style={{ width: '18rem', margin: 20 }}>
        <Card.Img variant="top" src= {image} style={{ maxHeight:'10rem'}} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            $:{price}
            <br />
            Disponible: {stock}
        </Card.Text>
        <Link to={`/detalle/${item.id}`}>
        <Button variant="primary">Mas Info</Button>
        </Link>
        </Card.Body>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </Card>
        )
}

//       <div key = {prod.id} className='col-md-4 p-1'> 

//   <div className='card w-100 mt-5'> 

//     <div className= "card-header">
//         {`${prod.name} - ${prod.stock}`}  
//         </div>
//         <div className='card-body'>
//         <center>
//           <img src={prod.imag} alt={prod.name} className='w-50'></img>  
//         </center>  
//         <label> Precio: {prod.price}</label>
//         </div>
//         <div className='card-footer'>
//           <Link  to={`detalle/${prod.id}`}>
//             <button className= "btn btn-outline-primary btn-block">
//               Detalle del producto
//             </button>
//           </Link>
//         </div>
//         <ItemCount/>
//       </div>

// // </div>

export default Item


// {/* <div key = {prod.id} className='col-md-4 p-1'> 

// <div className='card w-100 mt-5'> 

//   <div className= "card-header">
//   {`${prod.name} - ${prod.stock}`}  
//   </div>
//   <div className='card-body'>
//   <center>
//     <img src={prod.imag} alt={prod.name} className='w-50'></img>  
//   </center>  
//   <label> Precio: {prod.price}</label>
//   </div>
//   <div className='card-footer'>
//     <Link  to={`detalle/${prod.id}`}>
//       <button className= "btn btn-outline-primary btn-block">
//         Detalle del producto
//       </button>
//     </Link>
//   </div>
// </div>

// </div>  */}

// const [items,setItems] = useState ([])

// // const promesa = () => useState ([])
// const productos = [
//   {id: 1, name: "trufa", price:150, stock: 5 },
//   {id: 2, name: "aceite de oliva", price:20, stock: 10 },
//   {id: 3, name: "papa", price:10, stock: 2 },

//   ]
  
//   const task = new Promise ((res, rej) => {
//     setTimeout(()=>
//     {
//       res(productos)
//     }, 2000)
//   })
  
//   useEffect(() => {
    
//     task.then (res => setItems(res))
//     .catch(error => console.log(error))
    
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