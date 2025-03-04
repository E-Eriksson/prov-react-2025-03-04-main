// 5. Custom hook (3p)
// Flytta all logik som hanterar width och height in i en
// custom hook: useWindowSize

// useWindowSize ska returnera ett objekt med width, height och isMobile
// isMobile är true om fönstret är mindre än 600px bred.

import React, { useState, useEffect } from "react";
import { useWindowResize } from "./customHook/useWindowSize";

export default function Question5() {
  /*   const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function useWindowSize() {
    const [widthAndHeight, setWidthAndHeight] = useState([]);
  
    return widthAndHeight;
  } */

  const { width, height, isMobile } = useWindowResize();

  return (
    <div>
      <p>Fönsterbredd: {width}px</p>
      <p>Fönsterhöjd: {height}px</p>
      <p>Mobile: {isMobile}</p>
    </div>
  );
}
