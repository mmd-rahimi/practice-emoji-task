import React from "react";
import { FaLock } from "react-icons/fa6";

type TFacePartsProps = {
  emoji: string
}

export default function FaceParts({emoji}: TFacePartsProps) {
  return (
    <div className="flex gap-4 items-center">
      {/* emoji */}
      <span>{emoji}</span>
      {/* lock / unlock btn */}
      <button className="cursor-pointer">
        <FaLock />
      </button>
    </div>
  );
}