import { signOut } from '@/auth';
import { LogOut } from 'lucide-react';

import { Button } from '../ui/button';

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button variant='outline' className='text-red-500'>
        <LogOut size='16' />
        <span className='ml-2 hidden sm:block'>Log Out</span>
      </Button>
    </form>
  );
}
