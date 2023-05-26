import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import VoxelDog from "./voxel-dog";

const Computers = () => {
  return (
    <Suspense fallback={<CanvasLoader />}>
      <VoxelDog />
    </Suspense>
  );
};

export default Computers;
