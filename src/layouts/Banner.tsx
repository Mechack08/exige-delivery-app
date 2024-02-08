import { FaArrowRight } from "react-icons/fa6";

import Image from "../components/Image";
import BannerImage1 from "../assets/banner_images/image-1.png";
import Button from "../components/Button";
import BannerNextPrevBtns from "./BannerNextPrevBtns";
import Dots from "../components/Dots";

export default function Banner() {
  return (
    <div className="banner">
      <Image img={BannerImage1} alt="first pic to show" />
      <span className="absolute-pos discover__more-btn">
        <Button btn="Outlined" radius="Rounded" to="/">
          Discover more <FaArrowRight />
        </Button>
      </span>
      <Dots />
      <BannerNextPrevBtns />
    </div>
  );
}
