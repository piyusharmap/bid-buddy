import { FC } from "react";
import { twMerge } from "tailwind-merge";

type BiddingItemProps = {
	itemName?: string;
	itemDescription?: string;
	startingPrice?: number;
	className?: string;
};

const BiddingItem: FC<BiddingItemProps> = ({
	itemName,
	itemDescription,
	startingPrice,
	className,
}) => {
	return (
		<div
			className={twMerge(
				className,
				"p-4 border-1 border-secondary-dark/15 rounded-lg"
			)}
		>
			<p>{itemName}</p>
			<p>{itemDescription}</p>
			<p>{startingPrice}</p>
		</div>
	);
};

export default BiddingItem;
