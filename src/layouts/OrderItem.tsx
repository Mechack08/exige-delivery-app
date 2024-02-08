import { Order } from "./OrderItems";
import Image from "../components/Image";
import LabelDisplay from "../components/LabelDisplay";
import CartControls from "./CartControls";

export default function OrderItem({
  id,
  name,
  img,
  price,
  quantity,
  surplus,
}: Order) {
  return (
    <div className="order__item">
      <div className="main__food">
        <Image img={img} alt={name} />
        <span className="title">{name}</span>
        <span className="price">${price}</span>
        <CartControls qty={quantity} />
        <span className="delete-btn" onClick={() => console.log(id)}>
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
