import { auth } from "@/app/auth";
import SignIn from "../SignIn";
import Link from "next/link";
import UserOptions from "./UserOptions";
import { Button } from "../ui/button";

const Header = async () => {
	const session = await auth();

	return (
		<div className="mx-auto max-w-7xl px-5 py-4 flex items-center justify-between border-b-1 border-primary-black/15">
			<div>
				<Link href="/" className="font-medium hover:text-blue-500">
					Live Bids
				</Link>
			</div>

			<div className="flex gap-4 items-center">
				<Button asChild>
					<Link href="bid/create">Create Bid</Link>
				</Button>

				{session ? <UserOptions /> : <SignIn />}
			</div>
		</div>
	);
};

export default Header;
