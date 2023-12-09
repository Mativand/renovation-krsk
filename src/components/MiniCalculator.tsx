'use client'

import React, {useEffect, useRef, useState} from 'react';
import {Radio, RadioGroup, Slider} from "@nextui-org/react";
import {Policy} from "@/components/Policy";

type renovationType = {
    name: string,
    price: number
}

const renovationTypes: renovationType[] = [
    {name: 'Черновой', price: 2020},
    {name: 'Капитальный', price: 2500},
    {name: 'Косметический', price: 3000},
    {name: 'Элитный', price: 4399},
]

export const MiniCalculator = () => {

    const [type, setType] = useState<renovationType>({name: 'Черновой', price: 2020})
    const [price, setPrice] = useState<number>(0);
    const [meters, setMeters] = useState<number>(0);

    const slider = useRef<HTMLInputElement>(null);

    useEffect(() => handleChange(meters), [type]);

    const handleChange = (value: number | number []) => {
        value = value as number
        const newValue: number = value * type.price;
        setPrice(newValue);
        setMeters(value);
    };

    return (
        <div className="bg-black py-5 px-10 w-2/6 text-white">
            <p className="text-xl mb-5">
                Узнайте стоимость ремонта за 5 минут
            </p>
            <Slider
                label="Площадь помещения, м2"
                size="md"
                step={1}
                maxValue={1000}
                minValue={0}
                defaultValue={0}
                className="max-w-md mb-5"
                ref={slider}
                onChange={handleChange}
            />
            <RadioGroup className="mb-5" label="Тип ремонта" defaultValue={type.name}>
                <div className="grid gap-4 grid-cols-2">
                    {renovationTypes.map(type =>
                        <Radio key={type.name} value={type.name} onClick={() => setType(type)}>{type.name}</Radio>
                    )}
                </div>
            </RadioGroup>
            <div className="mb-5">
                <p>Стоимость ремонта</p>
                <div className="text-lg">{price} руб.</div>
            </div>
            <div className="flex items-center mb-2">
                <input type="text" className="w-2/3 p-2 rounded-l" placeholder="Ваш телефон"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Отправить</button>
            </div>
            <Policy label='Нажимая на кнопку, вы соглашаетесь с'/>
        </div>
    );
};
