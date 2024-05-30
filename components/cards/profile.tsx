import { getUserAction } from "@/app/[userId]/actions";
import Image from "next/image";

const ProfileCard = async ({ userId }: { userId: string }) => {
	const user = await getUserAction(userId);

	const name = user[0].name;
	const email = user[0].email;
	const imageSrc = user[0].image;

	return (
		<div className="flex gap-2 items-end flex-wrap">
			<Image
				src={imageSrc || ""}
				alt="Profile Image"
				width="70"
				height="70"
				className="rounded-lg border-2 border-gray-500/15"
			/>

			<div>
				<h1 className="text-xl sm:text-2xl font-medium">{name}</h1>
				<p className="text-gray-500">{email}</p>
			</div>
		</div>
	);
};

export default ProfileCard;
