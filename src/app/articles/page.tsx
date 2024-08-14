"use client"
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="md:container mx-5 md:mx-auto mt-10 flex flex-col">
        <div className="w-20 h-20 text-[32px] bg-white bg-opacity-10 rounded-full flex items-center justify-center">
          🗞️
        </div>
        <div className="flex flex-col md:flex-row md:items-center mb-10">
            <h1 className="font-bold text-[64px] text-[#EF9A9A]">Articles</h1>
            <p className="text-xl opacity-50 font-bold ml-2.5">on Zenn</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white bg-opacity-10 p-5 shadow rounded">
            <p className="text-xs opacity-50">20XX/XX/XX</p>
            <h1 className="text-[32px] font-bold mb-2.5 hover:text-[#EF9A9A] transition-color duration-200">Title</h1>
            <div className="flex space-x-2.5">
              <p className="rounded-full opacity-50 bg-white text-black px-2.5 py-0.5">Topic</p>
              <p className="rounded-full opacity-50 bg-white text-black px-2.5 py-0.5">Topic</p>
              <p className="rounded-full opacity-50 bg-white text-black px-2.5 py-0.5">Topic</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 p-5 shadow rounded">
            <p className="text-xs opacity-50">20XX/XX/XX</p>
            <h1 className="text-[32px] font-bold mb-2.5 hover:text-[#EF9A9A] transition-color duration-200">Title</h1>
            <div className="flex space-x-2.5">
              <p className="rounded-full opacity-50 bg-white text-black px-2.5 py-0.5">Topic</p>
              <p className="rounded-full opacity-50 bg-white text-black px-2.5 py-0.5">Topic</p>
              <p className="rounded-full opacity-50 bg-white text-black px-2.5 py-0.5">Topic</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 p-5 shadow rounded">
            <p className="text-xs opacity-50">20XX/XX/XX</p>
            <h1 className="text-[32px] font-bold mb-2.5 hover:text-[#EF9A9A] transition-color duration-200">Title</h1>
            <div className="flex space-x-2.5">
              <p className="rounded-full opacity-50 bg-white text-black px-2.5 py-0.5">Topic</p>
              <p className="rounded-full opacity-50 bg-white text-black px-2.5 py-0.5">Topic</p>
              <p className="rounded-full opacity-50 bg-white text-black px-2.5 py-0.5">Topic</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}