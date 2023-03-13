import React, { useEffect, useState } from 'react';
import { InterfaceContextProvider } from './components/Interface';
import { useProgress } from '@react-three/drei';

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
            <Routes/>
        </InterfaceContextProvider>
    </div>;
}
