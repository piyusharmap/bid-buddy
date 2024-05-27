import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const NewItemForm = () => {
	return (
		<div className="max-w-md">
			<h1 className="font-semibold text-2xl">Add New Item</h1>

			<form className="mt-4 p-4 bg-slate-50 rounded-lg">
				<Label htmlFor="banner" className="font-semibold">
					Banner
				</Label>
				<Input id="banner" type="file" className="mb-2" />

				<Label htmlFor="title" className="font-semibold">
					Title
				</Label>
				<Input id="title" placeholder="enter title" className="mb-2" />

				<Label htmlFor="description" className="font-semibold">
					Description
				</Label>
				<Textarea
					id="description"
					placeholder="enter description"
					className="mb-2"
					rows={3}
				/>

				<Label htmlFor="price" className="font-semibold">
					Price
				</Label>
				<Input
					id="price"
					placeholder="enter price"
					type="number"
					className="mb-4"
				/>

				<Button variant="default">Add Item</Button>
			</form>
		</div>
	);
};

export default NewItemForm;
