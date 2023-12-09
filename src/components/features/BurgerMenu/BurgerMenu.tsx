'use client'

import React, { useState } from 'react';
import {IoMdClose} from "react-icons/io";
import {CiMenuBurger} from "react-icons/ci";
import {pageList} from "@/components/shared/data";
import s from "./styles.module.scss";
import {Link} from "@nextui-org/react";

export const BurgerMenu = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <button className={s.openBtn} onClick={toggleSidebar}>
                <CiMenuBurger size="2em"/>
            </button>

            <div className={`${s.sidebar} ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className={s.header}>
                    <p className={s.title}>Меню</p>
                    <span onClick={toggleSidebar}>
                        <IoMdClose size="2em"/>
                    </span>
                </div>
                <ul>
                    {pageList.map(item =>
                        <li key={item.en} className="py-2">
                            <Link key={item.en} className={s.item} color="foreground" href={item.en}>
                                {item.ru}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

