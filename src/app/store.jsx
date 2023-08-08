import { configureStore } from "@reduxjs/toolkit";
import autReducer from '../features/authSlice'


export const store=configureStore({

    reducer:{
        auth:autReducer
    }

})

