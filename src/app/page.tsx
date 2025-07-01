"use client"
import Face from "@/components/Face";
import FaceProvider, { useFace } from "@/context/FaceContext"

const AppUI = () => {

  const {loadFace} = useFace()

return(
    <div className="mt-24 flex flex-col justify-center items-center gap-10">
      <Face />
      <button
        onClick={loadFace}
        className="bg-blue-400 p-2 px-4 rounded cursor-pointer"
      >
        Load face
      </button>
    </div>
)
}

export default function Home() {
  return (
    <FaceProvider>
      <AppUI />
    </FaceProvider>
  );
}
