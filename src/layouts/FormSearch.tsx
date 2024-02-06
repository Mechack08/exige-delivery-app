import { RiSearchLine } from "react-icons/ri";

import Input from "../components/Input";

export default function FormSearch() {
  return (
    <form className="form__search">
      <Input
        placeholder="Tape and get what to eat..."
        radius="Rounded"
        icon={<RiSearchLine />}
        iconPosition="Left"
      />
    </form>
  );
}
