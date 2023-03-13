import React, { useContext, useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import { useLocation, useNavigate } from 'react-router-dom';

type InterfaceProps = {
    children: React.ReactNode;
}


const InterfaceContext = React.createContext(null);

export const useInterfaceContext = () => {
    return useContext(InterfaceContext);
};

export function InterfaceContextProvider({ children }: InterfaceProps): JSX.Element {
    const { progress } = useProgress();
    const [ showInterface, setShowInterface ] = useState(false);
    const [ pathname, setPathname ] = useState('/');


    useEffect(() => {
        setShowInterface(progress === 100);
    }, [ progress ]);

    // useEffect(() => {
    //     if (location.pathname !== pathname) {
    //         navigate(location.pathname);
    //     }
    // }, [ pathname ]);

    return <InterfaceContext.Provider value={[ showInterface, setShowInterface, pathname, setPathname ]}>
        {children}
    </InterfaceContext.Provider>;
}
