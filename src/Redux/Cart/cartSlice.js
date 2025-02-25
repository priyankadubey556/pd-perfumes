import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    totalItemsPrice: 0,
    totalItems: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            let item_exists = state.cartItems.find((item) => item.id = action.payload.id);
            state.cartItems = [...state.cartItems, action.payload];
            state.totalItems = ++state.totalItems;
            state.totalQuantity = ++state.totalQuantity;
            state.totalItemsPrice = state.totalItemsPrice + action.payload.price;

            if (!item_exists) {
                state.totalItems = ++state.totalItems
            }
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(getProducts.pending, (state, action) => {
    //             state.status = 'loading...';
    //         })
    //         .addCase(getProducts.fulfilled, (state, action) => {
    //             state.status = 'Success';
    //             state.products = action.payload;
    //         })
    //         .addCase(getProducts.rejected, (state, action) => {
    //             state.status = 'Failed';
    //             state.error = action.error.message;
    //         })
    // }
})

export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;