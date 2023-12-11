import React from 'react';
import { CiLocationOn } from "react-icons/ci";

export const Location = () => {
    return (
        <div className={'relative'}>
            <div className={'absolute text-yellow-300 -top-2 -left-8'}>
                <CiLocationOn size={'1.9em'}/>
            </div>
            <p className={'text-sm'}>
                109428 г. Москва,
                Рязанский проспект, дом 10, строение 18, офис 8.3/806
            </p>
        </div>
    );
};
