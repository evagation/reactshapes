import { Cube } from "./containers/Cube";
import { Diamond } from "./containers/Diamond";
import { Rectangle } from "./containers/Rectangle";
import { Square } from "./containers/Square";
import { Trapezium } from "./containers/Trapezium";
import { Triangle } from "./containers/Triangle";
import { Circle } from "./containers/Circle";
import { Sphere } from "./containers/Sphere";
import { Parallelepiped } from "./containers/Parallelepiped";
import { Cilinder } from "./containers/Cilinder";
import { Cone } from "./containers/Cone";

function App() {
  return (
    <div className="mx-auto my-6 flex flex-col gap-4 max-w-screen-lg">
      <Cube />
      <Square />
      <Rectangle />
      <Triangle />
      <Diamond />
      <Trapezium />
      <Circle />
      <Sphere />
      <Parallelepiped/>
      <Cilinder/>
      <Cone/>
    </div>
  );
}

export default App;
