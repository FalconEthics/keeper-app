import React from 'react'
import { createRoot } from "react-dom/client";
import App from './App'
import './index.css'
import {Provider} from 'react-redux';
import store from './store/store';

const root = createRoot(document.getElementById('root'));
root.render(<div>
    <Provider store={store}>
        <App/>
    </Provider>
</div>);
