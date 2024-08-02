import { configureStore } from "@reduxjs/toolkit";


export default  configureStore({
    reducer : {
       auth : '',
    },
    devTools: true,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})

})