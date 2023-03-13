import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Error from './Error';
import About from '../content/About';
import Projects from '../content/Projects';
import Resume from '../content/Resume';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to={'/about'}/>,
        errorElement: <Error/>,
    },
    {
        path: '/about',
        element: <About/>,
        errorElement: <Error/>,
    },
    {
        path: '/projects',
        element: <Projects/>,
        errorElement: <Error/>,
    },
    {
        path: '/resume',
        element: <Resume/>,
        errorElement: <Error/>,
    },
]);


export default function Routes(): JSX.Element {
    return <RouterProvider router={router} />;
}
