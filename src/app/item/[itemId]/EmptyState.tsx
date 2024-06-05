import Image from 'next/image';

import NotAvailable from '../../../../public/not_available.svg';
import ArrowLinkButton from '../../../components/arrowLinkButton';

const EmptyItemState = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <ArrowLinkButton
        title='All Bids'
        link='/'
        direction='LEFT'
        className='self-start'
      />

      <Image src={NotAvailable} alt='Not Available' width='250' height='250' />

      <p className='sm:text-lg md:text-2xl text-center'>
        Item <span className='font-medium text-red-500'>Not Available</span>
      </p>
    </div>
  );
};

export default EmptyItemState;
