import React from 'react';
import Window from '../components/Window';
import { Link, useLocation } from 'react-router-dom';
import { Title } from '../components/Title';

export default function About(): JSX.Element {
    const location = useLocation();

    return <Window
        id={'about'}
        title={'Author\'s Note'}
        icon="src/assets/about-svgrepo-com.svg"
        canGoBack={false}
    >
        <>
            <div>
                <img src={'src/assets/chive-blossoms.png'} className="rounded-lg max-h-32 max-w-32" alt="flower" />
            </div>

            <Title title={'Meropi\'s Room' }/>

            <div className="mt-2 text-left flex w-9/12">
                <span>Look, you've found my room! This is where I keep a log of the projects I like most. If you're interested, click on the big purple button below. Otherwise, you can close this window and explore my room but please don't take anything...</span>
            </div>

            <div className="mt-12 mb-12">
                <Link className="btn bg-light hover:border-b-light text-white font-medium py-2 px-4 border-b-4 border-main rounded" to="/projects" state={{ previousPath: location.pathname }}>See Projects</Link>
            </div>

            <div className="flex mt-auto">
                <span className="text-sm">(✉️: meropi.l@outlook.com)</span>
            </div>
        </>
    </Window>;
}
