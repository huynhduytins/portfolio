import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Technologies from "@/components/Technologies";
import TypeWriter from "@/components/TypeWriter";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="h-full flex flex-col xl:flex-row items-center justify-between p-8 pb-4 xl:pt-12">
          <div className="text-center xl:text-left">
            <TypeWriter delay={1} />
            <div className="mt-16 flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="/files/CV-Frontend-Huynh_Duy_Tin.pdf"
                download="CV-Frontend-Huynh_Duy_Tin.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Dowload CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0 flex gap-6">
                <Socials />
              </div>
            </div>
          </div>
          <Photo />
        </div>
        <Technologies />
      </div>
    </section>
  );
}
