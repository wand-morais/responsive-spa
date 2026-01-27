import { Navibar } from "./components/Wrapper/navibar";

export function App() {
  return (
    <main style={{ fontFamily: "system-ui" }}>
      <Navibar children={<div>Content</div>} />
    </main>
  );
}
