import React from 'react';
import {IoPhonePortraitOutline} from "react-icons/io5";
import {PHONE_NUMBER, SCHEDULE} from "@/components/shared/consts";
import s from './styles.module.scss';

export const Call = () => {
    return (
        <div className={s.cont}>
            <div className={s.phone_cont}>
                <div className={s.icon}>
                    <IoPhonePortraitOutline size="1.7em"/>
                </div>
                <span className={s.phone}>{PHONE_NUMBER}</span>
            </div>
            <p className={s.schedule}>{SCHEDULE}</p>
        </div>
    );
};
