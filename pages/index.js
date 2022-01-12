import Head from "next/head";
import MyPersonalPhoto from "../components/atoms/MyPersonalPhoto";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nerea Pardo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-stone-900 flex flex-col items-center pt-12 text-white">
        <MyPersonalPhoto />
        <h1 className="mt-6">
          Hi, I am <span className="font-bold">Nerea Pardo Cundíns</span>
        </h1>
        <h2 className="font-light">Nice to meet you!</h2>
        <div className="mx-8">
          <p className="font-light my-8 text-stone-400">
            I am a Full-Stack web developer and my motivation is to help people
            through quality software that can make their lives easier.
          </p>
          <div className="flex justify-around">
            <button className="rounded-3xl border-2 border-neon py-1 px-4 text-sm font-light text-neon">
              My resume
            </button>
            <button className="rounded-3xl bg-neon py-1 px-4 text-sm text-slate-900">
              More about me &#10141;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
