import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect       
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';

import { LoginScreen } from '../components/auth/LoginScreen';
import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { GestionarScreen } from '../components/aegis/GestionarScreen';
import { DashboardScreen } from '../components/aegis/DashboardScreen';


export const AppRouter = () => {
    
    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);    

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
                        path="/gestionar" 
                        component={ GestionarScreen } 
                        isAuthenticated={ !!uid }
                    />
                    <PrivateRoute 
                        exact 
                        path="/gestionar/:id" 
                        component={ GestionarScreen } 
                        isAuthenticated={ !!uid }
                    />

                    <Redirect to="/" />   
                </Switch>
            </div>
        </Router>
    )
}
