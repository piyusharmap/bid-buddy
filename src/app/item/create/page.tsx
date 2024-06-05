'use client';

import { useState } from 'react';

import { createItemAction } from '@/app/item/create/actions';
import { DatePicker } from '@/components/datePicker';
import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const CreateItem = () => {
  const [date, setDate] = useState<Date | undefined>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!date) {
      return;
    }

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const description = formData.get('description') as string;

    const startingPrice = formData.get('startingPrice') as string;
    const priceAsCents = Math.floor(parseFloat(startingPrice) * 100);

    const bidInterval = (formData.get('bidInterval') as string) || '6.9';
    const intervalAsCents = Math.floor(parseFloat(bidInterval) * 100);

    await createItemAction({
      name,
      description,
      startingPrice: priceAsCents,
      bidInterval: intervalAsCents,
      endDate: date,
    });
  };

  return (
    <Container>
      <h1 className='px-1 pt-2 pb-4 text-xl sm:text-2xl'>Create/Bid Items</h1>

      <form
        className='p-5 rounded-lg grid grid-cols-2 gap-2 border border-gray-300 dark:border-gray-800'
        onSubmit={handleSubmit}
      >
        <div className='col-span-2 sm:col-span-1'>
          <Label htmlFor='title' className='font-semibold'>
            Item Name
          </Label>
          <Input required id='name' name='name' placeholder='Enter item name' />
        </div>

        <div className='col-span-2 sm:col-span-1'>
          <p className='font-semibold'>End Date</p>
          <DatePicker date={date} setDate={setDate} />
        </div>

        <div className='row-span-2 col-span-2 sm:col-span-1'>
          <Label htmlFor='description' className='font-semibold'>
            Description
          </Label>
          <Textarea
            id='description'
            name='description'
            placeholder='Enter description'
            rows={5}
            className='resize-none'
          />
        </div>

        <div className='col-span-2 sm:col-span-1'>
          <Label htmlFor='startingPrice' className='font-semibold'>
            Starting Price
          </Label>
          <Input
            required
            id='startingPrice'
            name='startingPrice'
            placeholder='eg. $4.20'
            type='number'
            step='0.01'
          />
        </div>

        <div className='col-span-2 sm:col-span-1'>
          <Label htmlFor='bidInterval' className='font-semibold'>
            Bid Interval
          </Label>
          <Input
            id='bidInterval'
            name='bidInterval'
            placeholder='e.g. $6.9'
            type='number'
            step='0.01'
          />
        </div>

        <p className='col-span-2 font-light text-red-500 text-sm italic text-right'>
          By default the &apos;Interval Bid&apos; is set to $6.9
        </p>

        <Button variant='secondary' className='col-span-2 sm:col-span-1'>
          Add to List
        </Button>

        <Button variant='default' className='col-span-2 sm:col-span-1'>
          Bid Now
        </Button>
      </form>
    </Container>
  );
};

export default CreateItem;
