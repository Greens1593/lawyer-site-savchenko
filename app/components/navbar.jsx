import Link from "next/link";
import React from "react";

import facebook from "../../public/icons/facebook.svg";
import instagram from "../../public/icons/instagram.svg";
import linkedin from "../../public/icons/linkedin.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="flex justify-between items-center mx-auto max-w-[1200px] px-[20px] py-3">
        <div className="flex gap-[10px]">
          <Link href="/">
            <div className="cursor-pointer w-[18px] h-[18px]">
              <Image src={facebook} alt="facebook" />
            </div>
          </Link>
          <Link href="/">
            <div className="cursor-pointer w-[18px] h-[18px]">
              <Image src={instagram} alt="instagram" />
            </div>
          </Link>
          <Link href="/">
            <div className="cursor-pointer w-[18px] h-[18px]">
              <Image src={linkedin} alt="linkedin" />
            </div>
          </Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
