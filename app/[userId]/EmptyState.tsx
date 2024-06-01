import Image from "next/image";

const EmptyUserState = () => {
	return (
		<div className="flex flex-col items-center gap-4">
			<Image
				src="./not_available.svg"
				alt="Not Available"
				width="250"
				height="250"
			/>

			<p className="text-2xl">User not Available.</p>
		</div>
	);
};

export default EmptyUserState;
