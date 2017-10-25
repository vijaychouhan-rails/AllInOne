import { createStore, applyMiddleware, compose } from 'redux';
// import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(thunk),
//   autoRehydrate(),
// ));
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
