import { type ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

type LabelDisplayProps = {
  children: ReactNode;
};

export default function LabelDisplay({ children }: LabelDisplayProps) {
  return (
    <li className="display__item">
      {children}
      <IoMdClose />
    </li>
  );
}
