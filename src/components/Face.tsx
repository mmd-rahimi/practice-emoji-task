import { useFace } from "@/context/FaceContext";
import React from "react";
import FaceParts from "./FaceParts";

export default function Face() {

  const {face, locked, toggleLock} = useFace()

  return (
    <div className="text-xl flex flex-col gap-10">
      <FaceParts emoji={face.eyes} locked={locked.eyes} onToggle={() => toggleLock("eyes")} />
      <FaceParts emoji={face.nose} locked={locked.nose} onToggle={() => toggleLock("nose")} />
      <FaceParts emoji={face.mouth} locked={locked.mouth} onToggle={() => toggleLock("mouth")} />
    </div>
  );
}