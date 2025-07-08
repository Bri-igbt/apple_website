import { Html } from '@react-three/drei'
import React from 'react'

const Loader = () => {
    return (
        <Html>
            <div className='absolute w-full h-full flex items-center justify-center'>
                <div className='h-[10vw] w-[10vw] rounded-full'>Loading...</div>
            </div>
        </Html>
    )
}

export default Loader
