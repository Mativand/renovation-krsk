import {ILink} from "@/shared/types";
import {pageList} from "@/shared/data";

export const serviceList: ILink[] = [
    {en: 'remont-kvartir', ru: 'Ремонт квартир'},
    {en: 'dizajn-interera', ru: 'Дизайн интерьера'},
    {en: 'remont-komnat', ru: 'Ремонт комнат'},
    {en: 'remont-domov-i-kottedzhej', ru: 'Дома и коттеджи'},
    {en: 'prochie-uslugi', ru: 'Прочие услуги'},
]

export const links: {title: string, list: ILink[]}[] = [
    {title: 'О компании', list: pageList},
    {title: 'Наши услуги', list: serviceList},
]