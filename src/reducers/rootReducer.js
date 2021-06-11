import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { aegisReducer } from './aegisReducer';



export const rootReducer = combineReducers({    
    aegis: aegisReducer,
    auth: authReducer
})

