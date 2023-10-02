import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" w-full shadow-light py-10 px-32 flex justify-between">
      <div className="">
        <p>Site developpé par Cédric G. </p>
      </div>
      <div className="flex gap-6">
        <a href="https://github.com/Vrogdish" target="_blank">
          <Image
            src={"/images/github.png"}
            alt="github"
            width={30}
            height={30}
          />
        </a>
        <a href="https://www.linkedin.com/in/cedric-gache-12628a266" target="_blank">
          <Image
            src={"/images/linkedin.png"}
            alt="linkedin"
            width={30}
            height={30}
          />
        </a>
        <a href="https://twitter.com/Vrogdish" target="_blank">
          <Image
            src={"/images/twitter.png"}
            alt="twitter"
            width={30}
            height={30}
          />
        </a>
      </div>
    </footer>
  );
}
