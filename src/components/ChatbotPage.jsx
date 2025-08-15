import React, { useState } from 'react'
import Navbar from './Navbar'
import logo2 from './logo2.png'
import logo22 from './logo22.png'
import Sidebar from './Sidebar'
import { FaRegCompass } from "react-icons/fa";
import '../index.css'
import { LuImagePlus } from "react-icons/lu";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { generateGeminiResponse, testGeminiAPI } from './gemini';
import gemini from './gemini.png'

// import { div } from 'motion/react-client';

const ChatbotPage = ({ onGoHome }) => {
  const [inputText, setInputText] = useState('');
  // load loading animation till response 
  const [isLoading, setIsLoading] = useState(false);
  // this will display recent prompts 
  const [recentPrompt, setRecentPrompt] =useState("")
  // store input history in sidebar 
  const [prevPrompts, setprevPrompts] =useState([])
  // this will hide intro text in chatbot 
  const [showResult, setShowResult] = useState(false);
  // display result on web page    
  const [resultData, setResultData] =useState("")
  // Function to format API response into structured HTML

  const [responseCache, setResponseCache] = useState({});
  // Function to format API response into structured HTML
  
  




// Function to format API response into structured HTML
const formatApiResponse = (text) => {
  let formatted = text;

  // Headings "## Heading" → big bold text
  formatted = formatted.replace(
    /^##\s(.+)/gm,
    "<h2 class='text-2xl font-extrabold mt-5 mb-3 text-white'>$1</h2>"
  );

  // Bold text "**text**" → <strong>
  formatted = formatted.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Bullet points "* text" → list items
  formatted = formatted.replace(/^\*\s(.+)/gm, "<li class='ml-6 list-disc'>$1</li>");

  // Wrap list items inside <ul>
  formatted = formatted.replace(/(<li[\s\S]*?<\/li>)/gm, "<ul class='mb-3'>$1</ul>");

  // Code blocks ```...```
  formatted = formatted.replace(
    /```([\s\S]*?)```/gm,
    "<pre class='bg-gray-900 text-green-400 p-3 rounded-md overflow-x-auto mb-4'><code>$1</code></pre>"
  );

  // Normal paragraphs (excluding existing tags)
  formatted = formatted.replace(
    /^(?!<h2|<ul|<pre|<li|<\/ul|<\/pre)(.+)$/gm,
    "<p class='mb-2 leading-relaxed'>$1</p>"
  );

  return formatted;
};



  const handleSendMessage = async () => {
    const prompt = inputText.trim();
    if (!prompt) return;

    setIsLoading(true);
    setInputText('');
    setShowResult(true);
    setRecentPrompt(prompt);
    setprevPrompts(prev => [prompt, ...prev]);
    console.log('Sending message:', prompt);


    try {
      const response = await generateGeminiResponse(prompt);
      if (response) {
        console.log('Chatbot Response:', response);
        const formatted = formatApiResponse(response);
        setResultData(formatted);
        setResponseCache(prev => ({ ...prev, [prompt]: formatted })); // format before displaying
      } else {
        setResultData('');
      }
    } catch (error) {
      console.error('Error getting response:', error);
      setResultData('');
    }
     finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInputText(suggestion);
  };

  const handleSelectPrompt = (prompt) => {
    const cached = responseCache[prompt];
    setRecentPrompt(prompt);
    if (cached) {
      setResultData(cached);
      setShowResult(true);
      setIsLoading(false);
    } else {
      setInputText(prompt);
      setShowResult(false);
    }
  };
 

  const handleNewChat = () => {
    setInputText('');
    setIsLoading(false);
    setRecentPrompt('');
    setShowResult(false);
    setResultData('');
  };

  // Test API on component mount
  React.useEffect(() => {
    console.log('ChatbotPage mounted - testing API...');
    testGeminiAPI();
  }, []);

  return (
    <>
      <div className='h-[738px] w-[1510px] absolute bottom-18 z-50 flex flex-col p-8 '>
        {/* Nav and logo */}
        <div className='flex pr-10'>
          <div className='flex gap-6'>
          <Sidebar prevPrompts={prevPrompts} onNewChat={handleNewChat} onSelectPrompt={handleSelectPrompt}   />
            <img src={logo2} alt="" className='h-30' />
            {/* <div className='flex flex-col'> */}
            {/* <div className='ml-[30vw] mt-11'>
            <Navbar onGoHome={onGoHome}/>
          </div> */}
            {/* </div> */}
            <div className='h-screen gap-7 ml-3 -mt-18 flex flex-col justify-center w-screen content text-white'>
              {!showResult
              ?
              <div className='ml-9'>
              <div className='text-[56px]'>
                <h1 className='texts w-fit'>Hello, User.</h1>

                <h1 className='text-gray-100' >how can I help you today</h1>
              </div>

              {/* Suggestion cards  */}
              <div className='flex gap-5 mt-8'>
                <div 
                  className='w-[220px] cursor-pointer h-[200px] p-5 bg-black/30 backdrop-blur-lg items-start justify-start text-white rounded-xl border border-white/10 shadow-lg hover:bg-black/50 transition-colors'
                  onClick={() => handleSuggestionClick('Suggest beautiful places to see on an upcoming road trip')}
                >
                  <h1 className=''>Suggest beautiful places to see on an upcoming road trip</h1>
                  <div className='ml-40 mt-16'><FaRegCompass size={26} />
                  </div>
                </div>
                <div 
                  className='w-[220px] cursor-pointer h-[200px] p-5 bg-black/30 backdrop-blur-lg items-start justify-start text-white rounded-xl border border-white/10 shadow-lg hover:bg-black/50 transition-colors'
                  onClick={() => handleSuggestionClick('Write a creative story about a magical forest')}
                >
                  <h1 className=''>Write a creative story about a magical forest</h1>
                  <div className='ml-40 mt-16'><FaRegCompass size={26} />
                  </div>
                </div>
                <div 
                  className='w-[220px] cursor-pointer h-[200px] p-5 bg-black/30 backdrop-blur-lg items-start justify-start text-white rounded-xl border border-white/10 shadow-lg hover:bg-black/50 transition-colors'
                  onClick={() => handleSuggestionClick('Explain quantum physics in simple terms')}
                >
                  <h1 className=''>Explain quantum physics in simple terms</h1>
                  <div className='ml-40 mt-16'><FaRegCompass size={26} />
                  </div>
                </div>
                <div 
                  className='w-[220px] cursor-pointer h-[200px] p-5 bg-black/30 backdrop-blur-lg items-start justify-start text-white rounded-xl border border-white/10 shadow-lg hover:bg-black/50 transition-colors'
                  onClick={() => handleSuggestionClick('Give me cooking tips for beginners')}
                >
                  <h1 className=''>Give me cooking tips for beginners</h1>
                  <div className='ml-40 mt-16'><FaRegCompass size={26} />
                  </div>
                </div>
              </div>
              </div>: 
              <div className='text-white'>
                <div className='p-2 max-h-[68vh] mt-6 overflow-y-scroll scrollbar w-[80vw]'>
                  <div className='mb-3 flex w-fit justify-center items-center gap-1.5 mr-20'>
                  <img src={logo22} alt="" className='h-18' />
                  <p className='bg-black/20 backdrop-blur-lg rounded-xl border border-white/20 p-3 shadow-lg h-fit '>{recentPrompt}</p>
                  </div>
                  <div className=''>
                   {isLoading
                   ?<div className='flex w-[62vw] flex-col gap-2 loader ml-5'>
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    <hr />
                    
                    
                    
                    
                   </div>:
                   <div className='flex gap-3 ml-3.5 '>
                    <img src={gemini} alt="" className='h-11.5' />
                  <div className='bg-white/5 backdrop-blur-lg rounded-xl border border-white/20 p-4 shadow-lg w-[57vw]' dangerouslySetInnerHTML={{ __html: resultData }} /> </div>
                   } 
                   
                   
                   
                   
                   </div>

                 
                </div>
              </div>
            }

              {/* searchbox */}
              <div className='flex bg-[#f0f4f9] mt-20 text-black p-3 justify-between gap-20 ml-13 odivpacity-85 w-[900px] rounded-xl absolute bottom-16 '>
                <input 
                  type="text" 
                  placeholder='Enter a prompt here' 
                  className='w-screen border border-none outline-none bg-transparent '
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                />
                <div className='flex gap-2'>
                  <div><LuImagePlus size={22} /></div>
                  <div><MdKeyboardVoice size={22} /></div>
                  <div 
                    className={`cursor-pointer ${isLoading ? 'opacity-50' : 'hover:scale-110'}`}
                    onClick={handleSendMessage}
                  >
                    <IoMdSend size={22} />
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>


{/*   const [resultData, setResultData] =useState("")
  const [responseCache, setResponseCache] = useState({});
  // Function to format API response into structured HTML */}

    </>
  )
}

export default ChatbotPage 


