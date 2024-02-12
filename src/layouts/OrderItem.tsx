import Image from "../components/Image";
import LabelDisplay from "../components/LabelDisplay";
import CartControls from "./CartControls";
import { useDispatch } from "react-redux";
import { type Order, removeOrder } from "../features/cart/cartSlice";

export default function OrderItem({
  id,
  name,
  img,
  price,
  quantity,
  surplus,
}: Order) {
  const dispatch = useDispatch();

  function handleRemoveOrder(id: number): void {
    dispatch(removeOrder(id));
  }

  return (
    <div className="order__item">
      <div className="main__food">
        <Image img={img} alt={name} />
        <span className="title">{name}</span>
        <span className="price">${price.toFixed(2)}</span>
        <CartControls qty={quantity} />
        <span className="delete-btn" onClick={() => handleRemoveOrder(id)}>
          Remove
        </span>
      </div>
      {surplus.length > 0 && (
        <div className="go__with">
          <span className="desc">Come with:</span>
          <ul>
            {surplus.map((item) => (
              <LabelDisplay key={item}>{item}</LabelDisplay>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
