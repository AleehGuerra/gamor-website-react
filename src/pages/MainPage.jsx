import { Link } from 'react-router-dom';
import ClockComponent from '../components/ClockComponent';
import NavBarPlatform from '../components/NavBarPlatform';
import SearchComponent from '../components/SearchComponent';
import { useState } from 'react';
import Categories from '../components/Categories';
 export default function MainPage(){
    const [selectedAvatars, setSelectedAvatars] = useState([null, null, null]); 

    const handleAvatarClick = (avatar) => {
        const updatedAvatars = [...selectedAvatars];
        const emptyIndex = updatedAvatars.findIndex((img) => img === null);        
        if (emptyIndex !== -1) {
            updatedAvatars[emptyIndex] = avatar;
        } else {
            updatedAvatars[0] = avatar;
        }
        setSelectedAvatars(updatedAvatars);
    };
    return(
 <div className="w-screen flex flex-col items-center md:p-8">
        <nav className='mb-32 flex flex-col md:flex-row text-center w-full md:place-content-between'>
            <section className='md:absolute md:left-2/4'>
                <h1 className='font-bold text-4xl'>Gamor</h1>
            </section>
            <section className='justify-items-center '>
                <ul className='flex flex-row gap-4 md:gap-16'>
                    <li className='hover:text-blue-500'>
                        Home
                    </li>
                    <li className='hover:text-blue-500'>
                        Streams
                    </li>
                    <li className='hover:text-blue-500'>
                        Party
                    </li>
                    <li className='hover:text-blue-500'>
                        Premium
                    </li>
                </ul>
            </section>
            <section className='flex flex-row w-full md:w-1/4 mt-2'>
            <Link to="../Login" className='w-2/4 content-center'>Sign In</Link>
            <button className='bg-black text-white rounded-full p-2'>Create Account</button>
            </section>
        </nav>
        <section className='flex flex-col md:flex-row md:gap-4'>
        <section className=" dark:bg-neutral-800 p-5 md:hover:scale-110 md:hover:mr-10 transition ease-in-out delay-150  rounded-md shadow-2xl w-80 min-h-96 h-128 md:h-200 flex flex-col  text-center justify-center">
        <span className="mb-10 text-4xl text-start font-bold">
            start <br /> <span className="text-orange-500 dark:text-indigo-500">streaming <br /> </span> games <br /> differently
        </span>
        <span>
            gamor now has <span className="font-bold underline decoration-indigo-500 dark:decoration-orange-500"> stream party</span> platform
        </span>
        <section className='flex flex-row gap-4 mt-7'>
            <button className='rounded-3xl p-2 w-2/4 dark:bg-slate-600/60 shadow-2xl'>
                Create Account
            </button>
            <Link to="../Login" className='w-2/4 content-center'>Sign In</Link>
        </section>       
        </section>

        <section className="md:hover:scale-110 md:hover:mx-10 transition ease-in-out delay-150 w-80 min-h-96 h-128 md:h-200 rounded-md shadow-2xl bg-white-bg dark:bg-black-bg bg-cover bg-center justify-items-center">
        <section className='w-full flex flex-col items-center h-1/3'>
        <h3 className='font-bold text-xl text-white mt-4'>Fortnite New Season</h3>
        <span className='text-white'>Join Live Stream</span>
        <ClockComponent/>
        </section>
        <section className='w-full p-5 h-2/3 grid grid-cols-2 place-content-around' id='streamers'>
        {selectedAvatars.map((avatar, index) => (
                        <div key={index} className='size-16'>
                            {avatar && <img src={avatar} alt={`Selected Avatar ${index + 1}`} className="w-full h-full object-cover rounded-lg" />}
                        </div>
                    ))}
        </section>
        </section >
        
        <section className="dark:bg-neutral-800 md:hover:scale-110 md:hover:ml-10 transition ease-in-out delay-150 w-80 min-h-96 h-128 md:h-200 rounded-md shadow-2xl justify-items-center p-4">
        <h2 className='text-2xl mt-8 dark:text-slate-700 text-slate-800/20 font-bold'>01. <span className='dark:text-white ml-2 text-base text-black font-semibold'>ChoosePlatform</span></h2>
        <NavBarPlatform/>
        <h2 className='text-2xl mt-8 dark:text-slate-700 text-slate-800/20 font-bold'>02. <span className='dark:text-white ml-2 text-base text-black font-semibold'>Searching Game</span></h2>
        <SearchComponent onAvatarClick={handleAvatarClick}/>
        </section>
        </section>
        <Categories/>
 </div>
    )
 }