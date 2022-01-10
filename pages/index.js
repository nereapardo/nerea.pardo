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
      <div className="bg-stone-900">
        <MyPersonalPhoto />
      </div>
    </>
  );
}
