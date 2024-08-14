"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="md:container mx-5 md:mx-auto mt-10 flex flex-col">
        <div className="w-20 h-20 text-[32px] bg-white bg-opacity-10 rounded-full flex items-center justify-center">
          📕
        </div>
        <h1 className="font-bold text-[64px] text-[#EF9A9A] mb-10">Blog</h1>
        <div className="grid grid-cols-1 gap-5">
          <div className="bg-white bg-opacity-10 p-5 shadow rounded">
            <p className="text-xs opacity-50 mb-0.5">2024/08/XX</p>
            <h1 className="text-2xl font-bold mb-2.5 hover:text-[#EF9A9A] transition-color duration-200">ディズニーランド行ったついでセキュリティ・キャンプ2024に参加してきた</h1>
            <div className="flex space-x-2.5">
              <p className="rounded-full opacity-50 bg-white text-black px-2.5 py-0.5">security</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}