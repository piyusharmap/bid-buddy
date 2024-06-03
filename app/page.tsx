import BiddingCard from '@/components/cards/BidItemCard';
import { database } from '@/db/database';

const Home = async () => {
  const allItems = await database.query.items.findMany();

  return (
    <div className='max-w-7xl mx-auto px-5 pt-6'>
      <h1 className='mb-4 font-medium text-2xl'>Items Available to Bid</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {allItems.map((item) => (
          <BiddingCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            startingPrice={item.startingPrice}
            className='col-span-1'
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
