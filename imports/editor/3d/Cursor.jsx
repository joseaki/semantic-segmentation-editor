import React from "react";
import useMousePosition from "./useMousePosition";
import "./_Cursor.css";

export const Cursor = (props) => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div
        className={"dot"}
        style={{ left: `${x}px`, top: `${y}px`, width: props.size*2.8, height: props.size*2.8 }}
      ></div>
    </>
  );
};