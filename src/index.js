import ReactDOM from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import './styles/styles.scss';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import IntlProviderWrapper from "./hoc/IntlProviderWrapper";
import '../node_modules/nprogress/nprogress.css'

import { Provider } from 'react-redux';
import reduxStore, { persistor } from './redux';
import { history } from './redux'; // 👈 import history
import { Router } from 'react-router-dom'; // 👈 dùng Router từ react-router-dom

const renderApp = () => {
    ReactDOM.render(
        <Provider store={reduxStore}>
            <Router history={history}>
                <IntlProviderWrapper>
                    <App persistor={persistor} />
                </IntlProviderWrapper>
            </Router>
        </Provider>,
        document.getElementById('root')
    );
};

renderApp();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
