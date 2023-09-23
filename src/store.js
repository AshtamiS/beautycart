import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
// to generate middleware

// here we created a store and it contaqins 2 parameter , 1st reducer and middle ware so first define the reducer anf fn created named reducer  and 2nd middle ware for assynchronous are came like synchronous so we need to conver t0 assynchronous

const reducers=combineReducers({

})
const middleware=[thunk]

const store=createStore(reducers,applyMiddleware(...middleware))

export default store