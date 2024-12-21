import React, {useState,useEffect} from "react";

export default function ClockComponent(){
    const [currentTime, setcurrentTime] = useState(new Date());
    useEffect(() => {
        const timerId = setInterval(() => {
            setcurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);
    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return(
        <div className="relative w-full flex flex-row justify-center">
            <button className="bg-white w-24 rounded-full mt-7 py-2 font-bold text-indigo-700/70">
            <button className="absolute text-white left-24 rounded-full bg-indigo-400/30 p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-plus">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                            <path d="M16 19h6" />
                            <path d="M19 16v6" />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
                        </svg>
            </button>
            {formattedTime}
            </button>
           
        </div>
    )
}