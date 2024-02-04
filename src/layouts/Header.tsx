import Logo from "../components/Logo";
import NavNotAuth from "./NavNotAuth";

export default function Header() {
  return (
    <header>
      <div className="header_container">
        <Logo color="white" />
        <div>SEARCH</div>
        <NavNotAuth />
      </div>
    </header>
  );
}
