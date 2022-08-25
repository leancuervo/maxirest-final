import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const InputCount = () => {
    return (
        <>
        <Link to ='/cart'>
            <button
                className='btn btn-outline-primary'
                onClick={()=> console.log('ir a cart')}>
                    Finalizar Compra
                </button>
        </Link>
        <Link to ='/'>
            <button
                className='btn btn-outline-primary'
                onClick={()=>console.log('ir al home')}>
                    Seguir Comprando
                </button>
        </Link>
        </>
    )
}

const ButtonCount= ({handleInter}) =>{
    return <button
                className='btn btn-outline-success'
                onClick={handleInter}>
                    Agregar al Carrito
                </button>
}


const Intercambio = () => {

    const [inputType, setInputType] = useState('button')

    const handleInter=()=>{
        setInputType('input')
    }

  return (
    <div style= { { display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <h2>Descripción</h2>

    {
        inputType === 'button' ?
        <ButtonCount handleInter={handleInter}/>
        :
        <InputCount/>
    }

    </div>


  )
}

export default Intercambio
