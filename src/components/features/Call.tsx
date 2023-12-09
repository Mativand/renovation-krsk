import React from 'react';
import {IoPhonePortraitOutline} from "react-icons/io5";
import {PHONE_NUMBER, SCHEDULE} from "@/components/shared/consts";

export const Call = () => {
    return (
        <div>
            <div className={'relative'}>
                <div className={'absolute text-yellow-300 top-0 -left-8'}>
                    <IoPhonePortraitOutline size="1.7em"/>
                </div>
                <span className={'text-xl'}>{PHONE_NUMBER}</span>
            </div>
            <p className={'text-xs text-gray-300'}>{SCHEDULE}</p>
        </div>
    );
};
