"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="md:container mx-5 md:mx-auto mt-10 flex flex-col">
        <div className="w-20 h-20 text-[32px] bg-white bg-opacity-10 rounded-full flex items-center justify-center">
          🎉
        </div>
        <h1 className="font-bold text-[64px] text-[#EF9A9A] mb-10">About Me</h1>
        <div className="opacity-75">
            <p>Ippitsu Suzuki is a junior high school student in Japan.</p>
            <p>I usually develop software, mainly focusing on frontend stuff.</p>
        </div>
        <hr className="my-10 opacity-50" />
        <div className="space-y-5 mb-10">
            <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 text-xl bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                    ❤️
                </div>
                <h2 className="text-[32px] font-semibold">Like</h2>
            </div>
            <p className="font-medium opacity-75 text-lg">Reading, Minecraft</p>
        </div>
        <div className="space-y-5">
            <div className="flex items-center space-x-2.5">
                <div className="w-10 h-10 text-xl bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                    🤩
                </div>
                <h2 className="text-[32px] font-semibold">Skills</h2>
            </div>
            <div>
                <h3 className="text-lg font-medium opacity-75 mb-2.5">Programming Languages</h3>
                <img src="https://skillicons.dev/icons?i=html,css,js,ts,py,ruby" alt="My Skills" />
            </div>
            <div>
                <h3 className="text-lg font-medium opacity-75 mb-2.5">Frameworks</h3>
                <img src="https://skillicons.dev/icons?i=react,nextjs,rails" alt="My Skills" />
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}