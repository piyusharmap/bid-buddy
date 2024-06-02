import { getItem } from "@/data-access/item";
import EmptyItemState from "./EmptyState";
import PlaceholderImage from "../../../public/placeholder_image.svg";
import Image from "next/image";
import { auth } from "@/app/auth";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
					<Link
						href="/"
						className="group col-span-4	flex items-center gap-2"
					>
						<ArrowLeft
							size={16}
							className="mx-1 inline group-hover:ml-0 group-hover:mr-2 transition-all"
						/>
						<p className="font-medium">All Bids</p>
					</Link>

					<h1 className="py-4 col-span-4 font-light text-2xl sm:text-3xl">
						Bidding for{" "}
						<span className="font-medium text-red-500">
							{item.name}
						</span>
					</h1>

					<div className="col-span-4 md:col-span-2 grid grid-cols-2 gap-4">
						<h4 className="col-span-2">Time Left:</h4>

						<Image
							src={PlaceholderImage}
							alt="Not Available"
							width="300"
							height="300"
							className="col-span-2 w-full rounded-lg"
						/>

						<p className="col-span-2 text-lg">
							<span className="block text-sm text-gray-500">
								Description
							</span>
							{item.description}
						</p>

						<p className="col-span-1 text-lg">
							<span className="block text-sm text-gray-500">
								Available Till
							</span>
							Jul 15, 2024
						</p>

						<p className="col-span-1 text-lg">
							<span className="block text-sm text-gray-500">
								Bidding Interval
							</span>
							$6.9
						</p>

						<p className="col-span-1 text-3xl text-green-500">
							<span className="block text-sm text-gray-500">
								Starting Price
							</span>
							$6.9
						</p>

						<p className="col-span-1 text-3xl text-red-500">
							<span className="block text-sm text-gray-500">
								Current Price
							</span>
							$6.9
						</p>

						<div className="mt-4 col-span-2">
							<Button disabled={!canBid} className="w-full">
								Place Bid
							</Button>
							<p className="mt-1 text-gray-500 text-sm">
								Either you are not logged in or you are self
								bidding on an item.
							</p>
						</div>
					</div>

					<div className="col-span-4 md:col-span-2">
						<Tabs defaultValue="bids">
							<div className="flex justify-end">
								<TabsList>
									<TabsTrigger
										value="bids"
										className="px-5 font-medium"
									>
										Bids
									</TabsTrigger>

									<TabsTrigger
										value="notes"
										className="px-5 font-medium"
									>
										Notes
									</TabsTrigger>
								</TabsList>
							</div>
						</Tabs>
					</div>
				</div>
			)}
		</div>
	);
};

export default Item;
