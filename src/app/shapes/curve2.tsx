export const Curve2 = () => {
  const startPoint = { x: 100, y: 200 };
  const endPoint = { x: 100, y: 0 };

  const controlPoint1 = {
    x: 50,
    y: startPoint.y + (endPoint.y - startPoint.y) * 0.3,
  };
  const controlPoint2 = {
    x: 50,
    y: startPoint.y + (endPoint.y - startPoint.y) * 0.7,
  };

  return (
    <svg width="200" height="200">
      <path
        d={`M${startPoint.x} ${startPoint.y} C${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${endPoint.x} ${endPoint.y}`}
        stroke="black"
        fill="none"
      />
    </svg>
  );
};
