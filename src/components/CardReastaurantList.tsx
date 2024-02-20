import CardRestaurant from "./CardRestaurant";

export interface RestaurantType {
  name: string;
  estimatedTime: string;
  deliveryFee: number | "FREE";
  img: string;
}

const restaurants: Array<RestaurantType> = [
  {
    name: "KFC",
    estimatedTime: "18 - 25 min",
    deliveryFee: "FREE",
    img: "./images/orders/kfc-1.jpg",
  },
  {
    name: "CJ's",
    estimatedTime: "20 - 28 min",
    deliveryFee: 2.4,
    img: "./images/orders/pizza-2.jpg",
  },
  {
    name: "Chicken Tonight",
    estimatedTime: "14 - 26 min",
    deliveryFee: 2.2,
    img: "./images/orders/chicken.jpg",
  },
  {
    name: "Café Java",
    estimatedTime: "16 - 26 min",
    deliveryFee: "FREE",
    img: "./images/orders/drink-2.jpg",
  },
  {
    name: "Chicken Inn",
    estimatedTime: "20 - 27 min",
    deliveryFee: 1.99,
    img: "./images/orders/pizza-1.jpg",
  },
  {
    name: "Naivas",
    estimatedTime: "19 - 24 min",
    deliveryFee: 1.25,
    img: "./images/orders/ice-cream.jpg",
  },
  {
    name: "Carrefour",
    estimatedTime: "20 - 27 min",
    deliveryFee: 1.87,
    img: "./images/orders/drink-1.jpg",
  },
  {
    name: "Nigerian's",
    estimatedTime: "22 - 35 min",
    deliveryFee: 2,
    img: "./images/orders/chips.jpg",
  },
];

export default function CardReastaurantList() {
  return (
    <ul className="card__rest-list">
      {restaurants.map((restaurant) => (
        <CardRestaurant key={restaurant.name} {...restaurant} />
      ))}
    </ul>
  );
}
