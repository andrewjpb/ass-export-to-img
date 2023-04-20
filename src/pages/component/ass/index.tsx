/* eslint-disable @next/next/no-img-element */
import { toJpeg } from "html-to-image";
import { saveAs } from "file-saver";
import Image from "next/image";

interface assProps {
  nome?: string;
  ramal?: string;
}

export default function Ass({ nome, ramal }: assProps) {
  const downloadComponentAsJPG = async (elementId: any, fileName: any) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      const dataUrl = await toJpeg(element);
      saveAs(dataUrl, fileName);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div
        id="my-ass"
        className="flex flex-row bg-gray-50 rounded-md items-center "
      >
        <div className="flex">
          <img
            src="/logo.jpeg"
            alt="logo"
            className="rounded-md text-center items-center w-[110px] "
          />
          <div className="h-[70px] w-[2px] bg-[#626466]/50 items-center m-auto text-transparent ml-2">
            |
          </div>
        </div>
        <div className="text-gray-800 p-4">
          <p className="text-[#c61d37] mb-2">
            {nome ? nome : "Nome e Sobrenome"}
          </p>
          <div className="text-[#626466]">
            <p>11 2122 0212 | Ramal {ramal ? ramal : "0000"}</p>
            <p>www.spotpromo.com.br</p>
          </div>
        </div>
      </div>
      <button
        disabled={ramal?.length === 0 || nome?.length === 0 ? true : false}
        className={`my-4 w-full bg-[#c61d37] p-2 rounded-md  disabled:bg-gray-700 cursor-pointer disabled:cursor-not-allowed`}
        onClick={() => downloadComponentAsJPG("my-ass", `assinatura-${nome}`)}
      >
        Baixar Assinatura
      </button>
    </div>
  );
}
