'use client'

import React, { useState, useRef, useEffect } from 'react';
import {IServiceItem} from "@/components/shared/types";
import {Link} from "@nextui-org/react";

interface DropdownProps {
    item: IServiceItem;
}

export const HoverDropdown: React.FC<DropdownProps> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState<'top' | 'bottom' | 'left' | 'right'>('bottom');
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleClickOutside = (event: Event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (dropdownRef.current) {
            const rect = dropdownRef.current.getBoundingClientRect();
            const windowWidth = window.innerWidth;

            if (rect.right + 50 > windowWidth && rect.left > 10) {
                setPosition('left');
            } else {
                setPosition('right');
            }
        }
    }, [isOpen]);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={dropdownRef}
        >
            <Link color={'foreground'} href={item.name.en}>
                {item.name.ru}
            </Link>
            {isOpen && (
                <div
                    className={`${
                        position === 'left' ? 'right-0' : position === 'right' ? 'left-0' : ''
                    } absolute w-48 bg-gray-800 rounded-sm z-10 pt-3`}
                >
                    <ul className={item.subserviceList.length > 6 ? 'grid grid-cols-2 gap-4' : ''}>
                        {item.subserviceList.map((_item, index) => (
                            <li key={index} className="py-2 px-4 cursor-pointer">
                                <Link color={'foreground'} className={'hover:text-gray-600'} href={_item.en}>
                                    {_item.ru}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

