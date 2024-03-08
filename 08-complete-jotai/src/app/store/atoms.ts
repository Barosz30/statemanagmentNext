import { Cart, Review } from "@/api/types";
import { atom } from "jotai";


export const cartAtom = atom<Cart>({
    products: [],
});

export const reviewsAtom = atom<Review[] | null>(null);
