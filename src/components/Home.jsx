import React from 'react'
import logo2 from './logo2.png'
import Navbar from './Navbar'
import { div } from 'motion/react-client'
import gemini from './gemini.png'
import { MdMenu } from "react-icons/md";


const Home = ({ onTryChatbot }) => {
  return (
    <>

      <div className=' h-[738px] w-[1510px] absolute bottom-10 z-50 flex flex-col '>
        {/* Nav and logo */}
        <div className='flex pl-10 pr-10'>
          <img src={logo2} alt="" className='h-30 ml-5' />
          <div className='ml-[28vw] mt-11'>
            <Navbar />
          </div>
        </div>
        <div className="flex pl-10 pr-10 gap-60 mt-10">
  {/* Left section (text + buttons) */}
  <div className="ml-5 -mt-8">
    <div className="p-1 flex flex-col gap-2">
      <h1 className="text-white text-6xl leading-tight">
        AI-POWERED <br /> CONVERSATION
      </h1>
      <p className="text-white text-[18px] p-2">
        We build intelligent, responsive chatbots <br /> that elevate customer experience,
        automate <br />support, and enhance engagement.
      </p>
    </div>
    <div className="pl-2 mt-1 flex gap-4">
      <button onClick={onTryChatbot} className="bg-white rounded-lg px-6 py-3 cursor-pointer">Try the Chatbot</button>
      <button className="px-6 py-3 rounded-lg cursor-pointer bg-[#0e1320d2] text-white font-medium border border-gray-900 hover:bg-gray-900">
        Explore Features
      </button>
    </div>
  </div>

  {/* Right section  */}
  <div className="relative bottom-12">
  {/* Parent div */}
  <div className="bg-black/30 backdrop-blur-md rounded-xl border border-white/8 shadow-lg w-[500px] text-white font-mono overflow-hidden parent pb-6">
    {/* Top bar with mac-style buttons */}
    <div className="flex items-center gap-2 px-4 py-4 bg-black/10 border-white/10">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      <MdMenu className='ml-[25vw] opacity-75' />
    </div>

    {/* Code content */}
    <div className='p-2 w-fit bg-black/5 backdrop-blur-md rounded-xl border border-white/10 shadow-lg ml-5 '>
    <pre className="p-4 text-sm leading-6 whitespace-pre-wrap">
{`document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const button = document.createElement("button");
  button.textContent = \`Click Me: \${count}\`;

  button.addEventListener("click", () => {
    count++;
    button.textContent = \`Click Me: \${count}\`;
  });

  document.body.appendChild(button);
});`}
    </pre>
    </div>
  </div>

  {/* Child div overlapping */}
  <div className="absolute top-1/2 mt-16 left-1/2 bg-black/36 backdrop-blur-md rounded-xl p-4 text-white font-mono w-[380px] border border-white/10 shadow-lg child">
    <pre className="whitespace-pre-wrap text-sm">
    {`import React, { useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Click Me: {count}
    </button>
  );
}`}
    </pre>
  </div>
</div>



</div>
<div className='h-16 w-fit p-2 flex gap-x-7 bottom-18 gap-y-3 relative ml-16 flex-wrap'>
  <div className='w-fit bg-black/20 text-white rounded-xl border h-fit border-white/10 shadow-lg p-4 flex gap-2'>
  <img src={gemini} alt="" className='h-10' />
  <h1>Powered by <br /> Google Gemini API</h1>
  </div>

  <div className='w-[215px] bg-black/20 text-white rounded-xl border h-fit border-white/10 shadow-lg p-4 flex gap-2 items-center justify-center'>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
  <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
</svg>
  <h1>Real-time <br /> AI Responses</h1>
  </div>
  <div className='w-full'></div>

  <div className='w-[215px] bg-black/20 text-white rounded-xl border h-fit border-white/10 shadow-lg p-4 flex gap-2 justify-center items-center'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
  <h1>Context-Aware <br /> Conversations</h1>
  </div>

  <div className='w-[215px] bg-black/20 text-white rounded-xl border h-fit border-white/10 shadow-lg p-4 flex gap-2 justify-center items-center'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
  <h1>Multi-language <br /> support</h1>
  </div>
  
  
  
  
  </div>
      </div>

    </>
  )
}

export default Home

