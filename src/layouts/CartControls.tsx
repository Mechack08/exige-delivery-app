import { Order } from "./OrderItems";

type CartControlsProps = {
  qty: Order["quantity"];
};

export default function CartControls({ qty }: CartControlsProps) {
  return (
    <span className="cart__controls">
      <button>-</button>
      <input type="text" defaultValue={qty} />
      <button>+</button>
    </span>
  );
}
