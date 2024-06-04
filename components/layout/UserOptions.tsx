import Link from 'next/link';

import { auth } from '@/app/auth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User2 } from 'lucide-react';

import { ModeToggleItem } from '../theme-toggle';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const UserOptions = async () => {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='cursor-pointer'>
        <Avatar>
          <AvatarImage src={session?.user?.image || ''} />
          <AvatarFallback>
            <User2 />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <div className='p-2'>
          {session?.user?.name && session?.user?.email ? (
            <>
              <p className='font-medium'>{session?.user?.name}</p>
              <p className='text-sm text-gray-500'>{session?.user?.email}</p>
            </>
          ) : (
            <>
              <p className='font-medium'>Hello, Guest</p>
              <p className='text-sm text-gray-500'>
                Welcome to Bid
                <span className='text-red-500/75'>Buddy</span>
              </p>
            </>
          )}
        </div>

        <DropdownMenuSeparator />

        <div className='space-y-2'>
          {session && (
            <DropdownMenuItem asChild>
              <Link
                href={`/${session?.user?.id}`}
                className='p-2 font-medium cursor-pointer'
              >
                <span className='mr-2'>
                  <User2 size={16} />
                </span>
                Profile
              </Link>
            </DropdownMenuItem>
          )}

          <ModeToggleItem />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserOptions;
