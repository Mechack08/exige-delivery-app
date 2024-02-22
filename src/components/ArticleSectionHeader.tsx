import { MdClearAll, MdEmojiFoodBeverage } from "react-icons/md";
import { FaBurger } from "react-icons/fa6";
import { FaBirthdayCake, FaFish, FaPizzaSlice } from "react-icons/fa";
import { GiChickenOven } from "react-icons/gi";
import Button from "./Button";

export default function ArticleSectionHeader() {
  return (
    <div className="article__section-header">
      <p>Choose from our popular categories.</p>
      <div
        className="article__section-categories"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Button>
          <MdClearAll /> All
        </Button>
        <Button btn="Text">
          <FaBurger /> Burger
        </Button>
        <Button btn="Text">
          <FaFish /> Fish
        </Button>
        <Button btn="Text">
          <FaPizzaSlice /> Pizza
        </Button>
        <Button btn="Text">
          <GiChickenOven /> Chicken
        </Button>
        <Button btn="Text">
          <FaBirthdayCake /> Cake
        </Button>
        <Button btn="Text">
          <MdEmojiFoodBeverage /> Beverage
        </Button>
      </div>
    </div>
  );
}
