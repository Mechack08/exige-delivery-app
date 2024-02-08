import { MdClose } from "react-icons/md";

export default function CartHeader() {
  return (
    <div className="cart__header">
      <span className="cart__header-title">My Order</span>
      <MdClose />
    </div>
  );
}
