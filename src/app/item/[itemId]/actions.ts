'use server';

import { revalidatePath } from 'next/cache';

import { auth } from '@/auth';
import { database } from '@/db/database';
import { bids, items } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const createBidAction = async (itemId: number) => {
  const session = await auth();

  if (!session) {
    throw new Error('You must be logged in to place a bid.');
  }

  const userId = session?.user?.id;

  if (!userId) {
    throw new Error('You must be logged in to place a bid.');
  }

  const item = await database.query.items.findFirst({
    where: eq(items.id, itemId),
  });

  if (!item) {
    throw new Error('Item not found');
  }

  let latestBidValue;
  if (item.currentBid) {
    latestBidValue = item.currentBid + item.bidInterval;
  } else {
    latestBidValue = item.startingPrice + item.bidInterval;
  }

  await database.insert(bids).values({
    amount: latestBidValue,
    itemId: itemId,
    userId: userId,
    timestamp: new Date(),
  });

  await database
    .update(items)
    .set({
      currentBid: latestBidValue,
    })
    .where(eq(items.id, itemId));

  revalidatePath(`/item/${itemId}`);
};
