"use client"
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="md:container mx-5 md:mx-auto mt-10 flex flex-col">
        <div className="w-20 h-20 text-[32px] bg-white bg-opacity-10 rounded-full flex items-center justify-center">
            📮
        </div>
        <h1 className="font-bold text-[64px] text-[#EF9A9A] mb-10">Contact</h1>
        <div className="flex flex-col space-y-5">
            <input placeholder="Subject" className="outline-none bg-black bg-opacity-10 rounded py-1.5 px-3.5" />
            <input placeholder="Name" className="outline-none bg-black bg-opacity-10 rounded py-1.5 px-3.5" />
            <input placeholder="Email" className="outline-none bg-black bg-opacity-10 rounded py-1.5 px-3.5" />
            <textarea rows={5} placeholder="Message" className="outline-none bg-black bg-opacity-10 rounded py-1.5 px-3.5" />
        </div>
        <div className="ml-auto mt-5">
            <button className="rounded-full text-lg text-[#1e1e1e] font-bold bg-[#EF9A9A] py-1.5 px-3.5">Submit</button>
        </div>
      </div>
    </>
  )
}