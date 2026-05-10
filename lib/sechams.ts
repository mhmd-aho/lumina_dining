

export type CategoryType ={
    name:string
    id:number
}
export type MenuItemType ={
    id:number
    name:string
    price:number
    description:string
    image:string
    category: CategoryType
}