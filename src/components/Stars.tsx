import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function Stars() {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const LENGTH = 5;

  return (
    <div className="star__list">
      {Array.from({ length: LENGTH }, (_, i) => {
        const ratingValue = i + 1;

        return (
          <label
            key={i}
            className={`star ${
              ratingValue <= (hover || rating) ? "active" : ""
            }`}
          >
            <FaStar
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onChange={() => setRating(ratingValue)}
              style={{ display: "none" }}
            />
          </label>
        );
      })}
    </div>
  );
}
