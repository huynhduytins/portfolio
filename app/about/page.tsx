import Experience from "@/components/Experience";
import TextHighlight from "@/components/TextHighlight";
import Link from "next/link";

const About = () => {
  return (
    <section className="container mx-auto h-full pt-8 xl:pt-12">
      <div className="text-center mb-8">
        <h1 className="h3 text-accent">About me</h1>
        <p>
          if you&apos;re <TextHighlight text="wondering" /> who{" "}
          <TextHighlight text="I am" />
          ...
        </p>
      </div>
      <div className="flex flex-col gap-8 px-14">
        <p>
          Hi, I am <TextHighlight text="Tin" />, I&apos;m 23 years old. I got a
          bachelor of{" "}
          <span className="text-accent">
            Electronics and Communications Engineering
          </span>{" "}
          at <span className="text-accent">HCM University of Science</span> -
          HCMUS (2019 - 2023). Besides, I am really passionate about{" "}
          <TextHighlight text="Javascript" /> and{" "}
          <TextHighlight text="Web Development" />.
        </p>
        <p>
          I started learning web programming in 2021. Before that, I had a
          background in C / C ++ programming so getting access to Javascript is
          not difficult. I searched many different sources to learn about this
          language for example:{" "}
          <Link href="https://developer.mozilla.org/" className="underline">
            Developer mozilla
          </Link>
          ,{" "}
          <Link
            href="https://github.com/getify/You-Dont-Know-JS"
            className="underline"
          >
            You Don&apos;t Know JS
          </Link>
          ....
        </p>
        <p>
          In August 2022, when school was almost done, I decided to do an
          internship at a company to experience what a real environment is like.
          I learned a lot from my boss and colleagues while working.
        </p>
        <p>
          I want to be a good person in the field that I have chosen so I tried
          a lot, worked hard.
        </p>
      </div>
      <Experience />
    </section>
  );
};

export default About;
