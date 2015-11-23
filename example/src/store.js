import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { router5Middleware, router5Reducer } from 'redux-router5';
import list from './reducers/list';

export default function configureStore(router, initialState = {}) {
    const createStoreWithMiddleware = applyMiddleware(router5Middleware(router))(createStore);

    const store = createStoreWithMiddleware(combineReducers({
        router: router5Reducer,
        list
    }), initialState);

    window.store = store;
    return store;
}
