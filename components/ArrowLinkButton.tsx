import Link from 'next/link';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const ArrowLinkButton = ({
  title,
  link,
  direction,
  className,
}: {
  title: string;
  link: string;
  direction: 'RIGHT' | 'LEFT';
  className?: string;
}) => {
  return (
    <Link
      href={link}
      className={twMerge(className, 'group flex items-center gap-1')}
    >
      {direction === 'LEFT' && (
        <ArrowLeft
          size={16}
          className='mx-1 inline group-hover:ml-0 group-hover:mr-2 group-hover:text-red-500 transition-all'
        />
      )}

      <p className='font-medium'>{title}</p>

      {direction === 'RIGHT' && (
        <ArrowRight
          size={16}
          className='mx-1 inline group-hover:ml-2 group-hover:mr-0 group-hover:text-red-500 transition-all'
        />
      )}
    </Link>
  );
};

export default ArrowLinkButton;
