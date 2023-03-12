import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Loading from './components/Loading';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './content/About';
import Projects from './content/Projects';
import Resume from './content/Resume';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'resume',
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Suspense fallback={<Loading/>}>
        <RouterProvider router={router} />
    </Suspense>,
);
