import { FaStar } from "react-icons/fa";

type DisplayStarsProps = {
  rating: number;
  maxStars: number;
};

export default function DisplayStars({ rating, maxStars }: DisplayStarsProps) {
  return (
    <div className="star__list">
      {Array.from({ length: maxStars }, (_, index) => {
        const currentRating = index + 1;

        return (
          <span
            className={`star ${currentRating <= rating && "active"}`}
            key={currentRating}
          >
            <FaStar />
          </span>
        );
      })}
    </div>
  );
}
