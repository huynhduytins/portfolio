import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function loadGLTFModel(
  scene,
  glbPath,
  option = { receiverShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = option;
  return new Promise((res, rej) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "dog";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });

        res(obj);
      },
      undefined,
      function (error) {
        rej(error);
      }
    );
  });
}
