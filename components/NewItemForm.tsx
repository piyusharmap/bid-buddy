import { revalidatePath } from "next/cache";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

import { database } from "@/db/database";
import { items as itemsSchema } from "@/db/schema";
import { auth } from "@/app/auth";

const NewItemForm = async () => {
	const session = await auth();

	if (!session) return null;

	return (
		<div className="max-w-md">
			<h1 className="mb-8 font-josefin_Sans font-semibold text-4xl">
				Add New Item
			</h1>

			<form
				className="px-5 py-4 rounded-lg flex flex-col"
				action={async (formData: FormData) => {
					"use server";

					await database.insert(itemsSchema).values({
						userId: session?.user?.id || "",
						name: formData.get("name") as string,
						description: formData.get("description") as string,
						price: parseFloat(formData.get("price") as string),
					});

					revalidatePath("/"); // need to remove this later as we will be showing the items on a different route
				}}
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
					placeholder="Enter Item Name"
					className="mb-4"
				/>

				<Label htmlFor="description" className="font-semibold">
					Description
				</Label>
				<Textarea
					required
					id="description"
					name="description"
					placeholder="Add Item Description"
					className="mb-4"
					rows={3}
				/>

				<Label htmlFor="price" className="font-semibold">
					Price
				</Label>
				<Input
					required
					id="price"
					name="price"
					placeholder="Enter Price"
					type="number"
					className="mb-4"
				/>

				<Button variant="default">Add Item</Button>
			</form>
		</div>
	);
};

export default NewItemForm;
