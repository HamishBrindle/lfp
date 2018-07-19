import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scenes/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';

// Redux Stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './redux/reducers';

import rootSaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

// Our redux store object
const store = createStore(
    reducers,
    compose(
      applyMiddleware(sagaMiddleware), 
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(
    rootSaga
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
