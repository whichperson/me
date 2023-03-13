import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackIcon, CloseIcon, HomeIcon } from '../icons/Icons';
import { toast } from 'react-toastify';
import { useInterfaceContext } from './Interface';


type WindowProps = {
    id: string;
    title: string;
    icon?: string;
    canGoBack: boolean;
    children: React.ReactElement;
    [x:string]: unknown;
}

export default function Window({ id, title, icon, canGoBack, children, ...props }: WindowProps): JSX.Element {
    const [ showInterface, setShowInterface, pathname, setPathname ] = useInterfaceContext()!;

    const onClose = useCallback(() => {
        setShowInterface(false);
    }, [ setShowInterface ]);

    const navigate = useCallback((path: string) => {
        setPathname(path);
    }, [ setPathname ]);

    if (!showInterface) {
        return <></>;
    }

    return <div id={`window-${id}`} className="content fixed overflow-hidden flex flex-col w-window h-window top-0 bottom-0 left-0 right-0 m-auto bg-white/[0.8] shadow rounded-lg z-40">
        <div className="window-header h-12 px-4 py-2 inline-flex justify-between items-center">
            <div className="window-header-title flex items-center">
                {icon && <img src={icon} className="max-h-6 max-w-6 mr-2" alt="title icon" />}
                <span className="text-sm capitalize">{title}</span>
            </div>

            <div className="window-header-nav flex items-center">
                {canGoBack && (<>
                    <button className="btn p-2 hover:bg-gray-200 rounded mr-4" onClick={(): void => {
                        return navigate('/');
                    }}><HomeIcon /></button>
                    <button className="btn p-2 hover:bg-gray-200 rounded"><BackIcon/></button>
                </>)}

                <button className="btn p-2 hover:bg-gray-200 rounded" onClick={onClose}><CloseIcon/></button>
            </div>
        </div>

        <div className="window-body py-8 px-2 overflow-auto flex items-center flex-col bg-white h-full w-full" {...props}>
            {children}
        </div>

        <div className="window-footer my-1 items-center flex">
            <div className="h-25 flex items-center p-2 w-full"/>
        </div>
    </div>;
}
