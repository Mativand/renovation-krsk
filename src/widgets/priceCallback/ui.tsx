import s from "./styles.module.scss";
import {Button, Image, Link} from "@nextui-org/react";
import {BlockTitle} from "@/shared/components/blockTitle";
import {Input} from "@nextui-org/input";
import {Policy} from "@/features/policy";
import { CiDiscount1 } from "react-icons/ci";

const title: string = 'Получите подробную смету и точную стоимость ремонта'

export const PriceCallback = () => {
    return (
        <section className={s.wrapper}>
            <div className="main-container">
                <div className="mb-10">
                    <BlockTitle text={title}/>
                </div>
                <div className="sm:flex">
                    <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between mb-8">
                        <Image
                            className="mb-2"
                            width={300}
                            alt="Фотография инженера"
                            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                        />
                        <div className="sm:ml-4 sm:w-1/3">
                            <div className="text-center mb-4 sm:text-left">
                                <p className="text-2xl">
                                    <b>Дед Анатолий</b>
                                </p>
                                <p className="text-xl">
                                    Ведущий инженер
                                </p>
                            </div>
                            <Link href="#" className="hidden sm:block sm:mb-4">59 реализованных проектов</Link>
                            <p className="hidden sm:block">
                                Ведущий инженер сметчик, бесплатно проконсультирует и проведет точные замеры для расчёта
                                строительных услуг
                            </p>
                        </div>
                        <div className="sm:w-1/3 flex flex-col gap-y-3 items-center sm:items-start sm:ml-4">
                            <Input type="text" label="Как вас зовут?" size="sm"/>
                            <Input type="tel" label="Ваш телефон" size="sm"/>
                            <div className="mt-4 mb-4">
                                <Button color="warning">
                                    <CiDiscount1 size="2em"/>
                                    Отправить
                                </Button>
                            </div>
                            <Policy label='Нажимая на кнопку, вы соглашаетесь с'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
