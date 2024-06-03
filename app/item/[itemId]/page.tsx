import Image from 'next/image';

import { auth } from '@/app/auth';
import ArrowLinkButton from '@/components/ArrowLinkButton';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getItem } from '@/data-access/item';
import { Timer } from 'lucide-react';

import PlaceholderImage from '../../../public/placeholder_image.svg';
import EmptyItemState from './EmptyState';

const Item = async ({ params: { itemId } }: { params: { itemId: string } }) => {
  const session = await auth();

  const parsedItemId = parseInt(itemId);

  if (isNaN(parsedItemId)) {
    return (
      <div className='max-w-7xl mx-auto px-5 py-8'>
        <EmptyItemState />
      </div>
    );
  }

  const item = await getItem(parseInt(itemId));

  const canBid = session && item?.userId !== session?.user?.id;

  return (
    <div className='max-w-7xl mx-auto px-5 py-8 space-y-4'>
      {!item ? (
        <EmptyItemState />
      ) : (
        <div className='grid grid-cols-4 gap-2'>
          <ArrowLinkButton
            title='All Bids'
            link='/'
            direction='LEFT'
            className='col-span-4'
          />

          <h1 className='py-2 col-span-4 sm:col-span-2 font-light text-xl sm:text-2xl md:text-3xl truncate'>
            Bidding for{' '}
            <span className='font-medium text-red-500'>{item.name}</span>
          </h1>

          <div className='col-span-4 sm:col-span-2 flex items-center justify-end gap-1'>
            <Timer size='24' className='text-red-500' />
            <p className='text-lg sm:text-xl md:text-2xl'>00:15:45</p>
          </div>

          <div className='col-span-4 md:col-span-2 grid grid-cols-2 gap-4'>
            <div className='col-span-2 h-52 sm:h-80 rounded-lg overflow-hidden'>
              <Image
                src={PlaceholderImage}
                alt='Not Available'
                width='300'
                height='300'
                className='w-full h-full object-cover'
              />
            </div>

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
              $6.9
            </p>

            <p className='col-span-1 text-3xl text-green-500'>
              <span className='block text-sm text-gray-500'>
                Starting Price
              </span>
              $6.9
            </p>

            <p className='col-span-1 text-3xl text-red-500'>
              <span className='block text-sm text-gray-500'>Current Price</span>
              $6.9
            </p>

            <div className='mt-4 col-span-2'>
              <Button disabled={!canBid} className='w-full'>
                Place Bid
              </Button>
              {!canBid && (
                <p className='mt-1 text-gray-500 text-sm'>
                  Either you are not logged in or you are self bidding on an
                  item.
                </p>
              )}
            </div>
          </div>

          <div className='col-span-4 md:col-span-2'>
            <Tabs defaultValue='bids'>
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
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default Item;
