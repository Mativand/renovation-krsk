import React from 'react';
import {MiniCalculator} from "@/components/MiniCalculator";

export const Offer = () => {
    return (
        <section className={'w-full p-0 m-0 bg-gradient-to-r from-sky-500 to-indigo-500'}>
            <div className="container mx-auto flex justify-between">
                <div className="flex items-center">
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
