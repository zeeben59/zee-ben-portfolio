import React, { useRef, useState, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";

export default function LogoLoop({
  logos = [],
  speed = 100,
  direction = "left",
  logoHeight = 50,
  gap = 60,
  hoverSpeed = 0,
  scaleOnHover = true,
  fadeOut = true,
  fadeOutColor = "#030712",
}) {
  const containerRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);

  const baseVelocity = direction === "left" ? -speed : speed;
  const currentVelocity = useRef(baseVelocity);
  const targetVelocity = useRef(baseVelocity);
  const x = useRef(0);

  useEffect(() => {
    if (containerRef.current) {
      const items = Array.from(containerRef.current.children);
      const width = items.reduce((acc, el) => acc + el.offsetWidth + gap, 0);
      setContentWidth(width / 3);
    }
  }, [logos, gap]);

  const handleMouseEnter = () => {
    targetVelocity.current = direction === "left" ? -hoverSpeed : hoverSpeed;
  };

  const handleMouseLeave = () => {
    targetVelocity.current = baseVelocity;
  };

  useAnimationFrame((time, delta) => {
    if (!contentWidth) return;

    currentVelocity.current += (targetVelocity.current - currentVelocity.current) * 0.05;
    x.current += (currentVelocity.current * delta) / 1000;

    if (direction === "left" && x.current <= -contentWidth) {
      x.current += contentWidth;
    } else if (direction === "right" && x.current >= 0) {
      x.current -= contentWidth;
    }

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <div
      className="relative overflow-hidden w-full flex items-center py-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {fadeOut && (
        <>
          <div
            className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <div ref={containerRef} className="flex whitespace-nowrap will-change-transform" style={{ gap }}>
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className={`flex items-center justify-center transition-transform duration-300 ${
              scaleOnHover ? "hover:scale-110" : ""
            }`}
            style={{ height: logoHeight }}
          >
            {logo.node ? (
              <div className="flex items-center gap-4 text-primary-400 opacity-60 hover:opacity-100 transition-opacity">
                <div className="text-4xl">{logo.node}</div>
                {logo.title && (
                  <span className="text-2xl font-bold font-outfit uppercase tracking-tighter text-white">
                    {logo.title}
                  </span>
                )}
              </div>
            ) : (
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: "100%", objectFit: "contain" }}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
