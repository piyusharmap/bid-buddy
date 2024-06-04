import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { formatToDollars } from '@/utils/currency';
import { twMerge } from 'tailwind-merge';

import ItemInfoDialog from '../ItemInfoDialog';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

type BiddingCardProps = {
  id: number;
  name: string;
  description: string;
  startingPrice: number;
  className?: string;
  isExpired?: boolean;
};

const BiddingCard: FC<BiddingCardProps> = ({
  id,
  name,
  description,
  startingPrice,
  className,
}) => {
  return (
    <div
      className={twMerge(
        className,
        'flex flex-col gap-2 p-4 rounded-lg border border-gray-500/15 hover:shadow-lg hover:border-gray-500/50 hover:rounded-sm cursor-default'
      )}
    >
      <p className='text-sm text-gray-500'>Available Till:</p>

      <Image
        src='./placeholder_image.svg'
        alt='Item Image'
        width='100'
        height='100'
        className='w-full rounded-sm'
      />

      <div className='flex-1 space-y-1'>
        <div className='text-lg flex items-end justify-between gap-2'>
          <p className='flex-1 font-medium truncate'>{name}</p>

          <p className='text-green-500'>${formatToDollars(startingPrice)}</p>
        </div>

        <p className='line-clamp-2 font-extralight opacity-75'>{description}</p>
      </div>

      <p className='font-medium text-2xl text-red-500'>
        ${formatToDollars(startingPrice)}
        <span className='ml-2 font-light text-sm text-gray-500'>
          current bid
        </span>
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
            />
          </DialogContent>
        </Dialog>

        <Button variant='secondary' className='flex-1' asChild>
          <Link href={`/item/${id}`}>Bid Item</Link>
        </Button>
      </div>
    </div>
  );
};

export default BiddingCard;
