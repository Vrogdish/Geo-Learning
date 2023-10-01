import React from "react";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="w-full h-full">
      <div className="py-36">
      <Image
        src={"/images/plane.png"}
        alt=""
        width={100}
        height={100}
        className="w-16 h-16 m-auto animate-plane"
      /></div>
      <h2 className="text-center animate-pulse">Chargement en cours ...</h2>
    </div>
  );
}
