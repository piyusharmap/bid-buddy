import NewItemForm from "@/components/NewItemForm";

import { database } from "@/db/database";
import { items } from "@/db/schema";

const Home = async () => {
	const allItems = await database.query.items.findMany();

	return (
		<div className="px-5 py-4">
			<NewItemForm />

			<h1 className="mb-8 font-josefin_Sans font-semibold text-4xl">
				Items on Sale
			</h1>

			{allItems.map((item) => (
				<div key={item.id}>{item.name}</div>
			))}
		</div>
	);
};

export default Home;
