'use client';

import { FC } from 'react';

import Image from 'next/image';

import { formatToDollars } from '@/utils/currency';
import { DialogTitle } from '@radix-ui/react-dialog';

import { DialogDescription, DialogHeader } from './ui/dialog';

type ItemInfoProps = {
  name: string;
  description: string;
  startingPrice: number;
};

const ItemInfoDialog: FC<ItemInfoProps> = ({
  name,
  description,
  startingPrice,
}) => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className='font-medium text-lg'>Item Info</DialogTitle>
      </DialogHeader>

      <div className='space-y-4'>
        <Image
          src='./placeholder_image.svg'
          alt='Item Image'
          width='100'
          height='100'
          className='w-full rounded-lg'
        />

        <p className='font-medium text-xl'>{name}</p>

        <p>
          <span className='block font-medium text-sm text-gray-500'>
            Description
          </span>
          {description}
        </p>

        <p className='text-2xl text-red-500'>
          <span className='block font-medium text-sm text-gray-500'>
            Starting Price
          </span>
          ${formatToDollars(startingPrice)}
        </p>

        <div className='flex gap-2'>
          <p className='flex-1'>
            <span className='block font-medium text-sm text-gray-500'>
              Created on
            </span>
            May 23, 2024
          </p>

          <p className='flex-1'>
            <span className='block font-medium text-sm text-gray-500'>
              Available Till
            </span>
            Jun 5, 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemInfoDialog;
