import ProfileCard from "@/components/cards/profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyItems from "./components/MyItems";

const Profile = ({ params }: { params: { userId: string } }) => {
	return (
		<div className="max-w-7xl mx-auto px-5 py-4 space-y-4">
			<ProfileCard userId={params.userId} />

			<Tabs defaultValue="items">
				<div className="flex justify-center sm:justify-end">
					<TabsList>
						<TabsTrigger value="items" className="px-5 font-medium">
							Items
						</TabsTrigger>

						<TabsTrigger value="bids" className="px-5 font-medium">
							Bids
						</TabsTrigger>
					</TabsList>
				</div>

				<TabsContent value="items">
					<h2 className="font-medium text-xl">My Items</h2>
					<MyItems userId={params.userId} />
				</TabsContent>

				<TabsContent value="bids">
					<h2 className="font-medium text-xl">My Bids</h2>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default Profile;
