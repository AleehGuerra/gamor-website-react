export default function Streamer({index, name, avatar, onAvatarClick}){
    return(
        <div className="flex flex-row w-full">
        <section className="w-3/5">
        <span className="">{index+1} <span>{name}</span></span>
        </section>
        <section className="w-1/5">
        <img src={avatar} alt={`${name}'s avatar`} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
        </section>
        <section className="w-1/5">
        <button className="bg-slate-500/20 w-1/2 rounded-lg" onClick={()=> onAvatarClick(avatar)}>+</button>
        </section>
        </div>
    )
    }