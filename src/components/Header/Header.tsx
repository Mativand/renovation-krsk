import React from 'react';
import {pageList, serviceList} from "@/components/shared/data";
import {Link} from "@nextui-org/react";
import {FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";
import {Callback} from "@/components/Callback";
import {HoverDropdown} from "@/components/Header/HoverDropdown";
import {Call} from "@/components/features/Call";
import {CalculateBtn} from "@/components/features/CalculateBtn";
import s from './Header.module.scss';

export const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.cont}>
                <div className={s.top}>
                    <Link href={'/'} className={s.logo}>REMONT</Link>
                    <nav className={s.menu}>
                        {pageList.map(item =>
                            <Link key={item.en} className={s.item} color="foreground" href={item.en}>
                                {item.ru}
                            </Link>
                        )}
                    </nav>
                    <div>
                        <Call/>
                        <Callback>
                            <span className={s.callback}>Заказать звонок</span>
                        </Callback>
                    </div>
                    <div>
                        <CalculateBtn label={'Рассчитать стоимость'}/>
                        <div className={s.social}>
                            <Link href={"#"} color={"foreground"}>
                                <FaWhatsapp size="1.5em"/>
                            </Link>
                            <Link href={"#"} color={"foreground"}>
                                <FaTelegram size="1.5em"/>
                            </Link>
                            <Link href={"#"} color={"foreground"}>
                                <FaInstagram size="1.5em"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={s.bottom}>
                    <nav className={s.menu}>
                        {serviceList.map(item =>
                            <HoverDropdown key={item.name.en} item={item}/>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};
