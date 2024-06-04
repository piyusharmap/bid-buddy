import Image from 'next/image';
import Link from 'next/link';

import { auth } from '@/app/auth';
import { ImagePlus } from 'lucide-react';

import HeaderLogo from '../../public/bb_logo.svg';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import { Button } from '../ui/button';
import UserOptions from './UserOptions';

const Header = async () => {
  const session = await auth();

  return (
    <div className='mx-auto max-w-7xl px-5 py-2 flex items-center justify-between border-b border-gray-300 dark:border-gray-800'>
      <Link href='/' className='flex items-end gap-2 font-medium'>
        <Image src={HeaderLogo} alt='BidBuddy' width='35' height='35' />
        <p className='hidden sm:block font-semibold text-lg'>
          Bid<span className='text-red-500'>Buddy</span>
        </p>
      </Link>

      <div className='flex gap-2 items-center'>
        {session && (
          <Button asChild>
            <Link href='/item/create'>
              <ImagePlus size='16' />
              <span className='ml-2 hidden sm:block'>Create Item</span>
            </Link>
          </Button>
        )}

        {session ? <SignOut /> : <SignIn />}

        <UserOptions />
      </div>
    </div>
  );
};

export default Header;
