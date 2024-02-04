import { IoLogIn } from "react-icons/io5";
import { VscSignIn } from "react-icons/vsc";

import Button from "../components/Button";

export default function NavNotAuth() {
  return (
    <nav className="nav">
      <Button to="/login" btn="Outlined">
        <IoLogIn />
        <span>Login</span>
      </Button>

      <Button>
        <VscSignIn />
        <span>Sign in</span>
      </Button>
    </nav>
  );
}
