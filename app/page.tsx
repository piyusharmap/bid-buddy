import BiddingItem from "@/components/cards/BiddingItem";
import { Button } from "@/components/ui/button";

import { database } from "@/db/database";
import Link from "next/link";
import { auth } from "./auth";

const Home = async () => {
	const session = await auth();
	// const allItems = await database.query.items.findMany();

	return (
		<div className="max-w-7xl mx-auto px-5 py-4 space-y-4">
			<div className="flex justify-end gap-2">
				<Button disabled={!session}>
					<Link href="/item/create">Create Bid</Link>
				</Button>
			</div>

			<h2 className="font-medium text-xl">Items on Sale</h2>

			<div className="grid grid-cols-4 gap-8">
				{/* {allItems.map((item) => (
					<BiddingItem
						key={item.id}
						itemName={item.name}
						itemDescription={item.description}
						startingPrice={item.startingPrice / 100}
						className="col-span-4 sm:col-span-2 md:col-span-1"
					/>
				))} */}
			</div>
		</div>
	);
};

export default Home;
