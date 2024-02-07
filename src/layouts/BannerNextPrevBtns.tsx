import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

import Button from "../components/Button";

export default function BannerNextPrevBtns() {
  return (
    <span className="absolute-pos pos-parent flex-16">
      <Button small disabled btn="Tertiary">
        <MdOutlineKeyboardArrowLeft />
      </Button>
      <Button small btn="Tertiary">
        <MdOutlineKeyboardArrowRight />
      </Button>
    </span>
  );
}
