type DotProps = {
  active: boolean;
};

export default function Dot({ active }: DotProps) {
  return <div className={`dot ${active ? "active" : ""}`}></div>;
}
