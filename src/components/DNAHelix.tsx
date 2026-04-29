import { useEffect, useRef, useMemo } from "react";

const TOTAL = 200;
const HELIX_RADIUS = 120;
const WAVE_AMPLITUDE = 80;

export function DNAHelix() {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => {
    return Array.from({ length: TOTAL }, (_, i) => {
      const angle = i * 2;
      const rad = i * 0.1;
      const mod = 0.5 + 0.5 * Math.sin(i * 0.05);
      const zOffset = WAVE_AMPLITUDE * Math.cos(rad) * mod;
      const phaseShift = i % 2 === 0 ? 0 : Math.PI;
      const z =
        zOffset + (i % 2 === 0 ? 0 : 40 * Math.cos(rad + phaseShift));
      const hueDelay = -i * 0.07;

      return {
        id: i,
        transform: `
          rotateY(${angle}deg)
          translateX(${HELIX_RADIUS}px)
          translateZ(${z}px)
          rotateY(${-angle}deg)
        `,
        hueDelay,
      };
    });
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const threshold = 20;

    function map(
      value: number,
      inMin: number,
      inMax: number,
      outMin: number,
      outMax: number
    ): number {
      return (
        ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
      );
    }

    const handleMouseMove = (e: MouseEvent) => {
      const x = map(e.clientX, 0, window.innerWidth, -threshold, threshold);
      const y = map(e.clientY, 0, window.innerHeight, -threshold, threshold);
      wrapper.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };

    // Check for touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (!isTouchDevice) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (!isTouchDevice) {
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        perspective: "1000px",
        zIndex: 1,
      }}
    >
      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transformStyle: "preserve-3d",
            animation: "spin 14s linear infinite",
          }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              style={{
                position: "absolute",
                width: 8,
                height: 8,
                borderRadius: "50%",
                transform: item.transform,
                background: `radial-gradient(circle at 30% 30%, hsla(200, 100%, 90%, 1), hsla(200, 100%, 50%, 0.6))`,
                boxShadow: `0 0 10px hsla(200, 100%, 70%, 0.5), 0 0 20px hsla(200, 100%, 60%, 0.3)`,
                animation: `hueShift 14s linear infinite`,
                animationDelay: `${item.hueDelay}s`,
                backfaceVisibility: "hidden",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
