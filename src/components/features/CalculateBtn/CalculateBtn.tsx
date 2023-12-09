import {FC} from 'react';
import {Button, Link} from "@nextui-org/react";
import { SlCalculator } from "react-icons/sl";
import s from './styles.module.scss';

export const CalculateBtn: FC<{label: string}> = ({label}) => {
    return (
        <Button className={s.btn} as={Link} color="warning" href="#" variant="flat">
            <SlCalculator size={'1.8em'}/>
            <span className={s.label}>{label}</span>
        </Button>
    );
};
