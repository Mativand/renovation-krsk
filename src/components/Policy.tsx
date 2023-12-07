import React from 'react';
import {Link} from "@nextui-org/react";

export const Policy = () => {
    return (
        <p className="text-sm">
            Нажимая на кнопку, вы соглашаетесь с
            <Link size="sm" href={'#'} className={'cursor-pointer hover:text-gray-300'}>политикой конфиденциальности</Link>
        </p>
    );
};
