import Link from 'next/link';

import BiddingCard from '@/components/cards/BidItemCard';
import ItemCard from '@/components/cards/ItemCard';
import { Button } from '@/components/ui/button';
import { database } from '@/db/database';

import { auth } from './auth';

const Home = async () => {
  const session = await auth();
  const allItems = await database.query.items.findMany();

  return (
    <div className='max-w-7xl mx-auto px-5 py-4 space-y-4'>
      <div className='flex justify-end gap-2'>
        <Button disabled={!session} asChild>
          <Link href='/item/create'>Create Bid</Link>
        </Button>
      </div>

      <h1 className='font-medium text-2xl'>Items Available to Bid</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {allItems.map((item) => (
          <BiddingCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            startingPrice={item.startingPrice / 100}
            className='col-span-1'
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
