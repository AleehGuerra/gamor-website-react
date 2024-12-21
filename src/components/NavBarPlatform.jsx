import { useState,useEffect } from "react";
export default function NavBarPlatform(){
    return(
        <nav className="rounded-full bg-gray-700/20 shadow-2xl h-12 mt-7">
            <ul className="flex h-full flex-row gap-7 p-3">
                <li className="cursor-pointer rounded-full px-3 h-full hover:bg-gray-700/30">
                    Party
                </li>
                <li className="cursor-pointer rounded-full px-3 h-full hover:bg-gray-700/30">
                    Match
                </li>
                <li className="cursor-pointer rounded-full px-3 h-full hover:bg-gray-700/30">
                    Streams
                </li>
            </ul>
        </nav>
    )
}