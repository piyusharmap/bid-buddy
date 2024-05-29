import BiddingItem from "@/components/cards/BiddingItem";

import { database } from "@/db/database";

const Home = async () => {
	const allItems = await database.query.items.findMany();

	return (
		<div className="mt-4 px-5 py-4">
			<h1 className="mb-6 font-semibold text-3xl text-primary-dark">
				Items on Sale
			</h1>

			<div className="grid grid-cols-4 gap-8">
				{allItems.map((item) => (
					<BiddingItem
						key={item.id}
						itemName={item.name}
						itemDescription={item.description}
						startingPrice={item.startingPrice / 100}
						className="col-span-4 sm:col-span-2 md:col-span-1"
					/>
				))}
			</div>
		</div>
	);
};

export default Home;
