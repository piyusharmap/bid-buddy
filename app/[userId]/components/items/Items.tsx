import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AvailableItems from "./AvailableItems";

const Items = async ({ userId }: { userId: string }) => {
	return (
		<div>
			<Tabs defaultValue="available">
				<TabsList>
					<TabsTrigger value="available" className="px-5 font-medium">
						Available
					</TabsTrigger>

					<TabsTrigger value="expired" className="px-5 font-medium">
						Expired
					</TabsTrigger>
				</TabsList>

				<TabsContent value="available">
					<AvailableItems userId={userId} />
				</TabsContent>

				<TabsContent value="expired"></TabsContent>
			</Tabs>
		</div>
	);
};

export default Items;
