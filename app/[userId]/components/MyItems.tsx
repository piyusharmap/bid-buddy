import ItemCard from "@/components/cards/item";
import { getUserItemsAction } from "../actions";

const MyItems = async ({ userId }: { userId: string }) => {
	const myItemsList = await getUserItemsAction(userId);

	const hasItems = myItemsList.length > 0;

	return (
		<div>
			{hasItems ? (
				<div>
					{myItemsList.map((item) => (
						<ItemCard key={item.id} />
					))}
				</div>
			) : (
				<p>No items in your list</p>
			)}
		</div>
	);
};

export default MyItems;
