'use client'
import React, { useCallback, useEffect, useState } from "react";

export const SizeContext = React.createContext<ScrollValue>({
  innerWidth: 0,
});

const SizeObserver = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    addEventListener("resize", handleResize, { passive: true });
    return () => removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeObserver;
