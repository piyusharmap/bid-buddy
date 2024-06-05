'use server';

import { auth } from '@/auth';
import { database } from '@/db/database';
import { items as itemsSchema } from '@/db/schema';

export async function createItemAction({
  name,
  description,
  startingPrice,
  bidInterval,
  endDate,
}: {
  name: string;
  description: string;
  startingPrice: number;
  bidInterval: number;
  endDate: Date;
}) {
  const session = await auth();

  if (!session) {
    throw new Error('You must be logged in to create an item.');
  }

  const userId = session?.user?.id;

  if (!userId) {
    throw new Error('You must be logged in to create an item.');
  }

  await database.insert(itemsSchema).values({
    userId: userId,
    name,
    description,
    startingPrice,
    bidInterval,
    endDate,
    createdOn: new Date(),
  });
}
