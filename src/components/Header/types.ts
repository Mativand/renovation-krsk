export interface IPageName {
    en: string
    ru: string
}

export interface IServiceItem {
    name: IPageName
    subserviceList: IPageName[]
}