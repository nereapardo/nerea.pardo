import Head from "next/head";
import MyPersonalPhoto from "components/atoms/my-personal-photo";
import Link from "components/atoms/link";
import ProjectTimeline from "components/organisms/project-timeline/ProjectTimeline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  let width;
  const breakpoint = 1024;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
    console.log(width);
  }

  return (
    <div className="overflow-y-auto">
      <Head>
        <title>Nerea Pardo</title>
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content="Nerea Pardo"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content="https://i.postimg.cc/J0Z7821v/preview.jpg"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:description"
          content="Nerea Pardo portfolio"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content="https://www.nereapardo.com/"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center pt-16 text-white">
        <MyPersonalPhoto />
        <h1 className="my-6 text-2xl px-6 md:text-5xl text-center">
          Hi, I am <span className="font-bold">Nerea Pardo Cundíns</span>
        </h1>
        <h2 className="font-light text-xl md:text-4xl">Nice to meet you!</h2>
        <div className="mx-8 mb-24">
          <p className="font-light my-8 text-stone-400 text-2xl mb-14 text-center">
            I am a Full-Stack web developer and my motivation is to help people
            through quality software that can make their lives easier.
          </p>
          <div className="flex flex-col sm:flex-row justify-around">
            <Link
              href="/about-me"
              type="secondary"
              className="mb-4 sm:mb-0 inline-flex justify-center items-center"
            >
              More about me
              <span>
                <FontAwesomeIcon
                  icon={faLongArrowAltRight}
                  className="text-lg w-4 h-4 ml-2 inline-flex items-center"
                />
              </span>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1m7OWhAJIlo2x9ZdPNF5I5ZKaAzG5t-tO/view?usp=sharing"
              external
              type="primary"
              className="mb-4 sm:mb-0 inline-flex justify-center items-center"
            >
              My resume
            </Link>
          </div>
        </div>
        <h2 className="text-5xl mb-6 font-light">My projects</h2>
        <ProjectTimeline />
      </div>
    </div>
  );
}
