import React, { useEffect, useState } from 'react';
import { Navbar } from '../ui/Navbar';
import './aegis.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearActiveRecord, recordStartAddNew, recordStartUpdate } from '../../actions/records';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

import icono_atras  from "../../assets/icono-atras-png-5.png";

const initialState = {
    pNombre: 'Ellon',
    pApellidopaterno: 'Musk',
    pApellidomaterno: 'Musk',
    pRut: '7589',
    pFechadenac: '11/08/1987',
    pEstadocivil: 'soltero',
    pComuna: 'LA',
    pProvincia: 'California',
    pEmail: 'ellon@gmail.com',
    pFonocontacto: '555-5555-555',
    cNombre: 'Noone',
    cApellidopaterno: 'nobody',
    cApellidomaterno: 'nobody',
    cRut: '00000',
    cFechadenac: '11/08/1987',
    cEstadocivil: 'None',
    cComuna: 'None',
    cProvincia: 'None',
    cEmail: 'none@gmail.com',
    cFonocontacto: '555-5555-555',
    rol: 'CEO',
    tipodevivienda: 'SpaceX',
    domicilio: 'Mars',
    materialidad: 'Allofit',
    numerofinal: '7',
    comunafinal: 'Space',
    poblacionfinal: 'Universe',
    provinciafinal: 'Solar System',
    ocupantes: '1000',
    observaciones: 'none',
}  

