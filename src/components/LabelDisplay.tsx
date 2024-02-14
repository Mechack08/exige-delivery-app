import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { removeSurplus } from "../features/cart/cartSlice";

type LabelDisplayProps = {
  item: string;
  id: number;
};

export default function LabelDisplay({ item, id }: LabelDisplayProps) {
  const dispatch: AppDispatch = useDispatch();

  return (
    <li
      className="display__item"
      onClick={() => dispatch(removeSurplus({ id, surplus: item }))}
    >
      {item}
      <IoMdClose />
    </li>
  );
}
