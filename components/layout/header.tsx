import { auth } from "@/app/auth";
import SignIn from "../SignIn";
import Link from "next/link";
import UserOptions from "./UserOptions";
import Image from "next/image";
import SignOut from "../SignOut";
import { ModeToggle } from "../theme-toggle";

const Header = async () => {
	const session = await auth();

	return (
		<div className="mx-auto max-w-7xl px-5 py-2 flex items-center justify-between border-b border-gray-300 dark:border-gray-800">
			<Link href="/" className="flex items-end gap-2 font-medium">
				<Image
					src="./bb_logo.svg"
					alt="BidBuddy"
					width="35"
					height="35"
				/>
				<p className="hidden sm:block font-semibold text-lg">
					Bid<span className="text-red-500">Buddy</span>
				</p>
			</Link>

			<div className="flex gap-2 items-center">
				{session ? <SignOut /> : <SignIn />}

				<UserOptions userId={session?.user?.id} />
			</div>
		</div>
	);
};

export default Header;
