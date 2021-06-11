import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { startLogin } from '../../actions/auth';


import './login.css';
import { Link } from 'react-router-dom';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    
    const [ formLoginValues, handleLoginInputChange ] = useForm({
        lEmail: '',
        lPassword: ''
    });    
    
    const { lEmail, lPassword } = formLoginValues;    

    const handleLogin = ( e ) => {
        e.preventDefault();
        dispatch( startLogin( lEmail, lPassword ) );
    }

    return (
        <div className="outter login-container">
            <div className="middle">
                <div className="inner login-form-1">
                    <div className="intro-text">
                        <h2>AEGIS</h2>
                    </div> 
                    <div className="user-icon">
                        <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="usuario"/>
                    </div>                    
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo Electronico"
                                name="lEmail"
                                value={ lEmail }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword"
                                value={ lPassword }
                                onChange={ handleLoginInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Iniciar Sesión" 
                            />
                        </div>
                    </form>                    
                </div>                
                <div className="inner registro-div">
                    <p>¿No estas registrado?</p>
                    <div className="registrate">
                        <Link to="/register"><button>Crea una cuenta</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}