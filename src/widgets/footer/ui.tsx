import {Button, Link} from "@nextui-org/react";
import { PiPhoneIncomingThin } from "react-icons/pi";
import {links} from "@/widgets/footer/data";
import s from './styles.module.scss';
import {Policy} from "@/shared/ui/policy";
import {Call} from "@/shared/ui/call";
import {Agreement} from "@/shared/ui/agreement/ui";
import {CalculateBtn} from "@/shared/ui/calculateBtn";
import {Callback} from "@/shared/ui/callback";
import {Location} from "@/shared/ui/location";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="main-container">

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

