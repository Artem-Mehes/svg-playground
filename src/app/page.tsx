import BasicExample from './shapes/basic-example';
import Curve from './shapes/curve';
import Donuts from './shapes/donuts';
import Path from './shapes/path';
import Rect from './shapes/rect';

export default function Home() {
  return (
    <div className="flex flex-wrap gap-4">
      <BasicExample />

      <Rect />

      <Path />

      <Curve />

      <Donuts />
    </div>
  );
}
