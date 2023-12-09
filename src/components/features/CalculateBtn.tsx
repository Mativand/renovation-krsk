import {FC} from 'react';
import {Button, Link} from "@nextui-org/react";
import { SlCalculator } from "react-icons/sl";

export const CalculateBtn: FC<{label: string}> = ({label}) => {
    return (
        <Button as={Link} color="warning" href="#" variant="flat">
            <SlCalculator size={'1.8em'}/>
            {label}
        </Button>
    );
};
