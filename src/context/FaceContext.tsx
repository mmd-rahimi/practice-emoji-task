"use client";
import emojiParts from "@/data/emojiParts";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type TFace = {
  eyes: string;
  nose: string;
  mouth: string;
};

export type TLock = {
  eyes: boolean;
  nose: boolean;
  mouth: boolean;
};

export type TFaceContext = {
  face: TFace;
  locked: TLock;
  loadFace: () => void;
  toggleLock: (part: keyof TFace) => void;
};

const FaceContext = createContext<TFaceContext | undefined>(undefined);

function FaceProvider({ children }: { children: ReactNode }) {
  const [face, setFace] = useState<TFace>({ eyes: "", nose: "", mouth: "" });
  const [locked, setLocked] = useState<TLock>({
    eyes: false,
    nose: false,
    mouth: false,
  });

  //   pick random part of face
  const GetRandomPart = (part: string[]) => {
    return part[Math.floor(Math.random() * part.length)];
  };

  //   loadFace btn
  const loadFace = () => {
    setFace((prev) => ({
      eyes: locked.eyes ? prev.eyes : GetRandomPart(emojiParts.eyes),
      nose: locked.nose ? prev.nose : GetRandomPart(emojiParts.nose),
      mouth: locked.mouth ? prev.mouth : GetRandomPart(emojiParts.mouth),
    }));
  };

  //   toggle lock
  const toggleLock = (part: keyof TFace) => {
    setLocked((prev) => ({
      ...prev,
      [part]: !prev[part],
    }));
  };

  //   save states to localStorage
  useEffect(() => {
    const storedFace = localStorage.getItem("face");
    const storedLocked = localStorage.getItem("locked");

    if (storedFace) setFace(JSON.parse(storedFace));
    if (storedLocked) setLocked(JSON.parse(storedLocked));
  }, []);

  //   save states to localStorage whenever we have change
  useEffect(() => {
    localStorage.setItem("face", JSON.stringify(face));
  }, [face]);

  useEffect(() => {
    localStorage.setItem("locked", JSON.stringify(locked));
  }, [locked]);

  return (
    <FaceContext.Provider value={{ loadFace, face, locked, toggleLock }}>
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
};
