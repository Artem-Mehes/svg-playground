export default function Curve() {
  return (
    <div className="flex gap-10 flex-col">
      <svg width="200" height="200">
        <path d="M10 10 C 20 20, 40 20, 50 10" stroke="red" />
      </svg>

      <svg width="200" height="200">
        <path d="M10 10 C 100 200, 100 200, 200 10" stroke="red" />
      </svg>

      <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 80 C40 10, 65 10, 95 80 S150 170, 180 100"
          stroke="black"
          fill="transparent"
        />
      </svg>

      <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 80 Q95 10, 180 80" stroke="black" fill="transparent" />
      </svg>

      <svg width="350" height="350" xmlns="http://www.w3.org/2000/svg">
        {/* x10 -> x180 -> x350 */}
        <path
          d="M10 80 Q95 10, 180 80 T350 80"
          stroke="black"
          fill="transparent"
        />
      </svg>
    </div>
  );
}
