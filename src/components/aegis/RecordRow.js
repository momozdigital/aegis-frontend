import React from 'react'
import { useDispatch } from 'react-redux'
import { recordSetActive } from '../../actions/records';

export const RecordRow = ( { pid, nombre, apellido, rut, correo } ) => {
    
    const dispatch = useDispatch();

    const handleActive = (e) => {
        const active = e.target.value;        
        console.log(active)     
        dispatch( recordSetActive(active) );       
    }

         
    

    return (
        <div type="radio" className="row mb-1">            
            <div className="col-md-3 pointer">
                <p>{ pid }</p>
            </div>
            <div className="col-md-3 pointer">
                <p> { nombre } { apellido } </p>
            </div>            
            <div className="col-md-2 pointer">
                <p>{ rut }</p>
            </div>
            <div className="col-md-3 pointer">
                <p>{ correo }</p>
            </div>
            <div className="col-md-1 pointer">
                <input type="radio" name="record" value={ pid } onChange={ handleActive }/>            
            </div>
        </div>
    )
}
