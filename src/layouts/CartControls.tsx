import { useDispatch } from "react-redux";
import {
  Order,
  decrementMenu,
  incrementMenu,
} from "../features/cart/cartSlice";
import { useEffect, useState } from "react";

type CartControlsProps = {
  id: Order["id"];
  qty: Order["quantity"];
};

export default function CartControls({ id, qty }: CartControlsProps) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(qty);
  }, [qty]);

  return (
    <span className="cart__controls">
      <button onClick={() => dispatch(decrementMenu(id))}>-</button>
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(+e.target.value)}
      />
      <button onClick={() => dispatch(incrementMenu(id))}>+</button>
    </span>
  );
}
