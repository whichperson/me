import React from 'react';
import { InterfaceContextProvider } from './components/Interface';
import { ToastContainer } from 'react-toastify';
import Routes from './components/Routes';
import Loading from './components/Loading';

const Scene = React.lazy(() => {
    return import('./content/Scene');
});


export default function App(): JSX.Element {
    return <div id="container">
        <InterfaceContextProvider>
            <Loading />
            {/* <Scene/>*/}
            {/* <ToastContainer/>*/}
            {/* <Routes/>*/}
        </InterfaceContextProvider>
    </div>;
}
