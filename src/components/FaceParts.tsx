import React from "react";
import { FaLock, FaUnlock } from "react-icons/fa6";

type TFacePartsProps = {
  emoji: string
  locked: boolean
  onToggle: () => void
}

export default function FaceParts({emoji, locked, onToggle}: TFacePartsProps) {
  return (
    <div className="flex gap-4 items-center">
      {/* emoji */}
      <span>{emoji}</span>
      {/* lock / unlock btn */}
      <button onClick={onToggle} className="cursor-pointer">
        {locked ? <FaLock/> : <FaUnlock/>}
      </button>
    </div>
  );
}