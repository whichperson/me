import React, { lazy } from 'react';
// import Scene from './model/Scene';

const Scene = lazy(() => {
    return import('./model/Scene');
});

export default function App(): JSX.Element {
    return <Scene />;
}
