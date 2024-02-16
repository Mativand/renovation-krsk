import s from './styles.module.scss';
import {Button} from "@nextui-org/react";
import {FaFilePdf} from "react-icons/fa";
import {DownloadPrice} from "@/shared/ui/downloadPrice";
import {MiniCalculator} from "@/shared/ui/miniCalculator";

export const Offer = () => {
    return (
        <section className={s.wrapper}>
            <div className="main-container">
                <div className={s.cont}>
                    <div className={s.text_content}>
                        <div>
                            <h1 className="text-3xl">Качественный ремонт вашей квартиры</h1>
                            <h1 className="text-xl">от 2290 руб/м.2</h1>
                        </div>
                        <div>
                            <p className="text-2xl mb-2">точно в срок и с гарантией 2 года</p>
                            <ul className={'ml-8 list-disc'}>
                                <li>Дизайн-проект от 490 руб/м²</li>
                                <li>Бесплатная смета</li>
                                <li>Клининг в подарок!</li>
                            </ul>
                        </div>
                        <div>
                            <p className={'font-bold'}>Замерщик приедет уже сегодня! Выезд бесплатный</p>
                            <p>Быстро выставим бригаду на ремонт</p>
                        </div>
                        <div>
                            <DownloadPrice>
                                <Button color="warning" variant="flat">
                                    <FaFilePdf size="1.6em"/>
                                    <span>
                                    Скачайте прайст-лист <br/> и получите скидку
                                </span>
                                </Button>
                            </DownloadPrice>
                        </div>
                    </div>
                    <MiniCalculator/>
                </div>
            </div>
        </section>
    );
};
