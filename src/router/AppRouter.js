import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    useHistory,   
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { CrearPostulanteScreen } from '../components/aegis/CrearPostulanteScreen';
import { DashboardScreen } from '../components/aegis/DashboardScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';


export const AppRouter = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);

    console.log(history);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    if ( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ !!uid }
                    />
                    <PublicRoute 
                        exact 
                        path="/register" 
                        component={ RegisterScreen }
                        isAuthenticated={ !!uid }
                    />

                    <PrivateRoute 
                        exact 
                        path="/" 
                        component={ DashboardScreen } 
                        isAuthenticated={ !!uid }
                    />
                    <PrivateRoute 
                        exact 
                        path="/crearPostulante" 
                        component={ CrearPostulanteScreen } 
                        isAuthenticated={ !!uid }
                    />
                    <PrivateRoute 
                        exact 
                        path="/crearPostulante/:id" 
                        component={ CrearPostulanteScreen } 
                        isAuthenticated={ !!uid }
                    />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}
