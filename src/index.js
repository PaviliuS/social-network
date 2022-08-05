import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';
import ReactDOM from 'react-dom/client';

import './index.scss';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

// let renderTree = (store) => {
// ReactDOM.render(
//     <React.StrictMode> 
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App />
//             </Provider>
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
        {/* </BrowserRouter> */}
    </React.StrictMode>
)
// };

// renderTree(store);

// store.subscribe(() => {
//     renderTree(store);
// });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
