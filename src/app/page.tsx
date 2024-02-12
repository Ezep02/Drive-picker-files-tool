"use client"
import { LuFileSearch } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

function page() {


  return (
    <main className="h-screen w-full flex justify-center items-center flex-col bg-gradient-to-b from-sky-600 to-cyan-300">
        
        <div className="pb-5">
          <h1 className="text-9xl font-bold text-slate-50 ">Drive Picker</h1>
        </div>

        <div className="flex gap-2">
          <a href="/picker" className="px-4 py-3 bg-neutral-900 rounded-xl text-white flex items-center gap-1 hover:scale-[1.03]
            shadow-2xl p-1
          ">
            <LuFileSearch/>
            Picker
          </a>

          <a href="" className="px-4 py-3 bg-neutral-900 rounded-xl text-white flex items-center gap-1 hover:scale-[1.03]
            shadow-2xl p-1
          ">
            <FaGithub/>
            Github
          </a>
        </div>
      
    </main>
  )
}

export default page