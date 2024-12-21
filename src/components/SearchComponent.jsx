import { useEffect,useState } from "react";
import './SearchComponent.css';
import Streamer from "./Streamer";
export default function SearchComponent({ onAvatarClick }){
 const [filterMenuVisible, setFilterMenuVisible] = useState(false);
 const [selectedGenre, setSelectedGenre] = useState('');
 const [streamers,setStreamers] = useState([]);
 const [searchGame, setSearchGame] = useState('');
 const allStreamers = [
    { name: 'Auron', games: ['COD Warzone', 'FallGuys', 'Minecraft', 'GTA V'], genres: ['Action','Fantasy','SandBox','Adventure','Survival'], avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bf1d52e3-b46b-4c07-9b4f-a1ab8c4e40f8-profile_image-150x150.png' },
    { name: 'RubiusOMG', games: ['Minecraft', 'Diablo'], genres: ['Adventure','Fantasy','Survival'], avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a2592e98-5ba6-4c9a-9d9e-cf036d6f64c2-profile_image-150x150.jpg' },
    { name: 'HuronaRolera', games: ['Terraria', 'FIFA'], genres: ['Sports', 'Action','Survival'], avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/71735f15-4003-4104-a952-5152f262dc34-profile_image-150x150.png' },
    { name: 'DjMarRiio', games: ['UFC', 'FIFA'], genres: ['Sports'], avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/3028ed95-b681-4f89-92b5-1c383d95acf3-profile_image-150x150.png' },
    { name: 'elxokas', games: ['Pokemon', 'WoW'], genres: ['Fantasy', 'Adventure', 'MMORPG'], avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/198c0fe9-cf41-4ef1-ad55-405c1e599f25-profile_image-150x150.png' },
    { name: 'Ibai', games: ['League of Legens', 'Minecraft'], genres: ['Adventure', 'Action'], avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-150x150.png' },
    { name: 'Folagor', games: ['Pokemon', 'League of Legends'], genres: ['Adventure', 'MMORPG'], avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/folagorlives-profile_image-2456af9afdbefda3-150x150.jpeg' },
    { name: 'Perxhita', games: ['GTA V', 'FIFA', 'Pokemon', 'Minecraft'], genres: ['SandBox', 'Action'], avatar: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6213a284-c133-41cf-ad99-ebef738eb550-profile_image-150x150.png' },

];
const handleFilterToggle = () => {
    setFilterMenuVisible(!filterMenuVisible);
};
const handleSearch = () => {
    const filteredStreamers = allStreamers.filter(streamer => {
        const matchesGame = streamer.games.some(game => game.toLowerCase().includes(searchGame.toLowerCase()));
        const matchesGenre = streamer.genres.includes(selectedGenre) || selectedGenre === ''; // Cambiado para usar includes
        return matchesGame && matchesGenre;
    });
    
    setStreamers(filteredStreamers);
};
const handleAvatarClick = (avatar) => {
    onAvatarClick(avatar);
    console.log(avatar);
};
return(
    <div className="h-72 md:h-96 w-full p-5 rounded-xl shadow-2xl">
        <section className="flex flex-row space-x-24 w-full h-1/5">
        <span className="font-bold text-lg w-4/5">{searchGame ? searchGame:selectedGenre}</span>
        <button className="cursor-pointer w-1/5" onClick={handleFilterToggle}>
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-horizontal"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 6l8 0" /><path d="M16 6l4 0" /><path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 12l2 0" /><path d="M10 12l10 0" /><path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M4 18l11 0" /><path d="M19 18l1 0" /></svg>
        </button>
        </section>
        {filterMenuVisible && (
                <div className="absolute h-14 dark:text-black bg-white rounded-lg z-40 border border-black/20 p-1">
                    <section className="h-full flex flex-col">
                        <div className="h-1/2">
                            <select className="h-5 bg-white/20 overflow-y-scroll" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                                <option value="">All</option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Sports">Sports</option>
                                <option value="Fantasy">Fantasy</option>
                                <option value="Strategy">Strategy</option>
                                <option value="Arcade">Arcade</option>
                                
                            </select>
                        </div>
                        <div className="h-1/2">
                            <input
                                type="text"
                                className="shadow-2xl border-solid border-black bg-slate-400/20 rounded-lg"
                                value={searchGame}
                                onChange={(e) => setSearchGame(e.target.value)}
                            />
                        </div>
                    </section>
                </div>
            )}
        <section className="h-4/5 flex items-center flex-col">
        <div className="h-4/5 w-full">
            <ul className="h-full w-full overflow-y-scroll md:scrollbar-hidden ">
            {streamers.length > 0 ? (
                        streamers.map((streamer, index) => (
                            <li key={index} className="mb-3" >
                            <Streamer
                                index={index} 
                                name={streamer.name} 
                                avatar={streamer.avatar}  
                                onAvatarClick={handleAvatarClick} 
                            />
                            </li>
                        ))
                    ) : (
                        <li>No se encontraron streamers.</li>
                    )}
            </ul>
        </div>
        <button onClick={handleSearch} className="h-1/5 font-bold dark:bg-white dark:text-black cursor-pointer rounded-lg bg-black text-white p-3 w-full">
            Search Now
        </button>
        </section>
    </div>
)

}