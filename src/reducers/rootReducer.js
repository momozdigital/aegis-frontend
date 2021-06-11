import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { calendarReducer } from './calendarReducer';
import { authReducer } from './authReducer';
import { aegisReducer } from './aegisReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer,
    aegis: aegisReducer,
    auth: authReducer
})

