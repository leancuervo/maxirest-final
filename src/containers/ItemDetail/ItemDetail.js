
import ItemCount from '../../components/ItemCount/ItemCount';
import CartContextProvider from "../../context/CartContext"
import {useCartContext } from "../../context/CartContext"
import Intercambio from '../../components/ItemCount/Intercambio';
import { useState } from 'react';
import { Link } from 'react-router-dom';


 const ItemDetail = ({producto = {}}) => {
    const [isCount, setIsCount] = useState(true)

    const {agregarCarrito, cartItem} = useCartContext()

    const onAdd = (count) => {
      console.log(count)
      agregarCarrito(producto)
    }
    // 
    // const { agregarAlCarrito, cartList} = CartContextProvider()

    // const onAdd = (count) => {
    //   console.log(count) 
    //   agregarAlCarrito({...producto, cantidad:count})
    //   setIsCount(false)
    // }

    // console.log(cartList)

    return (
      <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col'>
                                <img src= {producto.image} alt={producto.name} className="w-100" />
                            </div>    
                            <div className='col'>
                              <h2>Nombre: {producto.name}</h2>
                              <p>Precio: {producto.price} </p>
                              <p>Categoria: {producto.categoria} </p>
                              <p>Stock: {producto.stock}</p>
                            </div>
                        </div>
                        <div className='producto__button' style= { { display:'flex', flexDirection: 'col', justifyContent: 'center', flexWarp: 'warp'}}>
                          <Intercambio/>
                        </div>
                        
                    </div>
                    <div className='col'>
                        { isCount ?

                          <ItemCount initial={1} stock={5} onAdd={onAdd} />
                        :

                          <Link to='/cart'>
                            <button className='btn btn-outline-primary'> IR AL CARRITO</button>
                          </Link>

                          }
                    </div>
                    
                </div>

    )









    }


    export default ItemDetail































          // const onAdd = (count) => {
          //   console.log(count)
          // }

          // return (

          //   <div style= { { display:'flex', flexDirection: 'row', justifyContent: 'center', flexWarp: 'warp'}}>
          //     {itemDetail.map( item => <div key = {item.id} className='col-md-4 p-1'> 

          //         <div className='card w-100 mt-5'> 

          //           <div className= "card-header">
          //               {`${item.name} - ${item.stock}`}  
          //             </div>
          //               <div className='card-body'>
          //                 <center>
          //                   <img src={item.imag} alt={item.name} className='w-50'></img>  
          //                 </center>  
          //               <label> Precio: {item.price}</label>
          //               </div>
          //               <div className='card-footer'>
          //               <Link  to={`detalle/${item.id}`}>
          //                   <button className= "btn btn-outline-primary btn-block">
          //                     Detalle del producto
          //                   </button>
          //               </Link>
          //               </div>
          //         </div>
          //         </div>
              
          //             // <Item item={item} key={item.id}/>

          //     )}
          // </div>

           

    

                // <div className='row'>
                //     <div className='col'>
                //         <div className='row'>
                //             <div className='col'>
                //                 <img src= {data.image} alt={data.name} className="w-100" />
                //             </div>    
                //             <div className='col'>
                //               <h2>Nombre: {data.name}</h2>
                //               <p>Precio: {data.price} </p>
                //               <p>Stock: {data.stock}</p>
                //             </div>
                //         </div>
                //         <div className='producto__button'>
                //           <button className='button'> Detalle </button>
                //         </div>
                //         <div>
                //           <a href="#" className='btn'></a>
                //         </div>
                //     </div>
                //     <div className='col'>
                //       <ItemCount initial={1} stock={5} onAdd={onAdd} />
                //     </div>
                // </div>
  
