import NewItemForm from "@/components/forms/newItemForm";

const CreateBid = () => {
	return (
		<div className="max-w-7xl mx-auto px-5 py-4 space-y-6">
			<NewItemForm />

			<div className="space-y-2">
				<h2 className="font-medium text-xl">Items Available to Bid</h2>
			</div>
		</div>
	);
};

export default CreateBid;
