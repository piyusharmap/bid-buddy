import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { formatToDollars } from '@/utils/currency';
import { formatDate } from '@/utils/dateAndTime';
import { Pencil } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import ItemInfoDialog from './itemInfo';

export type ItemCardProps = {
  id: number;
  name: string;
  description: string;
  startingPrice: number;
  bidInterval: number;
  endDate: Date;
  createdOn: Date;
  className?: string;
  isExpired?: boolean;
  isLive?: boolean;
};

const ItemCard: FC<ItemCardProps> = ({
  id,
  name,
  description,
  startingPrice,
  bidInterval,
  endDate,
  createdOn,
  className,
  isExpired,
  isLive,
}) => {
  return (
    <div
      className={twMerge(
        className,
        'group relative flex flex-col p-4 rounded-lg border border-gray-500/15 hover:shadow-lg hover:border-gray-500/50 cursor-default'
      )}
    >
      <p className='text-lg truncate'>{name}</p>

      {isExpired ? (
        <p className='font-light text-xs sm:text-sm text-orange-500'>
          <span className='font-light text-gray-500'>Ended on: </span>
          {formatDate(endDate)}
        </p>
      ) : (
        <p className='text-xs sm:text-sm'>
          <span className='font-light text-gray-500'>Available Till: </span>
          {formatDate(endDate)}
        </p>
      )}

      <div className='my-2 h-40 sm:h-52 flex items-center justify-center'>
        <Image
          src='./placeholder_image.svg'
          alt='Item Image'
          width='150'
          height='150'
          className='w-full h-full object-contain'
        />
      </div>

      <div className='flex justify-between items-end'>
        <p className='font-light text-sm text-gray-500'>Starting Price</p>
        <p className='text-base sm:text-lg'>
          ${formatToDollars(startingPrice)}
        </p>
      </div>

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
              endDate={endDate}
              createdOn={createdOn}
            />
          </DialogContent>
        </Dialog>

        {!isExpired && !isLive && (
          <Button variant='secondary' className='flex-1'>
            Bid Now
          </Button>
        )}

        {isLive && (
          <Button variant='link' className='flex-1'>
            <Link href={`/item/${id}`}>View Bids</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
