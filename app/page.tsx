import TypeWriter from "@/components/TypeWriter";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <TypeWriter delay={1} />
        </div>
      </div>
    </section>
  );
}
