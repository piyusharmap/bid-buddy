import NewItemForm from "@/components/forms/newItemForm";

const CreateBid = () => {
	return (
		<div className="max-w-7xl mx-auto px-5 py-4 space-y-6">
			<div className="space-y-2">
				<h2 className="font-medium text-xl">Add Item</h2>

				<NewItemForm />
			</div>

			<div className="space-y-2">
				<h2 className="font-medium text-xl">Choose an Item to Bid</h2>
			</div>
		</div>
	);
};

export default CreateBid;