export const GestionarScreen = () => {    
    
    const [formValues, setformValues] = useState(initialState);
    const { activeRecord } = useSelector(state => state.aegis);

    useEffect(() => {
        if ( activeRecord ) {
            setformValues( activeRecord );
        } else {
            setformValues( initialState );
        }
    }, [activeRecord, setformValues])
      
      const [pNameValid, setpNameValid] = useState(true);
      const [pApellidopaternoValid, setpApellidopaternoValid] = useState(true);
      const [pApellidomaternoValid, setpApellidomaternoValid] = useState(true);
      const [pRutValid, setpRutValid] = useState(true);
      const [pFechadenacValid, setpFechadenacValid] = useState(true);
      const [pEstadocivilValid, setpEstadocivilValid] = useState(true);
      const [pComunaValid, setpComunaValid] = useState(true);
      const [pProvinciaValid, setpProvinciaValid] = useState(true);
      const [pEmailValid, setpEmailValid] = useState(true);
      const [pFonocontactoValid, setpFonocontactoValid] = useState(true);

      const [cNombreValid, setcNombreValid] = useState(true);
      const [cApellidopaternoValid, setcApellidopaternoValid] = useState(true);
      const [cApellidomaternoValid, setcApellidomaternoValid] = useState(true);
      const [cRutValid, setcRutValid] = useState(true);
      const [cFechadenacValid, setcFechadenacValid] = useState(true);
      const [cEstadocivilValid, setcEstadocivilValid] = useState(true);
      const [cComunaValid, setcComunaValid] = useState(true);
      const [cProvinciaValid, setcProvinciaValid] = useState(true);
      const [cEmailValid, setcEmailValid] = useState(true);
      const [cFonocontactoValid, setcFonocontactoValid] = useState(true);

      const [rolValid, setrolValid] = useState(true);
      const [tipodeviviendaValid, settipodeviviendaValid] = useState(true);
      const [domicilioValid, setdomicilioValid] = useState(true);
      const [materialidadValid, setmaterialidadValid] = useState(true);
      const [numerofinalValid, setnumerofinalValid] = useState(true);
      const [comunafinalValid, setcomunafinalValid] = useState(true);
      const [poblacionfinalValid, setpoblacionfinalValid] = useState(true);
      const [provinciafinalValid, setprovinciafinalValid] = useState(true);
      const [ocupantesValid, setocupantesValid] = useState(true);
      const [observacionesValid, setobservacionesValid] = useState(true);
      
      const {          
        pNombre, 
        pApellidopaterno, 
        pApellidomaterno,
        pRut,
        pFechadenac,
        pEstadocivil,
        pComuna,
        pProvincia,
        pEmail,
        pFonocontacto,
        cNombre,
        cApellidopaterno,
        cApellidomaterno,
        cRut,
        cFechadenac,
        cEstadocivil,
        cComuna,
        cProvincia,
        cEmail,
        cFonocontacto,
        rol,
        tipodevivienda,
        domicilio,
        materialidad,
        numerofinal,
        comunafinal,
        poblacionfinal,
        provinciafinal,
        ocupantes,
        observaciones,        
    } = formValues;
      
      const dispatch = useDispatch();

      const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })

        if(target.value.length < 2){
            target.classList.add("is-invalid");
        } else {
            target.classList.remove("is-invalid");
        }
      }     
      
      const handleCleanForm = () => setformValues({ ...initialState });
      
      const handleCleanActive = () => {
          dispatch( clearActiveRecord() );
      }

      const handleSubmit = (e) => {

        e.preventDefault();
        setformValues({ ...formValues, loading : true });

        if ( pNombre.trim().length < 2 ) {
            return setpNameValid(false);
        }
        if( pApellidopaterno.trim().length < 2 ) {
            return setpApellidopaternoValid(false);
        }
        if( pApellidomaterno.trim().length < 2 ) {
            return setpApellidomaternoValid(false);
        }
        if( pRut.trim().length < 2 ) {
            return setpRutValid(false);
        }
        if( pFechadenac.trim().length < 2 ) {
            return setpFechadenacValid(false);
        }    
        if( pEstadocivil.trim().length < 2 ) {
            return setpEstadocivilValid(false);
        }   
        if( pComuna.trim().length < 2 ) {
            return setpComunaValid(false);
        }
        if( pProvincia.trim().length < 2 ) {
            return setpProvinciaValid(false);
        }
        if( pEmail.trim().length < 2 ) {
            return setpEmailValid(false);
        }
        if( pFonocontacto.trim().length < 2 ) {
            return setpFonocontactoValid(false);
        }
        /////////////
        if ( cNombre.trim().length < 2 ) {
            return setcNombreValid(false);
        }
        if( cApellidopaterno.trim().length < 2 ) {
            return setcApellidopaternoValid(false);
        }
        if( cApellidomaterno.trim().length < 2 ) {
            return setcApellidomaternoValid(false);
        }
        if( cRut.trim().length < 2 ) {
            return setcRutValid(false);
        }
        if( cFechadenac.trim().length < 2 ) {
            return setcFechadenacValid(false);
        }    
        if( cEstadocivil.trim().length < 2 ) {
            return setcEstadocivilValid(false);
        }   
        if( cComuna.trim().length < 2 ) {
            return setcComunaValid(false);
        }
        if( cProvincia.trim().length < 2 ) {
            return setcProvinciaValid(false);
        }
        if( cEmail.trim().length < 2 ) {
            return setcEmailValid(false);
        }
        if( cFonocontacto.trim().length < 2 ) {
            return setcFonocontactoValid(false);
        }
        ///////////
        if ( rol.trim().length < 2 ) {
            return setrolValid(false);
        }
        if( tipodevivienda.trim().length < 2 ) {
            return settipodeviviendaValid(false);
        }
        if( domicilio.trim().length < 2 ) {
            return setdomicilioValid(false);
        }
        if( materialidad.trim().length < 2 ) {
            return setmaterialidadValid(false);
        }
        if( numerofinal.trim().length < 2 ) {
            return setnumerofinalValid(false);
        }    
        if( comunafinal.trim().length < 2 ) {
            return setcomunafinalValid(false);
        }   
        if( poblacionfinal.trim().length < 2 ) {
            return setpoblacionfinalValid(false);
        }
        if( provinciafinal.trim().length < 2 ) {
            return setprovinciafinalValid(false);
        }
        if( ocupantes.trim().length < 2 ) {
            return setocupantesValid(false);
        }
        if( observaciones.trim().length < 2 ) {
            return setobservacionesValid(false);
        }

        if( activeRecord) { 
            dispatch( recordStartUpdate( formValues ) );
            dispatch( clearActiveRecord() );
        } else {
            dispatch( recordStartAddNew( formValues ) );            
        }

        setformValues({ ...initialState });
        Swal.fire('Exito', 'Se ha guardado el nuevo expediente', 'success');
        setpNameValid(true);
        setpApellidopaternoValid(true);
        setpApellidopaternoValid(true);
        setpRutValid(true);
        setpFechadenacValid(true);
        setpEstadocivilValid(true);
        setpComunaValid(true);
        setpProvinciaValid(true);
        setpEmailValid(true);
        setpFonocontactoValid(true);
        setcNombreValid(true);
        setcApellidopaternoValid(true);
        setcApellidomaternoValid(true);
        setcRutValid(true);
        setcFechadenacValid(true);
        setcEstadocivilValid(true);
        setcComunaValid(true);
        setcProvinciaValid(true);
        setcEmailValid(true);
        setcFonocontactoValid(true);
        setrolValid(true);
        settipodeviviendaValid(true);
        setdomicilioValid(true);
        setmaterialidadValid(true);
        setnumerofinalValid(true);
        setcomunafinalValid(true);
        setpoblacionfinalValid(true);
        setprovinciafinalValid(true);
        setocupantesValid(true);
        setobservacionesValid(true);
      }         

        return ( 
            <div className="crear-screen">
                <Navbar />
                
                <form id="create-customer">                
                <Link to="/" className="prev-page" onClick={ handleCleanActive }><img src={ icono_atras } alt="icono-atras"/></Link>
                <section className="inner-container1">
                    <div className="inner-div">
                        <h2>Postulante</h2> 
                        <table>
                        <thead>
                        <tr>
                            <th>
                                <label htmlFor="pNombre" className="ml-10">Nombre</label>           
                                <input className={ `ml-10 form-control ${ !pNameValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="pNombre" 
                                       onChange={ handleInputChange }
                                       value={ pNombre }
                                />
                            </th>
                            <th colSpan="2">
                                <label htmlFor="pApellidopaterno" className="text-centered">Apellido Paterno</label>
                                <input className={`centered form-control ${ !pApellidopaternoValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="pApellidopaterno" 
                                       onChange={ handleInputChange }
                                       value={ pApellidopaterno } 
                                />
                            </th>
                            <th>
                                <label htmlFor="pApellidomaterno">Apellido Materno</label>
                                <input className={`mr-10 form-control ${ !pApellidomaternoValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="pApellidomaterno" 
                                       onChange={ handleInputChange }
                                       value={ pApellidomaterno } 
                                />
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor="pRut" className="ml-10">RUT</label>
                                <input className={`input2 ml-10 form-control ${ !pRutValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="pRut" 
                                       onChange={ handleInputChange }
                                       value={ pRut } 
                                />
                            </td>
                            <td>
                                <label htmlFor="pFechadenac" className="ml-10">Fecha de Nac.</label>
                                <input className={`input3 ml-10 form-control ${ !pFechadenacValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="pFechadenac" 
                                       onChange={ handleInputChange }
                                       value={ pFechadenac } 
                                required="required"/>
                            </td>
                            <td>
                                <label htmlFor="pEstadocivil" className="ml-10">Estado Civil</label>
                                <input className={`input3 ml-10 form-control ${ !pEstadocivilValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="pEstadocivil" 
                                       onChange={ handleInputChange }
                                       value={ pEstadocivil } 
                                />
                            </td>
                            <td>
                                <label htmlFor="pComuna">Comuna</label>
                                <input className={`input2 form-control ${ !pComunaValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="pComuna" 
                                       onChange={ handleInputChange }
                                       value={ pComuna } 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="pProvincia" className="ml-10">Provincia</label>
                                <input className={`ml-10 mb-10 form-control ${ !pProvinciaValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="pProvincia" 
                                       onChange={ handleInputChange }
                                       value={ pProvincia} 
                                />
                            </td>
                            <td colSpan="2">
                                <label htmlFor="pEmail" className="text-centered">E-mail</label>
                                <input className={`centered mb-10 form-control ${ !pEmailValid && 'is-invalid' } `} 
                                       type="email" 
                                       name="pEmail" 
                                       onChange={ handleInputChange }
                                       value={ pEmail } 
                                />
                            </td>
                            <td>
                                <label htmlFor="pFonocontacto">Fono Contacto</label>
                                <input className={`mb-10 mr-10 form-control ${ !pFonocontactoValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="pFonocontacto" 
                                       onChange={ handleInputChange }
                                       value={ pFonocontacto } 
                                />
                            </td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                    <div className="inner-div">    
                        <h2>Conyugue</h2> 
                        <table>
                        <thead>
                        <tr>
                            <th>
                                <label htmlFor="cNombre" className="ml-10">Nombre</label>           
                                <input className={`ml-10 form-control ${ !cNombreValid && 'is-invalid' } `} 
                                       type="text"
                                       name="cNombre" 
                                       onChange={ handleInputChange }
                                       value={ cNombre } 
                                />
                            </th>
                            <th colSpan="2">
                                <label htmlFor="cApellidopaterno" className="text-centered">Apellido Paterno</label>
                                <input className={`centered form-control ${ !cApellidopaternoValid && 'is-invalid' } `} 
                                       type="text"
                                       name="cApellidopaterno" 
                                       onChange={ handleInputChange }
                                       value={ cApellidopaterno } 
                                />
                            </th>
                            <th>
                                <label htmlFor="cApellidomaterno">Apellido Materno</label>
                                <input className={`mr-10 form-control ${ !cApellidomaternoValid && 'is-invalid' } `} 
                                       type="text"
                                       name="cApellidomaterno" 
                                       onChange={ handleInputChange }
                                       value={ cApellidomaterno } 
                                />
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <label htmlFor="cRut" className="ml-10">RUT</label>
                                <input className={`input2 ml-10 form-control ${ !cRutValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="cRut" 
                                       onChange={ handleInputChange }
                                       value={ cRut } 
                                />
                            </td>
                            <td>
                                <label htmlFor="cFechadenac" className="ml-10">Fecha de Nac.</label>
                                <input className={`input3 ml-10 form-control ${ !cFechadenacValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="cFechadenac" 
                                       onChange={ handleInputChange }
                                       value={ cFechadenac } 
                                />
                            </td>
                            <td>
                                <label htmlFor="cEstadocivil" className="ml-10">Estado Civil</label>
                                <input className={`input3 ml-10 form-control ${ !cEstadocivilValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="cEstadocivil" 
                                       onChange={ handleInputChange }
                                       value={ cEstadocivil } 
                                />
                            </td>
                            <td>
                                <label htmlFor="cComuna">Comuna</label>
                                <input className={`input2 form-control ${ !cComunaValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="cComuna" 
                                       onChange={ handleInputChange }
                                       value={ cComuna } 
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="cProvincia" className="ml-10">Provincia</label>
                                <input className={`ml-10 mb-10 form-control ${ !cProvinciaValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="cProvincia" 
                                       onChange={ handleInputChange }
                                       value={ cProvincia }
                                />
                            </td>
                            <td colSpan="2">
                                <label htmlFor="cEmail" className="text-centered">E-mail</label>
                                <input className={`centered mb-10 form-control ${ !cEmailValid && 'is-invalid' } `} 
                                       type="email" 
                                       name="cEmail" 
                                       onChange={ handleInputChange }
                                       value={ cEmail }
                                />
                            </td>
                            <td>
                                <label htmlFor="cFonocontacto">Fono Contacto</label>
                                <input className={`mb-10 mr-10 form-control ${ !cFonocontactoValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="cFonocontacto" 
                                       onChange={ handleInputChange }
                                       value={ cFonocontacto }
                                />
                            </td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                </section>
                <section className="inner-container2">
                    <div className="left">
                    <h2>Datos Comunes</h2>
                    <div className="inner-section datos-comunes">
                            <div>
                                <label htmlFor="" className="dc-label">Rol</label>                    
                                <input className={`input1 form-control ${ !rolValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="rol" 
                                       onChange={ handleInputChange }
                                       value={ rol }
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="dc-label">Tipo de vivienda</label>
                                <input className={`input1 form-control ${ !tipodeviviendaValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="tipodevivienda" 
                                       onChange={ handleInputChange }
                                       value={ tipodevivienda }
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="dc-label">Domicilio</label>
                                <input className={`input1 form-control ${ !domicilioValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="domicilio" 
                                       onChange={ handleInputChange }
                                       value={ domicilio }
                                />
                            </div>
                            <div>
                                <label htmlFor=""  className="dc-label"style={{fontSize: '14px', marginTop: '18px'}}>Materialidad Predominante</label>
                                <input className={`input1 form-control ${ !materialidadValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="materialidad" 
                                       onChange={ handleInputChange }
                                       value={ materialidad }
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="dc-label">Numero Final</label>
                                <input className={`input1 form-control ${ !numerofinalValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="numerofinal" 
                                       onChange={ handleInputChange }
                                       value={ numerofinal }
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="dc-label">Comuna Final</label>
                                <input className={`input1 form-control ${ !comunafinalValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="comunafinal" 
                                       onChange={ handleInputChange }
                                       value={ comunafinal }
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="dc-label">Poblacion Final</label>
                                <input className={`input1 form-control ${ !poblacionfinalValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="poblacionfinal" 
                                       onChange={ handleInputChange }
                                       value={ poblacionfinal }
                                />         
                            </div>
                            <div>
                                <label htmlFor="" className="dc-label">Provincia Final</label>
                                <input className={`input1 form-control ${ !provinciafinalValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="provinciafinal" 
                                       onChange={ handleInputChange }
                                       value={ provinciafinal }
                                />
                            </div>
                            <div>
                                <label htmlFor="" className="dc-label">Ocupantes de la Viv.</label>
                                <input className={`input1 form-control ${ !ocupantesValid && 'is-invalid' } `} 
                                       type="text" 
                                       name="ocupantes" 
                                       onChange={ handleInputChange }
                                       value={ ocupantes }
                                />
                            </div> 
                    </div> 
                    </div>
                    <div className="right">
                    <h2>Observaciones</h2>
                    <div className="observaciones">
                        <textarea className={`input1 form-control ${ !observacionesValid && 'is-invalid' } `} 
                                  name="observaciones" 
                                  onChange={ handleInputChange }
                                  value={ observaciones }></textarea>
                        <div className="botones">
                            <input className="btn btn-success" type="button" id="guardar" value="Guardar" onClick={ handleSubmit } />
                            <input className="btn btn-danger" type="button" id="borrar" value="Borrar" onClick={ handleCleanForm }/>                            
                        </div>
                    </div>
                   </div>                   
                </section>               
            </form>
            </div>
        );
    
    
} 
