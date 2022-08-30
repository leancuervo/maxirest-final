import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import React, { useEffect, useState } from 'react'
import { ProductsData } from '../../Data/ProductsData';
import Card from 'react-bootstrap/Card';


const Item = ({prod}) => {

  const { name, price, stock, image, id } = prod
  
  const onAdd = (count) =>{
    alert('Pedido de ' + name + ' por: ' + count + ' kg')
    }
    


    return (
      <Card style={{ width: '18rem', margin: 20 }}>
      <Card.Img variant="top" src= {prod.image} style={{ maxHeight:'10rem'}} />
      <Card.Body>
      <Card.Title>{prod.name}</Card.Title>
      <Card.Text>
          $:{price}
          <br />
          Disponible: {stock}
      </Card.Text>
      <Link to={`/detalle/${prod.id}`}>
      <Button variant="primary">Mas Info</Button>
      </Link>
      </Card.Body>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
      </Card>



        // <div 
          
        //   key= {prod.id}
        //   className='col-md-4 p-1'
        // >

        //   <div className='card w-100 mt-5'>
        //   <div className='card-header'>
        //     {`${prod.name} - ${prod.categoria}`}
        //   </div>
        //   <div className='card-body'>
        //     <center>
        //       <img src={prod.image} alt={prod.name} className='w-50'/>
        //     </center>
        //     <label> Precio: {prod.price}</label>
        //     <label> Stock: {prod.stock}</label>
        //   </div>
        //   <div className='card-footer'>
        //       <Link to={`/detalles/&{prod.id}`}>
        //         <button className='btn btn-outline-primary '>
        //           DETALLE DEL PRODUCTO
        //         </button>
        //       </Link>
        //   </div>
        //   </div>


        // </div> 
        
        

        )
}


export default Item



/* <>
            <div  className='product'>
                <img src={image} alt={name}/>
            
              <div>
                <p>
                  {name} - ${price}
                </p>
              </div>
              <Link to={`/detalle/${id}`}>
                <Button variant="primary">Mas Info</Button>
              </Link>
              <ItemCount initial={1} stock={10} onAdd={onAdd}/>
              <button className='addBtn' onClick={() => console.log (item)}>Agregar al Carrito</button>
          </div>
        </>   */


