import BasicExample from './shapes/basic-example';
import Path from './shapes/path';
import Rect from './shapes/rect';

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl">Basic example</h1>

        <BasicExample />
      </div>

      <div className="flex flex-col gap-10">
        <h1 className="text-5xl">Rect</h1>

        <Rect />
      </div>

      <div className="flex flex-col gap-10">
        <h1 className="text-5xl">Path</h1>

        <Path />
      </div>
    </div>
  );
}
