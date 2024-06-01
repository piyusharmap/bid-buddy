import Image from "next/image";
import NotAvailable from "../../../public/not_available.svg";

const EmptyItemState = () => {
	return (
		<div className="flex flex-col items-center gap-4">
			<Image
				src={NotAvailable}
				alt="Not Available"
				width="250"
				height="250"
			/>

			<p className="text-2xl">Item not Available.</p>
		</div>
	);
};

export default EmptyItemState;
