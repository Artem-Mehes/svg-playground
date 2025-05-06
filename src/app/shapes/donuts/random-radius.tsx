'use client';

import { useEffect, useState } from 'react';

export const RandomRadius = () => {
  const smallRadius = 60;
  const largeRadius = 100;
  const samplesCount = 500;
  const center = { x: 150, y: 150 };

  const [samples, setSamples] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const result: { x: number; y: number }[] = [];

    for (let i = 0; i < samplesCount; i++) {
      const randomAngle = Math.random() * Math.PI * 2;

      const x = Math.cos(randomAngle);
      const y = Math.sin(randomAngle);

      const randomRadius =
        Math.random() * (largeRadius - smallRadius) + smallRadius;

      console.log('random radius :>> ', randomRadius);

      result.push({
        x: x * randomRadius,
        y: y * randomRadius,
      });
    }

    setSamples(result);
  }, []);

  return (
    <svg width={500} height={500}>
      <text x={10} y={10} fontSize={12} fill="black">
        Radius calculated without area calculation (more samples closer to the
        small circle)
      </text>

      <circle cx={center.x} cy={center.y} r={largeRadius} fill="red" />

      <circle cx={center.x} cy={center.y} r={smallRadius} fill="green" />

      {samples.map((sample, index) => (
        <circle
          key={index}
          cx={center.x + sample.x}
          cy={center.y + sample.y}
          r={2}
          fill="white"
        />
      ))}
    </svg>
  );
};
