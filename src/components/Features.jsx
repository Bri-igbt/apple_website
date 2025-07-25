import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { animateWithGsap } from '../utils/Animation'
import { explore1Img, explore2Img, exploreVideo } from '../utils';


const Features = () => {

    const videoRef = useRef()

    useGSAP(() => {

        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'pause play reverse restart',
                start: '-10% bottom',
            },

            onComplete: () => {
                videoRef.current.play();
            }
        });

        animateWithGsap('#features_title', {
            y: 0,
            opacity: 1
        })

        animateWithGsap('.g_glow', {
            scale: 1,
            opacity: 1,
            ease: 'power1',
            scrub: 5.5
        })

        animateWithGsap('.g_text', {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1
        })
    }, [])

    return (
        <section className='h-full common-padding bg-zinc relative overflow-hidden'>
            <div className='screen-max-width'>
                <div className='w-full mb-12'>
                    <h1 id='features_title' className='section-heading'>
                        Explore the full story
                    </h1>
                </div>

                <div className='flex flex-col justify-center items-center overflow-hidden'>
                    <div className='pl-24 mb-24 mt-32'>
                        <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
                        <h2 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium</h2>
                    </div>

                    <div className='flex-center flex-col sm:px-10'>
                        <div className='relative h-[50vh] flex items-center w-full'>
                            <video 
                                id='explore_video' 
                                className='w-full h-full object-cover object-center' 
                                playsInline 
                                preload='none' 
                                muted 
                                autoPlay 
                                ref={videoRef}
                            >
                                <source src={exploreVideo} type='video/mp4'/>
                            </video>
                        </div>

                        <div className='flex flex-col w-full relative'>
                            <div className='feature-video-container'>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={explore1Img} alt="titanium 1" className='feature-video g_glow' />
                                </div>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={explore2Img} alt="titanium 2" className='feature-video g_glow' />
                                </div>
                            </div>

                            <div className='feature-text-container'>
                                <div className='flex-1 flex-center'>
                                    <p className='feature-text g_text'> 
                                        iphone 15 Pro is {' '}
                                        <span className='text-white'>
                                            the first iPhone to feature an aerospace-grade titanium design
                                        </span>,
                                        using the same alloy that spacecrafts use for missions to Mars.
                                    </p>
                                </div>

                                <div className="flex-1 flex-center">
                                    <p className="feature-text g_text">
                                        Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                                        <span className="text-white">
                                            lightest Pro models ever.
                                        </span>
                                        You'll notice the difference the moment you pick one up.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
