import {createStore,} from 'redux'
import {update} from './reducers'
const store=createStore(update)

export default store