import { GoArrowRight } from "react-icons/go";

import Button from "./Button";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type CartFooterDescProps = {
  label: string;
  price: number;
};

export default function CartFooter() {
  const orders = useSelector((state: RootState) => state.orders.orders);

  const total = orders.reduce(
    (total, order) => total + order.quantity * order.price,
    0
  );

  const delivery = 2.99;
  const funcFees = 0.62;

  const genTotal = total + delivery + funcFees;

  return (
    <div className="cart__footer">
      <div className="cart__footer-description">
        <div className="cart__footer-details small__size">
          <CartFooterDesc label="Sub Total" price={total} />
          <CartFooterDesc label="Delivery Fees" price={delivery} />
          <CartFooterDesc label="Function Fees" price={funcFees} />
        </div>
        <div className="cart__footer-details total">
          <CartFooterDesc label="Total" price={genTotal} />
        </div>
      </div>
      <div className="cart__footer-btn">
        <Button radius="Rounded">
          Order and checkout (${genTotal.toFixed(2)}) <GoArrowRight />
        </Button>
      </div>
    </div>
  );
}

function CartFooterDesc({ label, price }: CartFooterDescProps) {
  return (
    <p className="cart__footer-desc">
      <span className="descript">{label}</span>
      <span className="price">${price.toFixed(2)}</span>
    </p>
  );
}
