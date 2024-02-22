import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type OrderType, ordersDb } from "../fakeData";

interface OrderState {
  orders: OrderType[];
}

const initialState: OrderState = {
  orders: ordersDb,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    removeOrder: (state, action: PayloadAction<number>) => {
      const orderId = action.payload;
      state.orders = state.orders.filter((order) => order.id !== orderId);
    },
    incrementMenu: (state, action: PayloadAction<number>) => {
      const orderId = action.payload;
      const orderItem = state.orders.find((order) => order.id === orderId);

      orderItem!.quantity = orderItem!.quantity + 1;
    },
    decrementMenu: (state, action: PayloadAction<number>) => {
      const orderId = action.payload;
      const orderItem = state.orders.find((order) => order.id === orderId);

      orderItem!.quantity > 1
        ? (orderItem!.quantity = orderItem!.quantity - 1)
        : (state.orders = state.orders.filter((order) => order.id !== orderId));
    },
    removeSurplus: (
      state,
      action: PayloadAction<{ id: number; surplus: string }>
    ) => {
      const orderItem = state.orders.find(
        (order) => order.id === action.payload.id
      );

      orderItem!.surplus = orderItem!.surplus.filter(
        (item) => item !== action.payload.surplus
      );
    },
  },
});

export const { removeOrder, incrementMenu, decrementMenu, removeSurplus } =
  orderSlice.actions;

export default orderSlice.reducer;
