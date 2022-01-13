import Head from "next/head";
import MyPersonalPhoto from "../components/atoms/my-personal-photo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nerea Pardo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-stone-900 flex flex-col items-center pt-24 text-white">
        <MyPersonalPhoto />
        <h1 className="my-6 text-5xl">
          Hi, I am <span className="font-bold">Nerea Pardo Cundíns</span>
        </h1>
        <h2 className="font-light text-4xl">Nice to meet you!</h2>
        <div className="mx-8">
          <p className="font-light my-8 text-stone-400 text-2xl">
            I am a Full-Stack web developer and my motivation is to help people
            through quality software that can make their lives easier.
          </p>
          <div className="flex justify-around">
            <Link href="/aboutme">
              <a className="rounded-3xl border-2 border-neon py-1 px-4 font-light text-neon text-2xl">
                More about me &#10141;
              </a>
            </Link>
            <Link href="https://drive.google.com/file/d/1QHBUhQEKw-sKHnl4cO-3Dvtuc-plKL7-/view?usp=sharing">
              <a
                className="rounded-3xl bg-neon py-1 px-4 text-2xl text-slate-900 font-bold"
                target="_blank"
              >
                My resume
              </a>
            </Link>
          </div>
        </div>

        <h5>project</h5>
        <div className="container mx-auto w-full h-full m-12 px-12">
          <div className="relative wrap overflow-hiddenh-full">
            <div
              className="border-2-2 absolute border-opacity-20 border-neon h-full border"
              style={{ left: "50%" }}
            ></div>
            {/* right timeline */}
            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-neon shadow-xl w-8 h-8 rounded-full"></div>
              <div className="order-1 bg-stone-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-stone-800 text-xl">
                  Home Hopper
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            {/*  left timeline */}
            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-neon shadow-xl w-8 h-8 rounded-full"></div>
              <div className="order-1 bg-stone-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-stone-800 text-xl">
                  Home Connection
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-stone-800 text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>

            {/* right timeline */}
            <div className="flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-neon shadow-xl w-8 h-8 rounded-full"></div>
              <div className="order-1 bg-stone-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-stone-800 text-xl">
                  Money Rain
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
