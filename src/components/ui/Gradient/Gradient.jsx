import { ShaderGradient, useThree, useFrame } from "shadergradient";
function Gradient() {
  const { scene } = useThree();

  useFrame(() => {
    const mesh = scene.getObjectByName("shadergradient-mesh");

    if (mesh.material.userData.uNoiseStrength) {
      mesh.material.userData.uNoiseStrength.value = 4;
    }
  });

  return (
    <ShaderGradient
      type="waterPlane"
      cDistance={4.5}
      uStrength={1.1}
      grain="off"
      brightness={1.1}
      uSpeed={0.2}
      range="on"
      rangeStart={0}
      rangeEnd={40}
      cAzimuthAngle={180}
      cPolarAngle={115}
      uDensity={1}
      animate="on"
      rotationX={0}
      rotationY={0}
      rotationZ={235}
      positionX={-0.5}
      positionY={0.1}
      positionZ={0}
      cameraZoom={11}
      color1="#141C4899"
      color2="#285BD4"
      color3="#6D9CF6B2"
    />
  );
}

export default Gradient;
