"use client";

import { LINKS } from "@/constants";
import { motion } from "framer-motion";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiMenu3Fill } from "react-icons/ri";
import Socials from "./Socials";

const MobileNav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.15,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav initial="closed" animate={mobileNavOpen ? "opened" : "closed"}>
      <Sheet>
        <SheetTrigger
          onClick={() => setMobileNavOpen(true)}
          className="flex items-center"
        >
          <RiMenu3Fill className="text-[25px]" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetTitle className="flex justify-center mt-32 mb-12">
            <Link href="/" className="flex flex-col items-center">
              <Image src="/favicon.ico" alt="logo" width={50} height={50} />
              <p className="font-semibold">Tin dev</p>
            </Link>
          </SheetTitle>
          <motion.ul
            variants={ulVariant}
            className="flex flex-col items-center gap-8 mt-8"
          >
            {LINKS.map((link) => (
              <motion.li whileTap={{ scale: 0.95 }} key={link.path}>
                <motion.div variants={liVariant}>
                  <Link
                    href={link.path}
                    className={`${
                      pathname === link.path &&
                      "text-accent font-medium border-b-2 border-accent"
                    } capitalize`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
          <div className="mt-28 flex justify-center gap-8">
            <Socials />
          </div>
        </SheetContent>
      </Sheet>
    </motion.nav>
  );
};

export default MobileNav;
