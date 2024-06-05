import { database } from '@/db/database';
import { items } from '@/db/schema';
import { eq, sql } from 'drizzle-orm';

type Item = {
  userId: string;
  id: number;
  name: string;
  description: string;
  startingPrice: number;
  currentBid: number;
  bidInterval: number;
  endDate: Date;
  createdOn: Date;
};

export async function getAvailableItemsAction(userId: string) {
  const allItems = await database.query.items.findMany({
    where: eq(items.userId, userId),
  });

  return allItems;
}

export async function getExpiredItemsAction(userId: string) {
  const today = new Date().toISOString().split('T')[0];

  const query = sql<Item>`select * from ${items} where ${items.userId} = ${userId} and ${items.endDate} < ${today}`;

  const expiredItems: Item[] = await database.execute(query);

  return expiredItems;
}
