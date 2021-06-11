import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { startRegister } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import icono_atras  from "../../assets/icono-atras-png-5.png";
import './login.css';

export const RegisterScreen = () => {

    const dispatch = useDispatch();    

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        rName: '',
        rRut: '',
        rEmail: '',
        rPassword1: '',
        rPassword2: ''
    });    
    
    const { rName, rRut, rEmail, rPassword1, rPassword2 } = formRegisterValues;    

    const handleRegister = ( e ) => {
        e.preventDefault();

        if(rName.length < 6) {
            return Swal.fire('Error', 'El nombre debe tener al menos 6 caracteres','error');
        }
        if(rPassword1.length < 6) {
            return Swal.fire('Error', 'La contraseña debe tener al menos 6 caracteres','error');
        }
        if ( rPassword1 !== rPassword2 ) {
            return Swal.fire('Error', 'Las contraseñas deben de ser iguales','error');
        }
        console.log('?')
        dispatch( startRegister( rEmail, rPassword1, rName ) );
    }


    return (
        <div className="outter login-container">
            <div className="middle">
                <div className="inner login-form-2">
                    <Link to="/" className="icono-atras"><img src={ icono_atras } alt="icono-atras"/></Link>
                    <div className="intro-text">
                        <h2>AEGIS</h2>
                    </div> 
                    <div className="user-icon">
                        <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="usuario"/>
                    </div>                    
                    <form onSubmit={ handleRegister }>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Completo"
                                name="rName"
                                value={ rName }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Rut"
                                name="rRut"
                                value={ rRut }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo Electornico"
                                name="rEmail"
                                value={ rEmail }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name="rPassword1"
                                value={ rPassword1 }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name="rPassword2"
                                value={ rPassword2 }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}