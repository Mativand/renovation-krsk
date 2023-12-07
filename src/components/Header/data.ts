import {IPageName, IServiceItem} from "@/components/Header/types";

export const pageNames: IPageName[] = [
    {en: 'portfolio', ru: 'Наши работы'},
    {en: 'reviews', ru: 'Отзывы'},
    {en: 'about', ru: 'О нас'},
    {en: 'vacancies', ru: 'Вакансии'},
    {en: 'articles', ru: 'Статьи'},
    {en: 'contacts', ru: 'Контакты'},
]

export const serviceList: IServiceItem[] = [
    {
        name: {en: 'remont-kvartir', ru: 'Ремонт квартир'},
        subserviceList: [
            {en: 'remont-v-novostroykax', ru: 'Новостройки'},
            {en: 'kapitalniy-remont-kvartir', ru: 'Капитальный ремонт'},
            {en: 'kosmeticheskiy-remont-kvartir', ru: 'Косметический'},
        ]
    },
    {
        name: {en: 'dizajn-interera', ru: 'Дизайн интерьера'},
        subserviceList: [
            {en: 'skandinavskij-stil-interer', ru: 'Скандинавский стиль'},
            {en: 'stil-haj-tek-interer', ru: 'Стиль хай-тек'},
            {en: 'kosmeticheskiy-remont-kvartir', ru: 'Косметический'},
        ]
    },
    {
        name: {en: 'remont-komnat', ru: 'Ремонт комнат'},
        subserviceList: [
            {en: 'remont-v-novostroykax', ru: 'Новостройки'},
            {en: 'kapitalniy-remont-kvartir', ru: 'Капитальный ремонт'},
            {en: 'kosmeticheskiy-remont-kvartir', ru: 'Косметический'},
        ]
    },
    {
        name: {en: 'remont-domov-i-kottedzhej', ru: 'Дома и коттеджи'},
        subserviceList: [
            {en: 'remont-v-novostroykax', ru: 'Новостройки'},
            {en: 'kapitalniy-remont-kvartir', ru: 'Капитальный ремонт'},
            {en: 'kosmeticheskiy-remont-kvartir', ru: 'Косметический'},
        ]
    },
    {
        name: {en: 'prochie-uslugi', ru: 'Прочие услуги'},
        subserviceList: [
            {en: 'remont-v-novostroykax', ru: 'Новостройки'},
            {en: 'kapitalniy-remont-kvartir', ru: 'Капитальный ремонт'},
            {en: 'kosmeticheskiy-remont-kvartir', ru: 'Косметический'},
        ]
    },
    {
        name: {en: 'more', ru: 'Ещё'},
        subserviceList: [
            {en: 'remont-v-novostroykax', ru: 'Новостройки'},
            {en: 'kapitalniy-remont-kvartir', ru: 'Капитальный ремонт'},
            {en: 'kosmeticheskiy-remont-kvartir', ru: 'Косметический'},
        ]
    }
]