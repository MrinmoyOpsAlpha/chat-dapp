import Head from 'next/head';
import Login from '../components/Login';

export default function Home() {

  const isAuthenticated=false;

  if (!isAuthenticated) return <Login/>

  return (
    <div className="h-screen">
      <Head>
        <title>The Metaverse</title>
      </Head>
      
      <h1>Welcome to the challenge</h1>     
    </div>
  )
}
