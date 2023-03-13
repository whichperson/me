import React from 'react';
import { InterfaceContextProvider } from './components/Interface';
import { ToastContainer } from 'react-toastify';

const Scene = React.lazy(() => {
    return import('./content/Scene');
});

const Routes = React.lazy(() => {
    return import('./components/Routes');
});

export default function App(): JSX.Element {
    return <div id="container">
        <InterfaceContextProvider>
            <Scene/>
            <ToastContainer/>
            <Routes/>
        </InterfaceContextProvider>
    </div>;
}
