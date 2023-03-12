import React from 'react';

export default function Loading(): JSX.Element {
    return <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="mt-2 animate-bounce">
            <span style={{ color: '#6347FF' }} className="text-xl font-bold uppercase">Flowers can hear buzzing bees.</span>
        </div>
    </div>;
}
