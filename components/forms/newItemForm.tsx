import { auth } from '@/app/auth';
import { createItemAction } from '@/app/item/create/actions';

import UnauthorizedAccess from '../UnauthorizedAccess';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const NewItemForm = async () => {
  const session = await auth();

  if (!session) return <UnauthorizedAccess message='Sign in to add an item' />;

  return (
    <form
      className='p-5 rounded-lg grid grid-cols-2 gap-2 border border-gray-300 dark:border-gray-800'
      action={createItemAction}
    >
      <div className='col-span-2 sm:col-span-1'>
        <Label htmlFor='title' className='font-semibold'>
          Item Name
        </Label>
        <Input required id='name' name='name' placeholder='Enter item name' />
      </div>

      <div className='col-span-2 sm:col-span-1'>
        <Label htmlFor='endDate' className='font-semibold'>
          End Date
        </Label>
        <Input id='endDate' name='endDate' type='date' />
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
  );
};

export default NewItemForm;
