import React from 'react';
import {MiniCalculator} from "@/components/MiniCalculator";
import s from './styles.module.scss';

export const Offer = () => {
    return (
        <section className={s.wrapper}>
            <div className={s.cont}>
                <div className={s.text_content}>
                    <div>
                        <h1 className="text-3xl">Качественный ремонт вашей квартиры</h1>
                        <h1 className="text-xl">от 2290 руб/м.2</h1>
                    </div>
                </div>
                <MiniCalculator/>
            </div>
        </section>
    );
};
