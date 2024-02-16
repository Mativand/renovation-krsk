import {Link} from "@nextui-org/react";
import {pageList, serviceListDesk, serviceListMob} from "@/shared/data";
import {FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";
import s from './styles.module.scss';
import {BurgerMenu} from "@/shared/ui/burgerMenu";
import {Call} from "@/shared/ui/call";
import {Callback} from "@/shared/ui/callback";
import {CalculateBtn} from "@/shared/ui/calculateBtn";
import {HoverDropdown} from "@/shared/ui/hoverDropdown";

export const Header = () => {

    return (
        <header className={s.header}>
            <div className="main-container">
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
