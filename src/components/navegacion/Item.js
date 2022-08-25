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


export default Item


