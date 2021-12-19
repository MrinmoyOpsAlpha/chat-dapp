import Head from "next/head";
import Login from "../components/Login";
import Header from "../components/Header";
import { useMoralis } from "react-moralis";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) {
    return <Login />;
  }

  return (

      <div className=" h-screen overflow-y-scroll bg-gradient-to-t from-indigo-500 via-sky-500 to-pink-300">
        <Head>
          <title>The Metaverse</title>
        </Head>

        <div className="max-w-screen-2xl mx-auto">
          <Header/>
          <Messages/>
        </div>
      </div>

  );
}


