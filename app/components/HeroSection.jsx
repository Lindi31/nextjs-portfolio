"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";

const hireUrl = 'https://beacons.ai/arlindi';
const HeroSection = () => {
    return <section>
        <div className="grid grid-cols-1 sm:grid-cols-12 mt-2">
            <div className="col-span-7 place-content-center place-items-center place-self-left text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold sm:text-5xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hi, ich bin {" "}</span>
                    <br />
                    <TypeAnimation
                        sequence={[

                            'Arlind',
                            1500,
                            'Software-Entwickler',
                            1500,
                            'App-Entwickler',
                            1500,
                            'Webentwickler',
                            1500,
                            'Fitness-Freak',
                            1500,
                            'Kickboxer',
                            1500,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6"> Du bist auf meiner Website gelandet, wo Code und Kreativität sich treffen. Bereit, mehr über mich zu erfahren? Dann scroll runter.</p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-white"><Link href={hireUrl} passHref>
        Hire Me
    </Link></button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3">
                        <a href="https://drive.google.com/file/d/1hF9Qg8xsZiSkmhV4-Qp03yQfQCkUHoLx/view?usp=drive_link"><span  className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span></a>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#191919] w-[250px] h-[250px] relative lg:w-[350px] lg:h-[350px] place-self-center">
                    <Image
                        src="/images/arlindmoji.png"
                        alt="hero"
                        className="absolute transform -translate-x+1/2 -translate-y+1/2 -top+1/2 -left+1/2"
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </div>

    </section>
};

export default HeroSection;
