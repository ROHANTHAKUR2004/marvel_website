import { configureStore } from "@reduxjs/toolkit";
import CharacterSliceReducer from "./Slices/CharacterSlice";



export default  configureStore({
    reducer : {
      auth : CharacterSliceReducer,
     
    },
    devTools: true,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck : false})

})