import React from 'react';
import {pageList, serviceListDesk, serviceListMob} from "@/components/shared/data";
import {Link} from "@nextui-org/react";
import {FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";
import {Callback} from "@/components/Callback";
import {HoverDropdown} from "@/components/Header/HoverDropdown";
import {Call} from "@/components/features/Call/Call";
import {CalculateBtn} from "@/components/features/CalculateBtn/CalculateBtn";
import s from './styles.module.scss';
import {BurgerMenu} from "@/components/features/BurgerMenu/BurgerMenu";

export const Header = () => {

    return (
        <header className={s.header}>
            <div className={s.cont}>
                <div className={s.top}>
                    <div className={s.burger}>
                        <BurgerMenu/>
                    </div>
                    <Link href={'/'} className={s.logo}>REMONT</Link>
                    <nav className={s.menu}>
                        {pageList.map(item =>
                            <Link key={item.en} className={s.item} color="foreground" href={item.en}>
                                {item.ru}
                            </Link>
                        )}
                    </nav>
                    <div className={s.callback_cont}>
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
                    <nav className={s.menu_mob}>
                        {serviceListMob.map(item =>
                            <HoverDropdown key={item.name.en} item={item}/>
                        )}
                    </nav>
                    <nav className={s.menu_desk}>
                        {serviceListDesk.map(item =>
                            <HoverDropdown key={item.name.en} item={item}/>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};
