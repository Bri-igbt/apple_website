import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import React from 'react'
import Lights from './Lights'
import Loader from './Loader'
import { DisplayPhones } from './DisplayPhones'


const ModalView = ({ index, groupRef, gsapType, controlRef, setRotationState, item, size }) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
        >
            {/* Ambient Light */}
            <ambientLight intensity={0.3} /> 

            <PerspectiveCamera 
                makeDefault 
                position={[0, 0, 4]} 
            />

            <Lights />

            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
                onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
            />

            <group ref={groupRef} position={[0, 0, 0]} name={`${index === 1 ? 'small' : 'large'}`}>
                <Suspense fallback={<Loader />} >
                    <DisplayPhones 
                        scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                        item={item}
                        size={size}
                    />
                </Suspense>
            </group>

            
        </View>
    )
}

export default ModalView
