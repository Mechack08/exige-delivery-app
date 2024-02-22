import { FaStar } from "react-icons/fa";
import { useState } from "react";

type StarsProps = { maxStar: number };

export default function Stars({ maxStar }: StarsProps) {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const LENGTH = maxStar;

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
              value={rating}
              onChange={() => setRating(ratingValue)}
              style={{ display: "none" }}
            />
          </label>
        );
      })}
    </div>
  );
}
