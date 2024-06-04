import Image from 'next/image';

import { auth } from '@/app/auth';
import ArrowLinkButton from '@/components/ArrowLinkButton';
import BidCard from '@/components/cards/BidCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getItem } from '@/data-access/item';
import { database } from '@/db/database';
import { bids } from '@/db/schema';
import { formatToDollars } from '@/utils/currency';
import { desc, eq } from 'drizzle-orm';

import PlaceholderImage from '../../../public/placeholder_image.svg';
import EmptyItemState from './EmptyState';
import { createBidAction } from './actions';

const Item = async ({ params: { itemId } }: { params: { itemId: string } }) => {
  const session = await auth();

  const parsedItemId = parseInt(itemId);

  if (isNaN(parsedItemId)) {
    return (
      <div className='max-w-7xl mx-auto px-5 pt-6'>
        <EmptyItemState />
      </div>
    );
  }

  const item = await getItem(parseInt(itemId));

  const allBids = await database.query.bids.findMany({
    where: eq(bids.itemId, parsedItemId),
    orderBy: desc(bids.amount),
  });

  const canBid = session && item?.userId !== session?.user?.id;

  const hasBids = allBids.length !== 0;

  return (
    <div className='max-w-7xl mx-auto px-5 pt-6 space-y-4'>
      {!item ? (
        <EmptyItemState />
      ) : (
        <div className='grid grid-cols-4 gap-6'>
          <div className='col-span-4 md:col-span-2'>
            <ArrowLinkButton
              title='All Bids'
              link='/'
              direction='LEFT'
              className='col-span-4'
            />

            <h1 className='my-4 col-span-2 font-light text-xl sm:text-2xl md:text-3xl truncate'>
              Bidding for{' '}
              <span className='font-medium text-red-500'>{item.name}</span>
            </h1>

            <div className='h-52 sm:h-80 rounded-lg overflow-hidden'>
              <Image
                src={PlaceholderImage}
                alt='Not Available'
                width='300'
                height='300'
                className='w-full h-full object-cover'
              />
            </div>

            <div className='my-4 grid grid-cols-2 gap-4'>
              <p className='col-span-2 text-lg'>
                <span className='block text-sm text-gray-500'>Description</span>
                {item.description}
              </p>

              <p className='col-span-1 text-lg'>
                <span className='block text-sm text-gray-500'>
                  Available Till
                </span>
                Jul 15, 2024
              </p>

              <p className='col-span-1 text-lg'>
                <span className='block text-sm text-gray-500'>
                  Bidding Interval
                </span>
                ${formatToDollars(item.bidInterval)}
              </p>

              <p className='col-span-1 text-3xl'>
                <span className='block text-sm text-gray-500'>
                  Starting Price
                </span>
                ${formatToDollars(item.startingPrice)}
              </p>

              <p className='col-span-1 text-3xl text-green-500'>
                <span className='block text-sm text-gray-500'>Current Bid</span>
                ${formatToDollars(item.currentBid)}
              </p>
            </div>

            <form action={createBidAction.bind(null, item.id)}>
              <Button disabled={!canBid} className='mt-4 mb-2 w-full'>
                Place Bid for $
                {formatToDollars(item.currentBid + item.bidInterval)}
              </Button>
            </form>

            {!canBid && (
              <p className='text-gray-500 text-sm'>
                Either you are not logged in or you are self bidding on this
                item.
              </p>
            )}
          </div>

          <Tabs
            defaultValue='bids'
            className='col-span-4 md:col-span-2 space-y-4'
          >
            <div className='flex justify-end'>
              <TabsList>
                <TabsTrigger value='bids' className='px-5 font-medium'>
                  Bids
                </TabsTrigger>

                <TabsTrigger value='notes' className='px-5 font-medium'>
                  Notes
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value='bids'>
              <h2 className='mb-2 font-medium text-xl'>Current Bids</h2>
              {hasBids ? (
                <ul className='space-y-2'>
                  {allBids.map((bid: any) => {
                    return <BidCard key={bid.id} {...bid} />;
                  })}
                </ul>
              ) : (
                <p className='p-4 text-center text-gray-500 italic'>
                  There are no bids available for this item.
                  <br />
                  Be the first one to bid.
                </p>
              )}
            </TabsContent>

            <TabsContent value='notes'>
              <h2 className='mb-2 font-medium text-xl'>Notes</h2>
              <p className='p-4 text-center text-gray-500 italic'>
                There are no notes available for this item.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  );
};

export default Item;
