import { Cart } from "@/api/types";
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export interface CartState {
    cart: Cart;
}

const initialState: CartState = {
    cart: {
        products: [],
    }
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<Cart>) => {
            state.cart = action.payload;
        },
    }
}); 

export const createStore = () =>
    configureStore({
        reducer: {
            cart: cartSlice.reducer,
        },
    });

export const { setCart } = cartSlice.actions;

export type StoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<StoreType["getState"]>;
export type AppDispatch = StoreType["dispatch"];

export const useCart = () => useSelector((state: RootState) => state.cart.cart);