import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { LuMessageSquareText } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";

const Sidebar = ({prevPrompts, onNewChat, onSelectPrompt}) => {
  const [extended, setExtended] = useState(false);
 

  return (
    <>
    <div
      className={`bg-black/30 backdrop-blur-lg w-fit text-white rounded-xl sm:-ml-9 ml-0 border border-white/10 shadow-lg h-screen sm:p-5 p-2 flex flex-col justify-between transition-all duration-300 ${
        extended ? "w-60" : "w-20"
      }`}
    >
      {/* Upper Section */}
      <div className="flex flex-col gap-6">
        {/* Menu Icon */}
        <div
          onClick={() => setExtended(prev => !prev)}
          className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition"
        >
          <MdMenu sm:size={24} size={20}  />
          {extended && <span className="font-medium">Menu</span>}
        </div>

        {/* New Chat */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition" onClick={onNewChat}>
          <CiSquarePlus sm:size={24} size={20} />
          {extended && <span className="font-medium">New Chat</span>}
        </div>

        {/* Recent */}
        {extended && (
          <div>
            <h2 className="text-gray-400 text-sm font-semibold mb-2">Recent</h2>
            {prevPrompts.length === 0 ? (
              <p className="text-gray-500 text-xs">No recent prompts</p>
            ) : (
              prevPrompts.map((prompt, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition"
                  onClick={() => onSelectPrompt && onSelectPrompt(prompt)}
                
                >
                  <LuMessageSquareText size={24} />
                  <span className="text-sm truncate">{prompt}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* Lower Section */}
      <div className="flex flex-col gap-4 border-t border-white/10 pt-4">
        <div className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition">
          <IoMdHelpCircleOutline sm:size={24} size={20} />
          {extended && <span className="text-sm">Help</span>}
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-2 sm:ml-0 ml-0.5 rounded-lg transition">
          <FaClockRotateLeft sm:size={20} size={16} />
          {extended && <span className="text-sm">Activity</span>}
        </div>
        <div className="flex items-center gap-3 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition">
          <IoSettingsOutline sm:size={24} size={20} />
          {extended && <span className="text-sm">Settings</span>}
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Sidebar;
