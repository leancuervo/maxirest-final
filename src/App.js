import './App.css';
import {  BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import React, { Suspense, useState } from 'react';
import { useCartContext } from './context/CartContext';
import CartContainer from './containers/CartContainer/CartContainer';
import { Input } from './components/paginas/Input';




class App extends React.Component {

  render() {
    return(
      <div className='app'>

          
          <BrowserRouter>
                <useCartContext>
                    <div className="App border border-1 border-danger">
                      <Navbar />
                      
                      <Routes>
                          <Route index path='/' element={<ItemListContainer/>} />
                          <Route index path='/categoria/:categoriaId' element={<ItemListContainer/>} />
                          <Route path='/detalle/:productoId' element ={
                            <Suspense fallback={<div>Cargando...</div>}>
                              <ItemDetailContainer/>
                            </Suspense>
                          } />
                          <Route path='/cart' element={<CartContainer/>}/>
                          <Route path='*' element={<Navigate to='/'/>}/>
                          

                          
                      </Routes>
                        
                    </div>
                </useCartContext>
          </BrowserRouter>
          
          

      </div>
    )
  }
}


export default App;
