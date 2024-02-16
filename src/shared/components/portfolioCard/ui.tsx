'use client'

import {FC} from 'react';
import s from './styles.module.scss';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {BsArrowsFullscreen} from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { PiCoinsThin } from "react-icons/pi";

interface Props {
    title: string;
    area: string;
    rooms: string;
    time: string;
    price: string;
    img: string;
}

    export const PortfolioCard: FC<Props> = ({title, area, rooms, time, price, img}) => {
        return (
            <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={title}
                        className="w-full object-cover h-[200px] sm:h-[370px]"
                        src={img}
                    />
                </CardBody>
                <CardFooter className="flex-col">
                    <div className="mb-4 text-lg">
                        <h3>{title}</h3>
                    </div>
                    <div className="w-full grid grid-cols-2 gap-y-3 sm:grid-cols-4">
                        <div className={s.itemInfo}>
                            <BsArrowsFullscreen size="1.5em"/>
                            <p>{area} м²</p>
                        </div>
                        <div className={s.itemInfo}>
                            <IoBedOutline size="2em"/>
                            <p>{rooms}</p>
                        </div>
                        <div className={s.itemInfo}>
                            <CiClock1 size="2em"/>
                            <p>{time}</p>
                        </div>
                        <div className={s.itemInfo}>
                            <PiCoinsThin size="2em"/>
                            <p>{price}</p>
                        </div>
                    </div>
                </CardFooter>
            </Card>
        );
    };
