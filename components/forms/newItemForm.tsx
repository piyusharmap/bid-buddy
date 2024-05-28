import { auth } from "@/app/auth";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { createItemAction } from "@/app/create-bid/actions";
import UnauthorizedAccess from "../UnauthorizedAccess";

const NewItemForm = async () => {
	const session = await auth();

	if (!session)
		return <UnauthorizedAccess message="Sign in to add an item" />;

	return (
		<form
			className="p-5 rounded-lg flex flex-col border-1 border-secondary-dark/15"
			action={createItemAction}
		>
			<Label htmlFor="banner" className="font-semibold">
				Banner Image
			</Label>
			<Input id="banner" name="banner" type="file" className="mb-4" />

			<Label htmlFor="title" className="font-semibold">
				Item Name
			</Label>
			<Input
				required
				id="name"
				name="name"
				placeholder="Give your item a title"
				className="mb-4"
			/>

			<Label htmlFor="description" className="font-semibold">
				Description
			</Label>
			<Textarea
				id="description"
				name="description"
				placeholder="Add description for your item"
				className="mb-4"
				rows={3}
			/>

			<Label htmlFor="startingPrice" className="font-semibold">
				Starting Price
			</Label>
			<Input
				required
				id="startingPrice"
				name="startingPrice"
				placeholder="Enter starting price for bidding"
				type="number"
				step="0.01"
				className="mb-4"
			/>

			<Button variant="outline">Add Item</Button>
		</form>
	);
};

export default NewItemForm;
