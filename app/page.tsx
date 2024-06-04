import BiddingCard from '@/components/cards/bidItemCard';
import Container from '@/components/layout/container';
import { database } from '@/db/database';

const Home = async () => {
  const allItems = await database.query.items.findMany();

  return (
    <Container className='max-w-7xl mx-auto px-5 pt-6'>
      <h1 className='px-1 pt-2 pb-4 text-xl sm:text-2xl'>Live Bids</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {allItems.map((item) => (
          <BiddingCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            startingPrice={item.startingPrice}
            bidInterval={item.bidInterval}
            currentBid={item.currentBid}
            endDate={item.endDate}
            createdOn={item.createdOn}
            className='col-span-1'
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
