export interface ILink {
    en: string
    ru: string
}

export interface IServiceItem {
    name: ILink
    subserviceList: ILink[]
}