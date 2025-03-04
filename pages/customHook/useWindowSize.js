import { useState, useEffect } from "react";

function getCurrentWidthAndHeight() {
  if (window.innerWidth < 600) {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: true,
    };
  } else {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isMobile: false,
    };
  }
}

export function useWindowResize() {
  const [widthAndHeight, setWidthAndHeight] = useState(
    getCurrentWidthAndHeight()
  );

  function handler() {
    setWidthAndHeight(getCurrentWidthAndHeight());
  }

  useEffect(() => {
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  });

  return widthAndHeight;
}
