import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import { clearActiveRecord } from '../../actions/records';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector( state => state.auth );

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    const handleClearActive = () => {
        dispatch( clearActiveRecord() );
    }
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                { name }
            </span>
            <Link to="/"><h1 className="aegis-logo" onClick={ handleClearActive }>AEGIS</h1></Link>
            <button 
                className="btn btn-danger"
                onClick={ handleLogout }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>

        </div>
    )
}
