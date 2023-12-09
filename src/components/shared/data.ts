import {ILink, IServiceItem} from "@/components/shared/types";

export const pageList: ILink[] = [
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
            { en: 'apple', ru: 'яблоко' },
            { en: 'banana', ru: 'банан' },
            { en: 'car', ru: 'машина' },
            { en: 'dog', ru: 'собака' },
            { en: 'elephant', ru: 'слон' },
            { en: 'flower', ru: 'цветок' },
            { en: 'guitar', ru: 'гитара' },
            { en: 'house', ru: 'дом' },
            { en: 'ice cream', ru: 'мороженое' },
            { en: 'jazz', ru: 'джаз' },
            { en: 'kite', ru: 'воздушный змей' },
            { en: 'lion', ru: 'лев' },
            { en: 'moon', ru: 'луна' },
            { en: 'notebook', ru: 'ноутбук' },
            { en: 'orange', ru: 'апельсин' },
            { en: 'piano', ru: 'пианино' },
            { en: 'queen', ru: 'королева' },
            { en: 'rose', ru: 'роза' },
            { en: 'sun', ru: 'солнце' },
            { en: 'tree', ru: 'дерево' },
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