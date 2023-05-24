import {
  Cube,
  Square,
  Rectangle,
  Triangle,
  Diamond,
  Trapezium,
  Circle,
  Sphere,
  Parallelepiped,
  Cilinder,
  Cone,
  Footer
} from '@/containers'

function App() {
  return (
    <>
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
    <Footer/>
    </>
  );
}

export default App;
