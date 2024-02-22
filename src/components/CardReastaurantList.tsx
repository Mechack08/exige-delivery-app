import { restaurants } from "../features/fakeData";
import CardRestaurant from "./CardRestaurant";

export default function CardReastaurantList() {
  return (
    <ul className="card__rest-list">
      {restaurants.map((restaurant) => (
        <CardRestaurant key={restaurant.name} {...restaurant} />
      ))}
    </ul>
  );
}
