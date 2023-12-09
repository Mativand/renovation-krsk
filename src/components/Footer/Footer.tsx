import {Button, Link} from "@nextui-org/react";
import React from "react";
import {Policy} from "@/components/Policy";
import {Call} from "@/components/features/Call/Call";
import {Location} from "@/components/features/Location";
import {Agreement} from "@/components/features/Agreement";
import {ILink} from "@/components/shared/types";
import {pageList} from "@/components/shared/data";
import {CalculateBtn} from "@/components/features/CalculateBtn/CalculateBtn";
import {Callback} from "@/components/Callback";
import { PiPhoneIncomingThin } from "react-icons/pi";
import s from './styles.module.scss';

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
        <footer className={s.footer}>
            <div className={s.cont}>

                <div className={s.desk}>
                    <div>
                        <Link href={'/'} className={s.logo}>REMONT</Link>
                        <Policy/>
                    </div>
                    <div className={s.col2}>
                        <Call/>
                        <Location/>
                        <Agreement/>
                    </div>
                    {links.map(obj =>
                        <div key={obj.title}>
                            <p className={'mb-4'}>
                                {obj.title}
                            </p>
                            <nav className={s.menu}>
                                {obj.list.map(item =>
                                    <Link key={item.en} href={item.en} className={s.link}>
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

                <div className={s.mobile}>
                    <Link href={'/'} className={s.logo}>REMONT</Link>
                    <Policy/>
                    <div className={'w-1/2 space-y-8'}>
                        <Call/>
                        <Location/>
                        <Agreement/>
                    </div>
                    <CalculateBtn label={'Калькулятор ремонта'}/>
                    <Callback>
                        <Button color="warning" variant="flat">
                            <PiPhoneIncomingThin size={'1.7em'}/>
                            Обратный звонок
                        </Button>
                    </Callback>
                    <div className={'space-y-8'}>
                        {links.map(obj =>
                            <div key={obj.title}>
                                <p className={'mb-4'}>
                                    {obj.title}
                                </p>
                                <nav className={s.menu}>
                                    {obj.list.map(item =>
                                        <Link key={item.en} href={item.en} className={s.link}>
                                            {item.ru}
                                        </Link>
                                    )}
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

