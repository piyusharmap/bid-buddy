'use client';

import { FC } from 'react';

import { formatToDollars } from '@/utils/currency';
import { formatDate } from '@/utils/dateAndTime';
import { DialogTitle } from '@radix-ui/react-dialog';
import { FileImage } from 'lucide-react';

import { DialogDescription, DialogHeader } from '../ui/dialog';

type ItemInfoProps = {
  name: string;
  description: string;
  startingPrice: number;
  bidInterval: number;
  endDate: Date;
  createdOn: Date;
};

const ItemInfoDialog: FC<ItemInfoProps> = ({
  name,
  description,
  startingPrice,
  bidInterval,
  endDate,
  createdOn,
}) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className='text-xl'>{name}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>

      <div className='grid grid-cols-2 gap-4'>
        <div className='h-52 col-span-2 flex items-center justify-center rounded-sm bg-black/15 dark:bg-white/15'>
          <FileImage size='30' />
        </div>

        <p className='col-span-1 text-2xl'>
          <span className='block font-medium text-sm text-gray-500'>
            Starting Price
          </span>
          ${formatToDollars(startingPrice)}
        </p>

        <p className='col-span-1 text-2xl'>
          <span className='block font-medium text-sm text-gray-500'>
            Bid Interval
          </span>
          ${formatToDollars(bidInterval)}
        </p>

        <p className='col-span-1'>
          <span className='block font-medium text-sm text-gray-500'>
            Created on
          </span>
          {formatDate(createdOn)}
        </p>

        <p className='col-span-1'>
          <span className='block font-medium text-sm text-gray-500'>
            Available Till
          </span>
          {formatDate(endDate)}
        </p>
      </div>
    </>
  );
};

export default ItemInfoDialog;
