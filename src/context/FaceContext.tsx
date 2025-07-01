"use client"
import emojiParts from "@/data/emojiParts";
import React, { createContext, ReactNode, useContext, useState } from "react";

export type TFace = {
  eyes: string;
  nose: string;
  mouth: string;
};

export type TFaceContext = {
  face: TFace;
  loadFace: () => void;
};

const FaceContext = createContext<TFaceContext | undefined>(undefined);

function FaceProvider({ children }: { children: ReactNode }){

  const [face, setFace] = useState<TFace>({ eyes: "", nose: "", mouth: "" });

//   pick random part of face
  const GetRandomPart = (part: string[]) => {
    return part[Math.floor(Math.random() * part.length)];
  };

//   loadFace btn
  const loadFace = () => {
    setFace({
      eyes: GetRandomPart(emojiParts.eyes),
      nose: GetRandomPart(emojiParts.nose),
      mouth: GetRandomPart(emojiParts.mouth),
    });
  };

  return (
    <FaceContext.Provider value={{ loadFace, face }}>
      {children}
    </FaceContext.Provider>
  );
}

export default FaceProvider;

// use FaceContext easily
export const useFace = () => {
    const context = useContext(FaceContext);
      if (!context) throw new Error("error in passing context");
    return context;
}
