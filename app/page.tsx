import NewItemForm from "@/components/NewItemForm";

import { database } from "@/db/database";
import { items } from "@/db/schema";

const Home = async () => {
	const allItems = await database.query.items.findMany();

	return (
		<div className="container py-8">
			<NewItemForm />

			<h1 className="mb-4 font-semibold text-2xl">Items on Sale</h1>

			{allItems.map((item) => (
				<div key={item.id}>{item.name}</div>
			))}
		</div>
	);
};

export default Home;
