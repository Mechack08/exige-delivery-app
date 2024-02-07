import Dot from "./Dot";

export default function Dots() {
  return (
    <div className="dots absolute-pos position">
      <Dot active={false} />
      <Dot active />
      <Dot active={false} />
      <Dot active={false} />
    </div>
  );
}
