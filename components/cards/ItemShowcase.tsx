import { FC } from "react";

type ItemShowcaseProps = {
	itemName?: string;
	itemDescription?: string;
	itemPrice?: string;
};

const ItemShowcase: FC<ItemShowcaseProps> = ({ itemName, itemDescription }) => {
	return (
		<div>
			<p>{itemName}</p>
			<p>{itemDescription}</p>
		</div>
	);
};

export default ItemShowcase;
