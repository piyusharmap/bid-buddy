import Image from 'next/image';

const ProfileCard = async ({
  name,
  email,
  imageSrc,
}: {
  name: string | null;
  email: string;
  imageSrc: string | null;
}) => {
  return (
    <div className='flex gap-2 items-end flex-wrap'>
      <Image
        src={imageSrc || ''}
        alt='Profile Image'
        width='70'
        height='70'
        className='rounded-lg border-2 border-gray-500/15'
      />

      <div>
        <h1 className='text-xl sm:text-2xl font-medium'>
          {name ? name : 'N/A'}
        </h1>
        <p className='text-gray-500'>{email}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
