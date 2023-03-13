import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { Center, OrbitControls } from '@react-three/drei';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Room from './Room';

export default function Scene(): JSX.Element {
    const navigate = useNavigate();
    const location = useLocation();

    const [ loadingScene, setLoadingScene ] = useState(true);
    const [ exploration, setExploration ] = useState(false);

    useEffect(() => {
        if (loadingScene) {
            return;
        }

        if (location.state) {
            const isExploration = location.state.exploration || false;
            setExploration(isExploration);
            return;
        }

        let path = '/';
        if (location.pathname === '/') {
            path = '/about';
        } else if (location.hash) {
            path = `${location.pathname}${location.hash}`;
        } else {
            path = location.pathname;
        }

        if (exploration) {
            setExploration(false);
        }

        navigate(path, { replace: true });
    }, [ loadingScene, location.pathname ]);

    return <div id="container">
        <Canvas
            shadows
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
            onCreated={({ gl, scene }): void => {
                const prmremGenerator = new THREE.PMREMGenerator(gl);
                scene.environment = prmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

                const loadingManager = THREE.DefaultLoadingManager;
                loadingManager.onLoad = () => {
                    setLoadingScene(false);
                };

                loadingManager.onError = () => {
                    setLoadingScene(false);
                    console.error('Error loading model');
                };
            }}>

            <Center>
                <Room exploration={exploration} position={[ 1, 1, 1 ]} scale={[ 1, 1, 1 ]}/>
            </Center>
            <OrbitControls
                makeDefault
                maxPolarAngle={Math.PI / 2}
                enablePan={false}
                enableDamping
                minDistance={0.5}
                maxDistance={10}
                target={[ 0, 0.5, 0 ]}
            />
        </Canvas>

        {!loadingScene && <>
            <ToastContainer />
            <Outlet/>
        </>}
    </div>;
}
