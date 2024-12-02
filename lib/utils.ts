import { clsx, type ClassValue } from "clsx";
import { Dispatch, RefObject, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPosition(
  ref: RefObject<HTMLLIElement>,
  callback: Dispatch<
    SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >
) {
  if (!ref?.current) return;

  const { width } = ref.current.getBoundingClientRect();

  callback({
    left: ref.current.offsetLeft,
    width,
    opacity: 1,
  });
}
