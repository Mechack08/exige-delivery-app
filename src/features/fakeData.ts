export const ordersDb = [
  {
    id: Math.random(),
    name: "Sushi",
    img: "./images/orders/sushi.jpg",
    price: 22.99,
    quantity: 1,
    surplus: ["salad", "ketchup", "chili", "extra chips"],
  },
  {
    id: Math.random(),
    name: "chips & roasted chicken",
    img: "./images/orders/chips.jpg",
    price: 19,
    quantity: 1,
    surplus: ["mayonaise", "ketchup", "chili", "greens"],
  },
  {
    id: Math.random(),
    name: "ice cream",
    img: "./images/orders/ice-cream.jpg",
    price: 3.79,
    quantity: 2,
    surplus: [],
  },
];

// interface RatingType {
//     userId: number;
//     rating: number;
//     thought: string;
//     description?: string;
//   }

//   export interface RestaurantType {
//     name: string;
//     estimatedTime: string;
//     deliveryFee: number | "FREE";
//     img: string;
//     rating: RatingType[];
//   }

export const restaurants = [
  {
    name: "KFC",
    estimatedTime: "18 - 25 min",
    deliveryFee: "FREE",
    img: "./images/orders/kfc-1.jpg",
    rating: [
      {
        userId: 1,
        rating: 5,
        thought: "I kinda like it.",
        description: "Good at first but after few days it's no longer fast!",
      },
      {
        userId: 5,
        rating: 5,
        thought: "I like it.",
        description: "Restaurant delivery service is nice.",
      },
      { userId: 1, rating: 5, thought: "I realy like it." },
    ],
  },
  {
    name: "CJ's",
    estimatedTime: "20 - 28 min",
    deliveryFee: 2.4,
    img: "./images/orders/pizza-2.jpg",
    rating: [
      {
        userId: 2,
        rating: 5,
        thought: "I like it.",
        description: "Good customer care.",
      },
      { userId: 1, rating: 4, thought: "I like it." },
      { userId: 6, rating: 3, thought: "I realy like it." },
    ],
  },
  {
    name: "Chicken Tonight",
    estimatedTime: "14 - 26 min",
    deliveryFee: 2.2,
    img: "./images/orders/chicken.jpg",
    rating: [
      {
        userId: 3,
        rating: 4,
        thought: "I really like it.",
        description: "Fast delivery service.",
      },
      {
        userId: 11,
        rating: 5,
        thought: "I love it.",
        description: "Restaurant delivery service is nice.",
      },
      {
        userId: 7,
        rating: 2,
        thought: "I realy don't like it.",
        description: "I orderd but got my food after 2 hours",
      },
    ],
  },
  {
    name: "Café Java",
    estimatedTime: "16 - 26 min",
    deliveryFee: "FREE",
    img: "./images/orders/drink-2.jpg",
    rating: [
      {
        userId: 1,
        rating: 3,
        thought: "I kinda like it.",
        description: "Good at first but after few days it's no longer fast!",
      },
      {
        userId: 5,
        rating: 4,
        thought: "I like it.",
        description: "Restaurant delivery service is nice.",
      },
      { userId: 1, rating: 3, thought: "I realy like it." },
    ],
  },
  {
    name: "Chicken Inn",
    estimatedTime: "20 - 27 min",
    deliveryFee: 1.99,
    img: "./images/orders/pizza-1.jpg",
    rating: [
      {
        userId: 1,
        rating: 3,
        thought: "I kinda like it.",
        description: "Good at first but after few days it's no longer fast!",
      },
      {
        userId: 5,
        rating: 4,
        thought: "I like it.",
        description: "Restaurant delivery service is nice.",
      },
      { userId: 1, rating: 3, thought: "I realy like it." },
    ],
  },
  {
    name: "Naivas",
    estimatedTime: "19 - 24 min",
    deliveryFee: 1.25,
    img: "./images/orders/ice-cream.jpg",
    rating: [
      {
        userId: 2,
        rating: 5,
        thought: "I like it.",
        description: "Good customer care.",
      },
      { userId: 1, rating: 4, thought: "I like it." },
      { userId: 6, rating: 3, thought: "I realy like it." },
    ],
  },
  {
    name: "Carrefour",
    estimatedTime: "20 - 27 min",
    deliveryFee: 1.87,
    img: "./images/orders/drink-1.jpg",
    rating: [
      {
        userId: 1,
        rating: 3,
        thought: "I kinda like it.",
        description: "Good at first but after few days it's no longer fast!",
      },
      {
        userId: 5,
        rating: 4,
        thought: "I like it.",
        description: "Restaurant delivery service is nice.",
      },
      { userId: 1, rating: 3, thought: "I realy like it." },
    ],
  },
  {
    name: "Nigerian's",
    estimatedTime: "22 - 35 min",
    deliveryFee: 2,
    img: "./images/orders/chips.jpg",
    rating: [
      {
        userId: 3,
        rating: 4,
        thought: "I really like it.",
        description: "Fast delivery service.",
      },
      {
        userId: 11,
        rating: 5,
        thought: "I love it.",
        description: "Restaurant delivery service is nice.",
      },
      {
        userId: 7,
        rating: 1,
        thought: "I realy don't like it.",
        description: "I orderd but got my food after 2 hours",
      },
      {
        userId: 13,
        rating: 1,
        thought: "I realy don't like it.",
        description: "I orderd but got my food after 2 hours",
      },
    ],
  },
];

export type OrderType = (typeof ordersDb)[0];
export type RestaurantType = (typeof restaurants)[0];
