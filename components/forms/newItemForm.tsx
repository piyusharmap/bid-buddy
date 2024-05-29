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
			className="p-5 rounded-lg grid grid-cols-2 gap-2"
			action={createItemAction}
		>
			<div className="col-span-2">
				<Label htmlFor="banner" className="font-semibold">
					Banner Image
				</Label>
				<Input id="banner" name="banner" type="file" className="mb-4" />
			</div>

			<div className="col-span-2">
				<Label htmlFor="title" className="font-semibold">
					Item Name
				</Label>
				<Input
					required
					id="name"
					name="name"
					placeholder="Enter item name"
					className="mb-4"
				/>
			</div>

			<div className="col-span-2">
				<Label htmlFor="description" className="font-semibold">
					Description
				</Label>
				<Textarea
					id="description"
					name="description"
					placeholder="Enter description"
					className="mb-4"
					rows={3}
				/>
			</div>

			<p className="col-span-2 font-medium text-red-500 text-sm text-right italic">
				By default the &apos;Interval Bid&apos; is set to $10
			</p>

			<div className="col-span-2 sm:col-span-1">
				<Label htmlFor="startingPrice" className="font-semibold">
					Starting Price
				</Label>
				<Input
					required
					id="startingPrice"
					name="startingPrice"
					placeholder="eg. $4.20"
					type="number"
					step="0.01"
					className="mb-4"
				/>
			</div>

			<div className="col-span-2 sm:col-span-1">
				<Label htmlFor="bidInterval" className="font-semibold">
					Bid Interval
				</Label>
				<Input
					id="bidInterval"
					name="bidInterval"
					placeholder="e.g. $6.9"
					type="number"
					step="0.01"
					className="mb-4"
				/>
			</div>

			<Button variant="secondary" className="col-span-2">
				Add Item
			</Button>
		</form>
	);
};

export default NewItemForm;
