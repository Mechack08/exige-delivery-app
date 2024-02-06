import Header from "../layouts/Header";
import Leading from "../layouts/Leading";

export default function Home() {
  return (
    <div className="grid-rows-3">
      <Header />
      <Leading />
      <div>Partners</div>
      <footer>Footer</footer>
    </div>
  );
}
