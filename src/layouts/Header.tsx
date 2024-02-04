import Logo from "../components/Logo";
import FormSearch from "./FormSearch";
import NavNotAuth from "./NavNotAuth";

export default function Header() {
  return (
    <header>
      <div className="header_container">
        <Logo color="white" />
        <FormSearch />
        <NavNotAuth />
      </div>
    </header>
  );
}
