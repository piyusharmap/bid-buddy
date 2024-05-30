import { database } from "@/db/database";
import { items, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserAction(userId: string) {
	const user = await database
		.select()
		.from(users)
		.where(eq(users.id, userId));

	return user;
}

export async function getUserItemsAction(userId: string) {
	const allItems = await database.query.items.findMany({
		where: eq(items.userId, userId),
	});

	return allItems;
}
