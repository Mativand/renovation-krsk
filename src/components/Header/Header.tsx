'use client'

import React, {useState} from 'react';
import {pageNames, serviceList} from "@/components/Header/data";
import {Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link} from "@nextui-org/react";
import {FaCalculator, FaInstagram, FaTelegram, FaWhatsapp} from "react-icons/fa";
import {Callback} from "@/components/Callback";

export const Header = () => {
    const phoneNumber: string = '+7(999)999-99-99';
    const schedule: string = 'с 9:00 до 21:00 без выходных';

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <p className="font-bold text-inherit">REMONT</p>
                    <nav className="space-x-4">
                        {pageNames.map(item =>
                            <Link key={item.en} className="hover:text-gray-300" color="foreground" href={item.en}>
                                {item.ru}
                            </Link>
                        )}
                    </nav>
                    <div>
                        <p>{phoneNumber}</p>
                        <p>{schedule}</p>
                        <Callback>
                            <u className={'cursor-pointer hover:text-gray-300'}>Заказать звонок</u>
                        </Callback>
                    </div>
                    <div>
                        <Button as={Link} color="warning" href="#" variant="flat">
                            <FaCalculator/>
                            Рассчитать стоимость
                        </Button>
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
                            <Dropdown
                                key={item.name.en}
                            >
                                <DropdownTrigger>
                                    <Link href='#' color={'foreground'}>{item.name.ru}</Link>
                                </DropdownTrigger>
                                <DropdownMenu aria-label='Dynamic Actions' items={item.subserviceList}>
                                    {(_item) => (
                                        <DropdownItem key={_item.en}>
                                            {_item.ru}
                                        </DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
};
