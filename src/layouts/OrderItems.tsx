import OrderItem from "./OrderItem";
import { useSelectorCustom } from "../store/hooks";

export default function OrderItems() {
  const { orders } = useSelectorCustom((state) => state.orders);

  return (
    <div className="order_items">
      {orders.map((order) => (
        <OrderItem key={order.id} {...order} />
      ))}
    </div>
  );
}
