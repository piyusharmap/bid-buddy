'use server';

import { auth } from '@/app/auth';
import { database } from '@/db/database';
import { items as itemsSchema } from '@/db/schema';

export async function createItemAction(formData: FormData) {
  const session = await auth();

  if (!session) {
    throw new Error('User Unauthorized');
  }

  const user = session.user;

  if (!user || !user.id) {
    throw new Error('User Unauthorized');
  }

  const startingPrice = formData.get('startingPrice') as string;
  const priceAsCents = Math.floor(parseFloat(startingPrice) * 100);

  const bidInterval = (formData.get('bidInterval') as string) || '6.9';
  const intervalAsCents = Math.floor(parseFloat(bidInterval) * 100);

  await database.insert(itemsSchema).values({
    userId: user.id!,
    name: formData.get('name') as string,
    description: formData.get('description') as string,
    startingPrice: priceAsCents,
    bidInterval: intervalAsCents,
  });
}
