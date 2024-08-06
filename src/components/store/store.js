import {configureStore} from '@reduxjs/toolkit'
import navReducer from '../slice/navSlice'
import videosReducer from '../slice/videoSlice'
import searchReducer from '../slice/searchSlice'
import chatReducer from '../slice/chatSlice'
const store=configureStore({

    reducer:{
       app:navReducer,
       video:videosReducer,
       search:searchReducer,
       chat:chatReducer
    }

})

export default store