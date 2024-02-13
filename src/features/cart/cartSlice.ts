import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const ordersDb = [
  {
    id: Math.random(),
    name: "Sushi",
    img: "./images/orders/sushi.jpg",
    price: 22.99,
    quantity: 1,
    surplus: ["salad", "ketchup", "chili", "extra chips"],
  },
  {
    id: Math.random(),
    name: "chips & roasted chicken",
    img: "./images/orders/chips.jpg",
    price: 19,
    quantity: 1,
    surplus: ["mayonaise", "ketchup", "chili", "greens"],
  },
  {
    id: Math.random(),
    name: "ice cream",
    img: "./images/orders/ice-cream.jpg",
    price: 3.79,
    quantity: 2,
    surplus: [],
  },
];

export interface Order {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  surplus: string[];
}

interface OrderState {
  orders: Order[];
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
  },
});

export const { removeOrder, incrementMenu, decrementMenu } = orderSlice.actions;

export default orderSlice.reducer;
