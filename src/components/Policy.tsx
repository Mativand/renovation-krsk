import React from 'react';
import {Link} from "@nextui-org/react";

export const Policy = () => {
    return (
        <p className="text-xs">
            <div>Нажимая на кнопку, вы соглашаетесь с</div>
            <Link href={'#'} className={'cursor-pointer hover:text-gray-300 text-xs underline'}>политикой конфиденциальности</Link>
        </p>
    );
};
