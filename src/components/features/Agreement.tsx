import React from 'react';
import { LiaFileContractSolid } from "react-icons/lia";
import {Link} from "@nextui-org/react";

export const Agreement = () => {
    return (
        <div className={'relative'}>
            <div className={'absolute text-yellow-300 -top-1 -left-8'}>
                <LiaFileContractSolid size={'1.8em'}/>
            </div>
            <Link href={'#'} className={'text-sm underline text-inherit'}>
                Скачать договор
            </Link>
            <p className={'text-gray-300 text-sm'}>
                ООО "Remont"
            </p>
            <p className={'text-gray-300 text-sm'}>
                ИНН 999999999
            </p>
        </div>
    );
};
