import { auth } from '@/auth';
import ArrowLinkButton from '@/components/arrowLinkButton';
import BidCard from '@/components/cards/bidCard';
import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getBidsForItem } from '@/data-access/bids';
import { getItem } from '@/data-access/item';
import { formatToDollars } from '@/utils/currency';
import { formatDate } from '@/utils/dateAndTime';
import { FileImage } from 'lucide-react';

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

  if (!item) {
    return (
      <Container>
        <EmptyItemState />
      </Container>
    );
  }

  const allBids = await getBidsForItem(parsedItemId);

  const hasBids = allBids.length > 0;

  const canBid = session && item?.userId !== session?.user?.id;

  return (
    <Container className='space-y-4'>
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

          <div className='my-2 h-52 sm:h-80 flex items-center justify-center rounded-sm bg-muted'>
            <FileImage size='30' />
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
              {formatDate(item.endDate)}
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
              <span className='block text-sm text-gray-500'>Current Bid</span>$
              {formatToDollars(item.currentBid)}
            </p>
          </div>

          <form action={createBidAction.bind(null, item.id)}>
            <Button disabled={!canBid} className='mt-4 w-full'>
              Place Bid
            </Button>
          </form>

          {!canBid && (
            <p className='text-gray-500 text-sm'>
              Either you are not logged in or you are self bidding on this item.
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
            <h2 className='ml-1 mb-2 text-xl'>Current Bids</h2>

            {hasBids ? (
              <ul className='divide-y-2 divide-muted'>
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
            <h2 className='ml-1 mb-2 text-xl'>Notes</h2>

            <p className='p-4 text-center text-gray-500 italic'>
              There are no notes available for this item.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
};

export default Item;
