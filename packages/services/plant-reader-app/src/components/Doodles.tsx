"use client";
import React, { useEffect, useState } from "react";

function Doodles({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  const [doodles, setDoodles] = useState<
    Array<{ src: string; animationClass: string }>
  >([]);
  const [positions, setPositions] = useState<Array<{ x: number; y: number }>>(
    []
  );
  const parentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const doodleCount = 19;
    const doodleArray = Array.from(
      { length: doodleCount },
      (_, i) => `/doodles/${i + 1}.png`
    );
    const shuffledDoodles = doodleArray.sort(() => 0.5 - Math.random());
    const selectedDoodles = shuffledDoodles.slice(0, count).map((src) => ({
      src,
      animationClass: `doodle-${Math.floor(Math.random() * 4) + 1}`,
    }));
    setDoodles(selectedDoodles);

    // Calculate initial positions
    if (parentRef.current) {
      const parentWidth = parentRef.current.clientWidth;
      const parentHeight = parentRef.current.clientHeight;
      const padding = 60; // Account for doodle size and animation space

      const newPositions = Array.from({ length: count }, () => ({
        x: padding + Math.random() * (parentWidth - padding * 2),
        y: padding + Math.random() * (parentHeight - padding * 2),
      }));
      setPositions(newPositions);
    }
  }, [count]);

  return (
    <div
      id="doodles"
      ref={parentRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: "200px",
        overflow: "hidden",
      }}
    >
      {doodles.map((doodle, index) => (
        <img
          key={index}
          src={doodle.src}
          alt={`doodle-${index + 1}`}
          width={500}
          height={500}
          className={`doodle ${doodle.animationClass}`}
          style={{
            left: positions[index]?.x ?? 0,
            top: positions[index]?.y ?? 0,
          }}
        />
      ))}
      {children}
    </div>
  );
}

export default Doodles;
