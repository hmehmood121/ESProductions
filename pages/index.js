import Head from 'next/head'
import Main from '../components/Main'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Plans from '../components/Plans'
import Reel from '../components/Reel'
import Dapp from '../components/Dapp'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import React, { useState, useEffect } from 'react'
import ReactPlayer from "react-player/lazy";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../components/firebase";


export default function Home() {
  const [hasWindow, setHasWindow] = useState(false);
  const [you, setYou] = useState([])

  const linkColl = collection(db, "link");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
    const viewLinks = async () => {
      const data = await getDocs(linkColl);
   
      setYou(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    viewLinks()
  } , []);





  return (
    <div>
      <Head>
        <title>ESProductionz</title>
        <meta name="description" content="ESProductionz employ technological advancements as the support base of our skillsets in executing our goals and exceeding client’s expectations." />
        <link rel='icon' href='favi.png' />
      </Head>
    <FloatingWhatsApp className='cursor-pointer' phoneNumber='+17587129678' accountName='ESProductionz'  />
    <Main />
    <Reel />
    {/* {you?.map((item, index)=>( */}
      {/* <section key={index} className="text-gray-600 body-font"> */}
      <section className="text-gray-600 body-font">
          <div className="mt-5 justify-center items-center">
          <div className="max-w-600">
            {hasWindow && <ReactPlayer
              // url={item.lin}
              url={'https://www.youtube.com/watch?v=y787XWMRndI'}
              width="100%"
              loop={true}
              playing={true}
              controls={true}
            />}
          </div>
          </div>
  </section>
  {/* )) */}

{/* } */}
    <Services />
    <Projects />
    <Dapp />
    <Plans />
    <About />
    <Contact />
    </div>
  )
}
