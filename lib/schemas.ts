import { z } from "zod";
export type UserType = {
    username:string
    email:string
}
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
export type ReservetionType = {
    table: number,
    booking_time:string,
    guests:number,
    id:number,
    user:{
        id:number,
        username:string,
        email:string
    }
}
export const ReservationFormSchema = z.object({
    booking_time: z.string(),
    guests: z.number().min(1),
    table: z.number().min(1),
})
export const signinSchema = z.object({
    username: z.string().min(3, 'username is too short'),
    password: z.string().min(8, "password is too short"),
});

export const registerSchema = z.object({
    username: z.string().min(3, 'username is too short'),
    email: z.string().email(),
    password: z.string().min(8, "password is too short"),
    re_password: z.string()
}).refine((data) => data.password === data.re_password, {
    message: "Password don't match",
    path: ["re_password"]
});
export type FavoriteType = {
    id:number,
    menu_item:MenuItemType
    user:UserType
}
export const userProfileSchema = z.object({
    username: z.string().min(3, 'username is too short'),
    email: z.string().email(),
})
export const passwordUpdateSchema = z.object({
    new_password: z.string().min(8, "password is too short"),
    re_new_password: z.string().min(8, "password is too short"),
    current_password: z.string().min(8, "password is too short"),
}).refine((data) => data.new_password === data.re_new_password, {
    message: "Password don't match",
    path: ["re_new_password"]   
})
