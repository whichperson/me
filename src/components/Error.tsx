import React from 'react';

export default function Error(): JSX.Element {
    return <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="mt-2 animate-bounce">
            <span style={{ color: '#6347FF' }} className="text-xl font-bold uppercase">Oops, my room is on fire!</span>
        </div>
    </div>;
}
