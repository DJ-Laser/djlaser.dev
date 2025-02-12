import { A } from "./components/A";
import { BoxThinkg } from "./components/BoxThinkg";

function App() {
  return (
    <>
      <h1 className="my-5 font-bold text-6xl text-center">DJ_Laser</h1>
      <h2 className="my-5 font-bold text-3xl text-center">
        I do silly programmimng things sometimes
      </h2>
      <BoxThinkg header="Projects">
        man i dont know, just scroll through my{" "}
        <A href="https://github.com/dj-laser">github</A> to find all my
        unfinisghed stuff bc i cant be bothred to update this site
      </BoxThinkg>
      <BoxThinkg header="Achievments">i havent failed school yet</BoxThinkg>
      <BoxThinkg header="Langiages">
        RUST (or typescript ig) NO LUA (python is acceptable but avoided)
      </BoxThinkg>
    </>
  );
}

export default App;
