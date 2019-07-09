import { combineReducers } from 'redux'
import todoReducer from './todoReducer.jsx'

const shopApp = combineReducers(
   {
       todoReducer
   }
)

export default shopApp