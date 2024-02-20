import { MdAccessTime, MdDirectionsBike } from "react-icons/md";
import Stars from "./Stars";
import { RestaurantType } from "./CardReastaurantList";

export default function CardRestaurant({
  name,
  estimatedTime,
  deliveryFee,
  img,
}: RestaurantType) {
  return (
    <li className="card__restaurant">
      <div className="img__container">
        <img src={img} alt={name} />
      </div>
      <div className="content">
        <div className="content__header"></div>
        <div className="content__details">
          <span className="content__details-name">{name}</span>
          <p className="content__details-time">
            <MdAccessTime />
            <span>{estimatedTime}</span>
          </p>
          <p className="content__details-delivery free">
            <MdDirectionsBike />
            <span>{deliveryFee}</span>
          </p>
          <Stars />
        </div>
      </div>
    </li>
  );
}
