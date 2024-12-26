import CateoryCard from '../components/CategoryCard';

export default function Categories(){
    const categories = [
        { name: 'Action Games', rank: 1, background:'/src/assets/Action.webp' },
        { name: 'Adventure Games', rank: 2 , background:'/src/assets/Adventure.webp'},
        { name: 'Sport Games', rank: 3, background:'/src/assets/Sports.webp' },
        { name: 'Strategy Games', rank: 4, background:'/src/assets/Strategy.webp' },
        { name: 'Survival Games', rank: 5, background:'/src/assets/Survival.webp' },
        { name: 'Shooter Games', rank: 6 , background:'/src/assets/Shooter.webp'},
        { name: 'Arcade Games', rank: 7, background:'/src/assets/Arcade.webp' },
        { name: 'All Categories', rank: 'VIEW ALL', background:'/src/assets/More.webp' },
    ];
    return(
        <div className='mt-40 grid grid-cols-1 md:grid-cols-4 md:gap-3'>
        {categories.map((category,index)=>(
            <CateoryCard key={index} name={category.name} rank={category.rank} backgroundImage={category.background} />
        ))}
        </div>
    )
}