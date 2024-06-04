import { FC } from 'react';

import Link from 'next/link';

import { formatToDollars } from '@/utils/currency';
import { FileImage } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import ItemInfoDialog from './itemInfo';

export type BiddingCardProps = {
  id: number;
  name: string;
  description: string;
  startingPrice: number;
  bidInterval: number;
  currentBid: number;
  className?: string;
  isExpired?: boolean;
};

const BiddingCard: FC<BiddingCardProps> = ({
  id,
  name,
  description,
  startingPrice,
  bidInterval,
  currentBid,
  className,
  isExpired,
}) => {
  return (
    <div
      className={twMerge(
        className,
        'flex flex-col p-4 rounded-lg border border-gray-500/15 hover:shadow-lg hover:border-gray-500/50 cursor-default'
      )}
    >
      <p className='truncate'>{name}</p>

      {isExpired ? (
        <p className='text-xs sm:text-sm text-orange-500'>Ended on:</p>
      ) : (
        <p className='text-xs sm:text-sm text-gray-500'>Available Till:</p>
      )}

      <div className='my-2 h-40 sm:h-52 flex items-center justify-center rounded-sm bg-black/15 dark:bg-white/15'>
        <FileImage size='30' />
      </div>

      <p className='text-base sm:text-lg text-right'>
        <span className='font-light text-sm text-gray-500'>
          Starting price:{' '}
        </span>
        ${formatToDollars(startingPrice)}
      </p>

      <p className='text-xl sm:text-2xl text-right text-red-500'>
        <span className='font-light text-sm text-gray-500'>Current Bid: </span>
        {currentBid === 0 ? 'N/A' : '$' + formatToDollars(currentBid)}
      </p>

      <div className='mt-4 flex gap-2'>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline' className='flex-1'>
              Item Info
            </Button>
          </DialogTrigger>

          <DialogContent className='sm:max-w-[425px]'>
            <ItemInfoDialog
              name={name}
              description={description}
              startingPrice={startingPrice}
              bidInterval={bidInterval}
            />
          </DialogContent>
        </Dialog>

        {!isExpired && (
          <Button variant='secondary' className='flex-1' asChild>
            <Link href={`/item/${id}`}>Bid Item</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default BiddingCard;
