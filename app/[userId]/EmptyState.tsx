import Image from 'next/image';

import ArrowLinkButton from '@/components/arrowLinkButton';

const EmptyUserState = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <ArrowLinkButton
        title='All Bids'
        link='/'
        direction='LEFT'
        className='self-start'
      />

      <Image
        src='./not_available.svg'
        alt='Not Available'
        width='250'
        height='250'
      />

      <p className='sm:text-lg md:text-2xl text-center'>
        User <span className='font-medium text-red-500'>Not Found</span>
      </p>
    </div>
  );
};

export default EmptyUserState;
