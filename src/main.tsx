import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import Loading from './components/Loading';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Suspense fallback={<Loading />}>
        <App/>
    </Suspense>,
);
