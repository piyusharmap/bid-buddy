import NewItemForm from "@/components/forms/newItemForm";

const CreateBid = () => {
	return (
		<div className="mt-4 px-5 py-4">
			<div className="max-w-md">
				<h1 className="mb-6 font-josefin_Sans font-semibold text-3xl text-primary-dark">
					Add an Item to Bid
				</h1>

				<NewItemForm />
			</div>
		</div>
	);
};

export default CreateBid;
