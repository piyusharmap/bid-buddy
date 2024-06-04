import { FC } from 'react';

import Image from 'next/image';

export type UserProps = {
  name: string | null;
  email: string;
  imageSrc: string | null;
};

const ProfileCard: FC<UserProps> = ({ name, email, imageSrc }) => {
  return (
    <div className='flex items-end gap-4 flex-wrap'>
      <Image
        src={imageSrc || ''}
        alt='Profile Image'
        width='70'
        height='70'
        className='ring-2 ring-gray-500/15 rounded-lg'
      />

      <div>
        <h2 className='text-xl sm:text-2xl'>{name ? name : 'N/A'}</h2>

        <p className='text-sm sm:text-base text-gray-500'>{email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
