"use client";

import { LINKS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  use,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";
import { getPosition } from "@/lib/utils";

const NavItem = ({
  children,
  setCurrentPosition,
  setPosition,
  path,
}: {
  children: JSX.Element;
  setPosition: Dispatch<
    SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
  setCurrentPosition: Dispatch<
    SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
  path: string;
}) => {
  const pathname = usePathname();
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (pathname === path) {
      getPosition(ref, setCurrentPosition);
    }
  }, [pathname, path, setCurrentPosition]);

  return (
    <li
      ref={ref}
      className={`${
        pathname === path && "text-accent font-medium"
      }  relative capitalize hover:text-accent`}
      onMouseEnter={() => {
        getPosition(ref, setPosition);
      }}
      onClick={() => {
        getPosition(ref, setCurrentPosition);
      }}
    >
      {children}
    </li>
  );
};

const Cursor = ({
  position,
}: {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute bottom-0 border-b-2 border-accent"
    />
  );
};

const Nav = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [currentPosition, setCurrentPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    setPosition(currentPosition);
  }, [currentPosition]);

  return (
    <nav>
      <ul
        className="relative flex gap-8"
        onMouseLeave={() => {
          setPosition(currentPosition);
        }}
      >
        {LINKS.map((link) => (
          <NavItem
            key={link.path}
            setCurrentPosition={setCurrentPosition}
            setPosition={setPosition}
            path={link.path}
          >
            <Link href={link.path} className="inline-block">
              {link.name}
            </Link>
          </NavItem>
        ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

export default Nav;
