import React, { useCallback } from 'react';
import { ProjectItem } from '../content/Projects';
import { Link, useLocation } from 'react-router-dom';

type MenuItemProps = {
    title: string;
    onClick: (event: React.MouseEvent, title: string) => void;
}

type MenuProps = {
    items: Array<ProjectItem>;
    selectedItem: ProjectItem;
    onSelectItem: (item: ProjectItem) => void;
}

export const MenuItem = ({ title, onClick }: MenuItemProps): JSX.Element => {
    const location = useLocation();

    const isActive = location.hash && location.hash.substring('#'.length) === title;

    return (
        <li>
            <Link
                to={`#${title}`}
                state={{ previousPath: location.pathname }}
                className={`${isActive && 'bg-gray-100'} btn w-full flex items-center rounded p-2 hover:bg-gray-100`}
                onClick={(event: React.MouseEvent): void => {
                    return onClick(event, title);
                }}>
                <span className="capitalize">{title}</span>
            </Link>
        </li>
    );
};

export const Menu = ({ items, selectedItem, onSelectItem }: MenuProps): JSX.Element => {
    const navigate = useCallback((event, title: string) => {
        event.stopPropagation();

        const item = items.find((i) => {
            return i.title === title;
        });

        onSelectItem(item);
    }, [ selectedItem ]);

    return (
        <aside id="menu" className="z-40 w-56 h-full">
            <ul className="space-y-2">
                {items !== null && items.length !== 0 && items.map((item, index) => {
                    return (
                        <MenuItem key={index} title={item.title} onClick={navigate}/>
                    );
                })}
            </ul>
        </aside>
    );
};
