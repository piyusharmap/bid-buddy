import ProfileCard from "@/components/cards/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Bids from "./components/bids/Bids";
import Items from "./components/items/Items";
import { getUserAction } from "./actions";
import Image from "next/image";
import EmptyUserState from "./EmptyState";

const Profile = async ({
	params: { userId },
}: {
	params: { userId: string };
}) => {
	const user = await getUserAction(userId);

	return (
		<div className="max-w-7xl mx-auto px-5 py-8 space-y-4">
			{!user ? (
				<EmptyUserState />
			) : (
				<>
					<ProfileCard
						name={user.name}
						email={user.email}
						imageSrc={user.image}
					/>

					<Tabs defaultValue="items">
						<div className="flex justify-end">
							<TabsList>
								<TabsTrigger
									value="items"
									className="px-5 font-medium"
								>
									Items
								</TabsTrigger>

								<TabsTrigger
									value="bids"
									className="px-5 font-medium"
								>
									Bids
								</TabsTrigger>
							</TabsList>
						</div>

						<TabsContent value="items">
							<h2 className="mb-4 font-medium text-xl">
								My Items
							</h2>
							<Items userId={userId} />
						</TabsContent>

						<TabsContent value="bids">
							<h2 className="mb-4 font-medium text-xl">
								My Bids
							</h2>
							<Bids userId={userId} />
						</TabsContent>
					</Tabs>
				</>
			)}
		</div>
	);
};

export default Profile;
