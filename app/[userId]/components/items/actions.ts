import { database } from '@/db/database';
import { items } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getUserItemsAction(userId: string) {
  const allItems = await database.query.items.findMany({
    where: eq(items.userId, userId),
  });

  return allItems;
}
