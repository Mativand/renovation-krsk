import {FC} from 'react';
import {Link} from "@nextui-org/react";

export const Policy: FC<{label?: string}> = ({label}) => {
    return (
        <div className="text-xs">
            {label && <div>{label}</div>}
            <Link href={'#'} className={'text-inherit cursor-pointer hover:text-gray-300 text-xs underline'}>{`политик${label ? 'ой' : 'а'}`} конфиденциальности</Link>
        </div>
    );
};
