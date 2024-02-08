import OrderItem from "./OrderItem";

export interface Order {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  surplus: string[];
}

type Orders = Order[];

const orders: Orders = [
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

export default function OrderItems() {
  return (
    <div className="order_items">
      {orders.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </div>
  );
}
