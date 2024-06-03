import { signIn } from '@/app/auth';
import { LogIn } from 'lucide-react';

import { Button } from './ui/button';

const SignIn = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google');
      }}
    >
      <Button variant='outline' className='text-green-500'>
        <LogIn size='16' />
        <span className='ml-2 hidden sm:block'>Sign In</span>
      </Button>
    </form>
  );
};

export default SignIn;
