import React from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Center, Environment, OrbitControls } from '@react-three/drei';
import Room from '../model/Room';

export default function Scene(): JSX.Element {
    return <Canvas
        shadows={{
            enabled: true,
            type: THREE.PCFSoftShadowMap,
        }}
        gl={{
            physicallyCorrectLights: true,
            outputEncoding: THREE.sRGBEncoding,
            toneMapping: THREE.CineonToneMapping,
            pixelRatio: window.devicePixelRatio,
        }}
        camera={{
            position: [ 1, 1, 1 ],
            fov: 40,
            aspect: window.innerWidth / window.innerHeight,
            near: 1,
            far: 100,
        }}
    >
        <Environment preset="apartment" />
        <Center>
            <ambientLight intensity={0.2} color="#cacaff" />
            <directionalLight shadowCameraFar={20} shadowMapWidth={2048} shadowMapHeight={2048} shadowBias={0.05} castShadow={true} position={[ 20, 20, 40 ]} intensity={5} color="#6347FF" />
            <Room position={[ 1, 1, 1 ]} scale={[ 1, 1, 1 ]}/>
        </Center>
        <OrbitControls
            makeDefault={true}
            maxPolarAngle={Math.PI / 2}
            enablePan={false}
            enableDamping={true}
            minDistance={0.5}
            maxDistance={10}
            target={[ 0, 0.5, 0 ]}
        />
    </Canvas>;
}
