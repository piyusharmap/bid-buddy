import { database } from "@/db/database";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUserAction(userId: string) {
	const user = await database.query.users.findFirst({
		where: eq(users.id, userId),
	});

	return user;
}
