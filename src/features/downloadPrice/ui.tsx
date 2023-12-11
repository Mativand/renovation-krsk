'use client'

import {FC, ReactNode, Children, cloneElement, ReactElement, MouseEvent} from 'react';

export const DownloadPrice: FC<{children: ReactNode}> = ({children}) => {

    const handleChildClick = (event: MouseEvent<HTMLElement>) => {
        event.stopPropagation();
    };


    const childrenWithOnClick = Children.map(children, (child) =>
        cloneElement(child as ReactElement, {
            onClick: handleChildClick,
        })
    );

    return (
        <>
            {childrenWithOnClick}
        </>
    );
};
