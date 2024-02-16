import s from "./styles.module.scss";
import {Button, Link} from "@nextui-org/react";
import {ICard} from "@/widgets/portfolio";
import {BlockTitle} from "@/shared/ui/blockTitle";
import {PortfolioCard} from "@/shared/ui/portfolioCard";

const title: string = 'Наши объекты за 2023 год Гарантия на работы 2 года'

const items: ICard[] = [
    {
        img: 'kitchen.jpg',
        title: 'Ремонт однакомнотной квартиры',
        area: '65',
        rooms: '2',
        time: '4 месяца',
        price: '690 000 руб.'
    },
    {
        img: 'kitchen.jpg',
        title: 'Ремонт однакомнотной квартиры',
        area: '65',
        rooms: '2',
        time: '4 месяца',
        price: '690 000 руб.'
    },
    {
        img: 'kitchen.jpg',
        title: 'Ремонт однакомнотной квартиры',
        area: '65',
        rooms: '2',
        time: '4 месяца',
        price: '690 000 руб.'
    },
    {
        img: 'kitchen.jpg',
        title: 'Ремонт однакомнотной квартиры',
        area: '65',
        rooms: '2',
        time: '4 месяца',
        price: '690 000 руб.'
    },
    {
        img: 'kitchen.jpg',
        title: 'Ремонт однакомнотной квартиры',
        area: '65',
        rooms: '2',
        time: '4 месяца',
        price: '690 000 руб.'
    },
];

export const Portfolio = () => {
    return (
        <section className={s.wrapper}>
            <div className="main-container">
                <div className="flex justify-between mb-10">
                    <BlockTitle text={title}/>
                    <Link href={'#'} className="hidden sm:block underline text-xl">Смотреть все работы</Link>
                </div>
                <ul className="sm:grid sm:grid-cols-2">
                    {items.map((item, index) =>
                        <div key={index} className="mb-8 sm:flex sm:justify-center">
                            <PortfolioCard
                                title={item.title}
                                area={item.area}
                                rooms={item.rooms}
                                time={item.time}
                                price={item.price}
                                img={item.img}
                            />
                        </div>
                    )}
                </ul>
                <div className="text-center">
                    <Button color="warning">Смотреть все работы</Button>
                </div>
            </div>
        </section>
    );
}
