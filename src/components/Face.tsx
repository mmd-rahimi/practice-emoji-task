import { useFace } from "@/context/FaceContext";
import React from "react";
import FaceParts from "./FaceParts";

export default function Face() {

  const {face} = useFace()

  return (
    <div className="text-xl flex flex-col gap-10">
      <FaceParts emoji={face.eyes} />
      <FaceParts emoji={face.nose} />
      <FaceParts emoji={face.mouth} />
    </div>
  );
}