// import {  } from "next/font/google";
import Image from "next/image";
import Ass from "./component/ass";
import { useState } from "react";
import { toJpeg } from "html-to-image";
import { saveAs } from "file-saver";
import Input from "./component/input";
import { FiUsers, FiPhoneCall } from "react-icons/fi";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [name, setName] = useState("");
  const [ramal, setRamal] = useState("");

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24 bg-gray-950 ">
      <div className=" bg-zinc-600 max-w-[400px] rounded-md p-4 m-auto gap-4 flex flex-col">
        <div className="flex justify-center"></div>
        <div>
          <Input
            Icon={FiUsers}
            placeholder="Nome completo"
            setValue={(e) => setName(e)}
            value={name}
          />
          <Input
            Icon={FiPhoneCall}
            placeholder="ramal"
            setValue={(e) => setRamal(e)}
            value={ramal}
          />
        </div>
      </div>
      <Ass nome={name} ramal={ramal} />
    </main>
  );
}
