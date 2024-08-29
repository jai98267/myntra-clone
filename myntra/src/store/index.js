
import fetchStatusSlice from "./fetchStatusSlice";
import itemsSlice from "./itemsSlice";
import{configureStore} from "@reduxjs/toolkit";


const myntraStore=configureStore({
  reducer:{
    items:itemsSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer

  }
})

export default myntraStore
