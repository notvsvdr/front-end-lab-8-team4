import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

const createStoreWidthMiddleWare = applyMiddleware(thunk)(createStore);
let store = createStoreWidthMiddleWare(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());