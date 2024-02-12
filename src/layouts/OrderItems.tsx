import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function OrderItems() {
  const orders = useSelector((state: RootState) => state.orders.orders);

  return (
    <div className="order_items">
      {orders.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </div>
  );
}
