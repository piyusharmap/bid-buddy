import { auth } from "@/app/auth";
import SignIn from "../SignIn";
import SignOut from "../SignOut";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = async () => {
	const session = await auth();

	return (
		<div className="px-5 py-4 flex items-center justify-between border-b-1 border-primary-black/15">
			<Link href="/">
				<Image
					src="./bb_logo.svg"
					alt="BidBuddy"
					width="50"
					height="50"
				/>
				<p className="font-josefin_Sans font-semibold text-lg">
					BidBuddy
				</p>
			</Link>

			<div className="flex gap-2 items-center">
				<Link href="/create-bid">
					<Button variant="outline">New Bid</Button>
				</Link>

				{session ? <SignOut /> : <SignIn />}

				{session && (
					<Link href="/profile">
						<Avatar>
							<AvatarImage src={session?.user?.image || ""} />
							<AvatarFallback>NA</AvatarFallback>
						</Avatar>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
