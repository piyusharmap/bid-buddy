import NewItemForm from "@/components/NewItemForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { database } from "@/db/database";
import { bids as bidsSchema } from "@/db/schema";
import { revalidatePath } from "next/cache";

const Home = async () => {
	const bids = await database.query.bids.findMany();

	return (
		<div className="container py-8">
			<form
				action={async (formData: FormData) => {
					"use server";

					const bid = formData.get("bid") as string;
					await database.insert(bidsSchema).values({});

					revalidatePath("/");
				}}
			>
				<Input placeholder="Enter Bid" />
				<Button variant="default">Enter Bid</Button>
			</form>

			<NewItemForm />

			{bids.map((bid) => (
				<div key={bid.id}>Bid number: {bid.id}</div>
			))}
		</div>
	);
};

export default Home;
