import { Physics, useBox, useConvexPolyhedron } from "@react-three/cannon";
import React, { useMemo, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Canvas } from "react-three-fiber";
import { useDrag } from "react-use-gesture";
import { AppState } from "store";
import * as THREE from "three";
import { Geometry } from "three-stdlib/deprecated/Geometry";

const mapStateToProps = (state: AppState) => ({});

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = {} & PropsFromRedux;

function toConvexProps(bufferGeometry: any) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  // Merge duplicate vertices resulting from glTF export.
  // Cannon assumes contiguous, closed meshes to work
  geo.mergeVertices();
  return [
    geo.vertices.map((v: any) => [v.x, v.y, v.z]),
    geo.faces.map((f: any) => [f.a, f.b, f.c]),
    []
  ];
}

function D20() {
  const [position, setPosition] = useState([Math.random() * 0.5, 1, Math.random() * 0.5]);
  // const { size, viewport } = useThree();
  // const aspect = size.width / viewport.width;

  const geo = useMemo(() => toConvexProps(new THREE.IcosahedronGeometry(0.1)), []);
  const [ref, api] = useConvexPolyhedron(() => ({
    args: geo as any,
    mass: 0.1,
    position
  }));
  const bind = useDrag(
    ({ first, last, vxvy: [vx, vy] }) => {
      if (first) {
        api.mass?.set(0);
        api.velocity.set(0, 0, 0);
        const [x, , z] = position;
        api.position.set(x, 0.5, z);
      } else if (last) {
        api.mass?.set(0.6);
        api.velocity.set(10 * vx, 0, 10 * vy);
      } else {
        api.velocity.set(2 * vx, 0, 2 * vy);
      }
    },
    { pointerEvents: true }
  );
  api.position.subscribe(value => setPosition(value));
  return (
    <mesh receiveShadow castShadow ref={ref} {...bind()}>
      <icosahedronGeometry attach="geometry" args={[0.1]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}

const DiceRoller: React.FunctionComponent<Props> = props => {
  function Plane(props: any) {
    const [ref] = useBox(() => ({
      args: [2, 0.1, 2],
      mass: 0,
      type: "Static",
      ...props
    }));
    return (
      <mesh ref={ref} receiveShadow>
        <boxBufferGeometry attach="geometry" args={[2, 0, 2]} />
        {/* <meshBasicMaterial attach="material"/> */}
        <shadowMaterial attach="material" color="#000000" opacity={1} />
      </mesh>
    );
  }

  // const [cameraPosition, setCameraPosition] = useState([0, 2])

  return (
    <Canvas
      style={{ height: window.innerHeight }}
      pixelRatio={window.devicePixelRatio}
      colorManagement
      shadowMap
      gl={{ alpha: false, antialias: true }}
      camera={{
        fov: 50,
        position: [0, 2, 2]
      }}
    >
      <color attach="background" args={[148 / 255, 198 / 255, 214 / 255]} />
      {/* <fog attach="fog" args={["#a0a0a0", 1, 5]} /> */}
      <hemisphereLight intensity={0.35} />
      <spotLight
        position={[5, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
      />
      <gridHelper args={[2, 20, "#000000", "#000000"]} />
      <Physics
        defaultContactMaterial={{
          restitution: 0.6
        }}
      >
        <Plane />
        <Plane position={[0, 2, 0]} />
        <Plane rotation={[0, 0, -Math.PI / 2]} position={[1, 1, 0]} />
        <Plane rotation={[0, 0, -Math.PI / 2]} position={[-1, 1, 0]} />
        <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, 1]} />
        <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, 1, -1]} />
        <D20 />
      </Physics>
    </Canvas>
  );
};

export default connector(DiceRoller);
