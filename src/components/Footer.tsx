import {Button, Link} from "@nextui-org/react";
import React from "react";
import {Policy} from "@/components/Policy";
import {Call} from "@/components/features/Call";
import {Location} from "@/components/features/Location";
import {Agreement} from "@/components/features/Agreement";
import {ILink} from "@/components/shared/types";
import {pageList} from "@/components/shared/data";
import {CalculateBtn} from "@/components/features/CalculateBtn";
import {Callback} from "@/components/Callback";
import { PiPhoneIncomingThin } from "react-icons/pi";

const serviceList: ILink[] = [
    {en: 'remont-kvartir', ru: 'Ремонт квартир'},
    {en: 'dizajn-interera', ru: 'Дизайн интерьера'},
    {en: 'remont-komnat', ru: 'Ремонт комнат'},
    {en: 'remont-domov-i-kottedzhej', ru: 'Дома и коттеджи'},
    {en: 'prochie-uslugi', ru: 'Прочие услуги'},
]

const links: {title: string, list: ILink[]}[] = [
    {title: 'О компании', list: pageList},
    {title: 'Наши услуги', list: serviceList},
]

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <div className="flex justify-between space-x-10">
                    <div>
                        <Link href={'/'} className="font-bold text-inherit">REMONT</Link>
                        <Policy/>
                    </div>
                    <div className={'space-y-4'}>
                        <Call/>
                        <Location/>
                        <Agreement/>
                    </div>
                    {links.map(obj =>
                        <div key={obj.title}>
                            <p className={'mb-4'}>
                                {obj.title}
                            </p>
                            <nav className={'flex flex-col'}>
                                {obj.list.map(item =>
                                    <Link key={item.en} href={item.en} className={'text-inherit underline'}>
                                        {item.ru}
                                    </Link>
                                )}
                            </nav>
                        </div>
                    )}
                    <div className={'space-y-4'}>
                        <CalculateBtn label={'Калькулятор ремонта'}/>
                        <Callback>
                            <Button color="warning" variant="flat">
                                <PiPhoneIncomingThin size={'1.7em'}/>
                                Обратный звонок
                            </Button>
                        </Callback>
                    </div>
                </div>
            </div>
        </footer>
    );
};

