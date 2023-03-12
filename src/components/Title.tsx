import React from 'react';

type TitleProps = {
    title: string;
}

export const Title = ({ title }: TitleProps): JSX.Element => {
    return <div className="mt-4">
        <span className="font-medium text-lg text-main capitalize">{title}</span>
    </div>;
};
