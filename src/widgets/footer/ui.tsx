import {Button, Link} from "@nextui-org/react";
import { PiPhoneIncomingThin } from "react-icons/pi";
import {Policy} from "@/features/policy";
import {Call} from "@/features/call";
import {Agreement} from "@/features/agreement/ui";
import {links} from "@/widgets/footer/data";
import {CalculateBtn} from "@/features/calculateBtn";
import {Callback} from "@/features/callback";
import {Location} from "@/features/location";
import s from './styles.module.scss';

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

