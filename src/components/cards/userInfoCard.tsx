import Image from 'next/image';

import { getUser } from '@/data-access/user';
import { User2 } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default async function UserInfoCard({ userId }: { userId: string }) {
  const user = await getUser(userId);

  if (!user) {
    return <p>User not available.</p>;
  }

  return (
    <>
      <div>
        <Avatar>
          <AvatarImage src={user?.image || ''} />
          <AvatarFallback>
            <User2 />
          </AvatarFallback>
        </Avatar>
      </div>

      <div>
        <p className='font-medium'>{user?.name}</p>
        <p className='text-sm text-gray-500'>{user?.email}</p>
      </div>
    </>
  );
}
