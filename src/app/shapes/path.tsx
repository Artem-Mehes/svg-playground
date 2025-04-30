export default function Path() {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-4">
        <div>Using "L" (lines)</div>

        <svg width="200" height="200">
          <path
            d="M20 20 L100 20 L100 100 L20 100 L20 20"
            stroke="red"
            strokeWidth={5}
          />
        </svg>
      </div>

      <div className="flex flex-col gap-4">
        <div>Using "H" and "V" (horizonal and vertical)</div>

        <svg width="200" height="200">
          <path
            d="M10 10 V100 H100 V10 H10"
            fill="red"
            stroke="white"
            strokeWidth={3}
          />
        </svg>
      </div>

      <div className="flex flex-col gap-4">
        <div>Using "Z" (close path command at the end of the d)</div>

        <svg width="200" height="200">
          <path d="M10 10 V100 H100 V10 Z" stroke="red" strokeWidth={5} />
        </svg>
      </div>

      <div className="flex flex-col gap-4">
        <div>Using relative forms of commads (lowercase "h" and "v")</div>

        <svg width="200" height="200">
          <path d="M10 10 h80 v80 h-80 v-80" stroke="red" strokeWidth={5} />
        </svg>
      </div>
    </div>
  );
}
