import ItemShowcase from "@/components/cards/ItemShowcase";

import { database } from "@/db/database";

const Home = async () => {
	const allItems = await database.query.items.findMany();

	return (
		<div className="px-5 py-4">
			<h1 className="mb-8 font-josefin_Sans font-semibold text-4xl">
				Items on Sale
			</h1>

			{allItems.map((item) => (
				<ItemShowcase
					key={item.id}
					itemName={item.name}
					itemDescription={item.description}
				/>
			))}
		</div>
	);
};

export default Home;
