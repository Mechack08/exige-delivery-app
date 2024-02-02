import LogoImage_whiteBG from "../assets/Logo_exige_white_bg.png";
import LogoImage_blackBG from "../assets/Logo_exige_black_bg.png";

type LogoPropsType = {
  color: "white" | "black";
};

export default function Logo({ color }: LogoPropsType) {
  return (
    <div className="logo_small">
      <img
        src={color === "white" ? LogoImage_whiteBG : LogoImage_blackBG}
        alt="header exige logo"
      />
    </div>
  );
}
