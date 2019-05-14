import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'
import modalReducer from '../reducers/modal'

export default () => {
    const store = createStore(
        combineReducers({
            filters: filtersReducer,
            auth: authReducer,
            modal: modalReducer
        }),
        composeWithDevTools(applyMiddleware(thunk))
    )
    return store
}

