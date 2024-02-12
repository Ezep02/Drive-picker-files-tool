"use client"

import useDrivePicker from "react-google-drive-picker";
import { useState } from "react";
import NavBar from "@/components/NavBard";

interface DriveFile {
  id: string;
  name: string;
  embedUrl: string;
  url: string;
  
}

function Home() {
  const [openPicker, authResponse] = useDrivePicker();
  const [dataPicked, setDataPicked] = useState<DriveFile[]>([]); 
  const [file, setFile] = useState<boolean>(false);

  const handleOpenPicker = () => {
    openPicker({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string,
      developerKey: process.env.NEXT_PUBLIC_API_KEY as string, 
      token: authResponse?.access_token,
      viewId: "DOCS",
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,

      callbackFunction: (data: { action: string, docs: DriveFile[] }) => {
        if (data.action === "picked") {
          setDataPicked(data.docs);
          setFile(true);
        }
      },
    });
  };

  return (
    <div className="bg-neutral-950 h-screen w-full flex flex-col">
      <NavBar/>

      <div className="flex  justify-center items-center flex-grow ">

        {file ? (
          <article className="bg-gray-50 py-4 px-3 rounded-xl">
            {dataPicked.map((file) => (

              <div key={file.id} className="flex gap-4">

                <div>
                  <iframe src={file.embedUrl} width={350} height={350} className="object-cover"></iframe>
                </div>

                <div className="p-3 flex flex-col gap-3 justify-center">

                  <div className="flex gap-2 justify-center">
                    <h2 className="font-bold">{file.name}</h2>
                  </div>

                  <div className="flex justify-center">
                        <a href={file.url} target="_blank" className="px-3 py-2 rounded-2xl border-none outline-none bg-sky-500 font-bold text-white ">
                          Ver en Drive
                        </a>
                  </div>
                  
                </div>
              </div>
            ))}
          </article>
        ) : (
          <p className="text-2xl text-white font-bold py-4 shadow-sm">No hay ningún archivo seleccionado</p>
        )}
      </div>

      <div className="flex justify-center items-center pb-40">
        <button 
          className="px-4 py-3 rounded-2xl border-none outline-none bg-sky-500 font-bold text-white shadow-2xl hover:scale-[1.04]"
          onClick={handleOpenPicker}> 
          Seleccionar Archivo
        </button>
      </div>
      
    </div>
  );
}

export default Home;
