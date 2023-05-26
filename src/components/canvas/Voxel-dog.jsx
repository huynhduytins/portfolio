import { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { loadGLTFModel } from "./model";

import { Canvas } from "@react-three/fiber";
import { Preload, useGLTF } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelDog = () => {
  const refContainer = useRef();
  const [loading, setLoading] = useState(true);
  const [renderer, setRenderer] = useState();
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.LinearEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      const scale = scH * 0.005 + 4.8;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        5000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, "/dog.glb", {
        receiverShadow: false,
        castShadow: false,
      }).then(() => {
        setLoading(false);
      });
    }
  }, []);

  return (
    <div ref={refContainer}>
      {loading && (
        <Canvas>
          <Preload />
        </Canvas>
      )}
    </div>
  );
};

export default VoxelDog;
