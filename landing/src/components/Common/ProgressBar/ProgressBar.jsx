import React from "react";

// Helper: convert hex → rgba
const hexToRgba = (hex, alpha = 1) => {
  const h = hex.replace("#", "");
  const bigint = parseInt(h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const ProgressCircle = ({ current, total, color }) => {
  const percentage = (current / total) * 100;

  // Arc setup
  const arcLength = 270;
  const startAngle = 135;
  const radius = 22;
  const circumference = (arcLength / 360) * 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorMap = {
    red: ["#ef4444", "#f87171"],
    orange: ["#f59e0b", "#fbbf24"],
    yellow: ["#facc15", "#fde047"],
    darkyellow: ["#eab308", "#facc15"],
    green: ["#10b981", "#4ade80"],
  };

  const [startColor, endColor] = colorMap[color] || ["#999", "#ccc"];
  const backgroundColor = hexToRgba(startColor, 0.2);

  // Arc path
  const centerX = 25;
  const centerY = 25;
  const startAngleRad = (startAngle * Math.PI) / 180;
  const endAngleRad = ((startAngle + arcLength) * Math.PI) / 180;
  const startX = centerX + radius * Math.cos(startAngleRad);
  const startY = centerY + radius * Math.sin(startAngleRad);
  const endX = centerX + radius * Math.cos(endAngleRad);
  const endY = centerY + radius * Math.sin(endAngleRad);
  const largeArcFlag = arcLength > 180 ? 1 : 0;
  const backgroundPath = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;

  return (
    <div className="relative w-10 h-10">
      <svg className="w-full h-full" viewBox="0 0 50 50">
        <defs>
          {/* Gradient for progress */}
          <linearGradient id={`grad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>

          {/* Light glare (highlight reflection) */}
          <radialGradient id={`glare-${color}`} cx="30%" cy="25%" r="70%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="60%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Background arc */}
        <path
          d={backgroundPath}
          stroke={backgroundColor}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        {/* Gradient progress arc */}
        <path
          d={backgroundPath}
          stroke={`url(#grad-${color})`}
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-700 ease-out"
        />

        {/* Glossy glare overlay */}
        <circle cx="25" cy="25" r="22" fill={`url(#glare-${color})`} opacity="0.4" />
      </svg>

      {/* Center count */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          style={{
            backgroundColor: hexToRgba(startColor, 0.25),
            backdropFilter: "blur(2px)",
          }}
          className="text-[8px] font-semibold text-black dark:text-white px-0.5 py-1.5 rounded-full"
        >
          {`${current && current < 10 ? `0${current}` : current || "00"}/${
            total && total < 10 ? `0${total}` : total || "00"
          }`}
        </span>
      </div>

      {/* Percentage label */}
      <span className="text-[7px] font-bold text-gray-500 dark:text-gray-400 absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
        {Math.round(percentage)}%
      </span>
    </div>
  );
};

export default function ProgressBar({ currentcount = 0, totalcount = 10 }) {
  const getColor = (current, total) => {
    const percentage = (current / total) * 100;
    if (percentage === 100) return "green";
    if (percentage >= 75) return "darkyellow";
    if (percentage >= 50) return "yellow";
    if (percentage >= 25) return "orange";
    return "red";
  };

  return (
    <div>
      <ProgressCircle
        current={currentcount}
        total={totalcount}
        color={getColor(currentcount, totalcount)}
      />
    </div>
  );
}
