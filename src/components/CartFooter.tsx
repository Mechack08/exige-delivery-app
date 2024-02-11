import { GoArrowRight } from "react-icons/go";

import Button from "./Button";

type CartFooterDescProps = {
  label: string;
  price: number;
};

export default function CartFooter() {
  return (
    <div className="cart__footer">
      <div className="cart__footer-description">
        <div className="cart__footer-details">
          <CartFooterDesc label="Sub Total" price={76.15} />
          <CartFooterDesc label="Delivery Fees" price={4.33} />
          <CartFooterDesc label="Function Fees" price={0.62} />
        </div>
        <div className="cart__footer-details total">
          <CartFooterDesc label="Total" price={81.1} />
        </div>
      </div>
      <div className="cart__footer-btn">
        <Button radius="Rounded">
          Order and checkout ($81.10) <GoArrowRight />
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
