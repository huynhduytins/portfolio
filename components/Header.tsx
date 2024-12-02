import Link from "next/link";
import Nav from "./Nav";
import Image from "next/image";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-2 text-white mt-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/favicon.ico" alt="logo" width={50} height={50} />
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
