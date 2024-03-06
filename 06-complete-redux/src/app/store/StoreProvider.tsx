"use client"

import { Cart } from "@/api/types";
import { Provider } from "react-redux";
import { createStore, setCart } from "./store";
import { useRef } from "react";

export default function StoreProvider({
    cart,
    children,
}: {
    cart: Cart;
    children: React.ReactNode;
}) {
    const storeRef = useRef<ReturnType<typeof createStore> | null>(null);
    if (!storeRef.current) {
        storeRef.current = createStore();
        storeRef.current.dispatch(setCart(cart))
    }
    
    
    return <Provider store={storeRef.current}>{children}</Provider>
}