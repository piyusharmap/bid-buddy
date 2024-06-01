import { getItem } from "@/data-access/item";
import EmptyItemState from "./EmptyState";
import PlaceholderImage from "../../../public/placeholder_image.svg";
import Image from "next/image";
import { auth } from "@/app/auth";
import { Button } from "@/components/ui/button";

const Item = async ({ params: { itemId } }: { params: { itemId: string } }) => {
	const session = await auth();

	const parsedItemId = parseInt(itemId);

	if (isNaN(parsedItemId)) {
		return (
			<div className="max-w-7xl mx-auto px-5 py-8">
				<EmptyItemState />
			</div>
		);
	}

	const item = await getItem(parseInt(itemId));

	const canBid = session && item?.userId !== session?.user?.id;

	return (
		<div className="max-w-7xl mx-auto px-5 py-4 space-y-4">
			{!item ? (
				<EmptyItemState />
			) : (
				<div className="grid grid-cols-4 gap-2">
					<h1 className="mb-4 col-span-4 font-light text-2xl sm:text-3xl">
						Bidding for{" "}
						<span className="font-medium text-red-500">
							{item.name}
						</span>
					</h1>

					<div className="col-span-4 md:col-span-2 flex flex-col space-y-4">
						<p className="font-medium text-lg">
							2 hours left
							<span className="block text-base text-gray-500">
								Available till:
							</span>
						</p>

						<Image
							src={PlaceholderImage}
							alt="Not Available"
							width="300"
							height="300"
							className="w-full rounded-lg"
						/>

						<p className="text-lg">
							<span className="block text-sm text-gray-500">
								Description
							</span>
							{item.description}
						</p>

						<div className="flex items-center gap-2 cursor-default">
							<div className="p-2 flex-1 ring-2 ring-green-500/25 hover:ring-green-500/75 rounded-lg">
								<p className="text-2xl text-center">
									<span className="block text-sm text-gray-500">
										Started at
									</span>
									${item.startingPrice / 100}
								</p>
							</div>

							<div className="p-2 flex-1 ring-2 ring-red-500/25 hover:ring-red-500/75 rounded-lg">
								<p className="text-2xl text-center">
									<span className="block text-sm text-gray-500">
										Currently at
									</span>
									${item.startingPrice / 100}
								</p>
							</div>
						</div>

						<p className="text-lg">
							<span className="text-gray-500">
								Bid Interval:{" "}
							</span>
							$6.9
						</p>

						<Button disabled={!canBid}>
							{canBid ? "Place Bid" : "Bidding not allowed"}
						</Button>
					</div>

					<div className="col-span-4 md:col-span-2">
						<h2 className="p-2 font-medium text-xl">
							Previous Bids
						</h2>
					</div>
				</div>
			)}
		</div>
	);
};

export default Item;
