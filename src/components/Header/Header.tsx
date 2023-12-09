import React from 'react';
import {pageList, serviceList} from "@/components/shared/data";
import {Button, Link} from "@nextui-org/react";
import {FaCalculator, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";
import {Callback} from "@/components/Callback";
import {HoverDropdown} from "@/components/Header/HoverDropdown";
import {Call} from "@/components/features/Call";
import {CalculateBtn} from "@/components/features/CalculateBtn";

export const Header = () => {

    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link href={'/'} className="font-bold text-inherit">REMONT</Link>
                    <nav className="space-x-4">
                        {pageList.map(item =>
                            <Link key={item.en} className="hover:text-gray-300" color="foreground" href={item.en}>
                                {item.ru}
                            </Link>
                        )}
                    </nav>
                    <div>
                        <Call/>
                        <Callback>
                            <u className={'text-sm cursor-pointer hover:text-gray-200'}>Заказать звонок</u>
                        </Callback>
                    </div>
                    <div>
                        <CalculateBtn label={'Рассчитать стоимость'}/>
                        <div className="flex items-center mt-4 space-x-3">
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
                <div className="mt-4">
                    <nav className="flex justify-between">
                        {serviceList.map(item =>
                            <HoverDropdown key={item.name.en} item={item}/>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};
