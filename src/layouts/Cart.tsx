import CartFooter from "../components/CartFooter";
import CartHeader from "../components/CartHeader";
import OrderItems from "./OrderItems";

export default function Cart() {
  return (
    <div className="cart">
      <CartHeader />
      <OrderItems />
      <CartFooter />
    </div>
  );
}
