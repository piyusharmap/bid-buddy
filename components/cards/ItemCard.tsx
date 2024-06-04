import { FC } from 'react';

import { formatToDollars } from '@/utils/currency';
import { formatDate } from '@/utils/dateAndTime';
import { FileImage } from 'lucide-react';
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

      <div className='my-2 h-40 sm:h-52 flex items-center justify-center rounded-sm bg-black/15 dark:bg-white/15'>
        <FileImage size='30' />
      </div>

      <p className='text-base sm:text-xl text-green-500'>
        ${formatToDollars(startingPrice)}
        <span className='text-sm text-gray-500'> Starting price</span>
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
              endDate={endDate}
              createdOn={createdOn}
            />
          </DialogContent>
        </Dialog>

        {!isExpired && (
          <Button variant='secondary' className='flex-1'>
            Bid Now
          </Button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
