import { MdAccessTime, MdDirectionsBike } from "react-icons/md";
import { RestaurantType } from "../features/fakeData";
import DisplayStars from "./DisplayStars";

const MAXRATING = 5;

export default function CardRestaurant({
  name,
  estimatedTime,
  deliveryFee,
  img,
  rating,
}: RestaurantType) {
  /* get total rating */
  const tottalUsers = rating.length;
  const totalRating =
    rating.reduce((total, star) => total + star.rating, 0) / tottalUsers;
  console.log(Math.ceil(totalRating), totalRating, tottalUsers);

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
          <DisplayStars maxStars={MAXRATING} rating={totalRating} />
        </div>
      </div>
    </li>
  );
}
