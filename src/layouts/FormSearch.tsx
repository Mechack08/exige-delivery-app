import { MdOutlineSearch } from "react-icons/md";

import Input from "../components/Input";

export default function FormSearch() {
  return (
    <form className="form__search">
      <Input
        placeholder="Tape and get what to eat..."
        radius="Rounded"
        icon={<MdOutlineSearch />}
        iconPosition="Left"
      />
    </form>
  );
}
