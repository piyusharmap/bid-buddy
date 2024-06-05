import Link from 'next/link';

import { ImagePlus } from 'lucide-react';

import { Button } from '../ui/button';

export default function CreateItemButton() {
  return (
    <Button asChild>
      <Link href='/item/create'>
        <ImagePlus size='16' />
        <span className='ml-2 hidden sm:block'>Create Item</span>
      </Link>
    </Button>
  );
}
