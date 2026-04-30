"use client";

import { createContext, useState } from "react";

const ColorContext = createContext();

export function ColorContextProvider() {
  // 전역 상태 정의
  const [color, setColor] = useState("black");

  // Context를 통해서 제공할 전역 객체
  const value = {
    color,
    setColor,
  };

  return (
    <ColorContextProvider.Provider
      value={value}
    ></ColorContextProvider.Provider>
  );
}
