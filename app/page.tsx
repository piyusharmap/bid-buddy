import BiddingCard from '@/components/cards/bidItemCard';
import Container from '@/components/layout/container';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { database } from '@/db/database';

const Home = async () => {
  const allItems = await database.query.items.findMany();

  return (
    <Container className='max-w-7xl mx-auto px-5 pt-6'>
      <h1 className='pt-2 pb-4 text-xl sm:text-2xl'>
        <span className='font-medium text-red-500'>Live </span>Bids
      </h1>

      <Select>
        <SelectTrigger className='mb-2 w-[180px]'>
          <SelectValue placeholder='Filter Bids' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='all'>All</SelectItem>
            <SelectItem value='pastDay'>Past 24 hours</SelectItem>
            <SelectItem value='pastWeek'>Past week</SelectItem>
            <SelectItem value='pastMonth'>Past month</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

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
            className='col-span-1'
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
