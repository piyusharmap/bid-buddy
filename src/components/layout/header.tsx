import Image from 'next/image';
import Link from 'next/link';

import { auth } from '@/auth';

import HeaderLogo from '../../../public/bb_logo.svg';
import CreateItemButton from '../buttons/createItem';
import SignInButton from '../buttons/signIn';
import SignOutButton from '../buttons/signOut';
import UserOptions from './userOptions';

const Header = async () => {
  const session = await auth();

  return (
    <div className='sticky top-0 left-0 bg-background/50 backdrop-blur-lg'>
      <div className='max-w-7xl mx-auto px-3 py-2 flex items-center justify-between'>
        <Link href='/' className='flex items-end gap-2 hover:opacity-85'>
          <Image src={HeaderLogo} alt='BidBuddy' width='35' height='35' />

          <h2 className='hidden sm:block font-semibold text-lg'>
            Bid<span className='text-red-500'>Buddy</span>
          </h2>
        </Link>

        <div className='flex gap-2 items-center'>
          {session && <CreateItemButton />}

          {session ? <SignOutButton /> : <SignInButton />}

          <UserOptions />
        </div>
      </div>
    </div>
  );
};

export default Header;
