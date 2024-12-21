import React, { useState } from 'react';

export default function CateorieCard({name,rank,backgroundImage}){
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return(
        <div className='h-32 w-64 dark:bg-neutral-800 mb-5 font-bold rounded-lg text-xl flex flex-col p-4 hover:text-white'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            backgroundImage: isHovered ? `url(${backgroundImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
      <span className='flex flex-row mb-2 '>/<span >{rank}</span></span>
      <span>{name}</span>
      <span>
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg>
      </span>
      </div>  
    )
}