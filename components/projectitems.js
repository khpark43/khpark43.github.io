import Link from "next/link";
import { useState } from "react";

export default function projectitems({
  children,
  title,
  lang,
  active,
  setActive,
  innerRef,
  index,
}) {
  return (
    <div
      className={`${
        active == index ? "border-blue-600 shadow-xl" : "border-blue-300"
      } rounded border shadow-md m-4 hover:border-blue-600 cursor-pointer`}
      id={title}
      ref={innerRef}
      onClick={() => {
        setActive(index);
      }}
    >
      <h1 className="text-center text-xl font-regular mt-2">{title}</h1>
      <h2 className="text-right text-sm mr-2">{lang}</h2>
      <div className="p-2 text-sm mb-2">{children}</div>
    </div>
  );
}
