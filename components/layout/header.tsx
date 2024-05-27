import { auth } from "@/app/auth";
import SignIn from "../SignIn";
import SignOut from "../SignOut";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = async () => {
	const session = await auth();

	return (
		<div className="px-5 py-4 flex items-center justify-between border-b-1 border-primary-black/15">
			<div>
				<h1 className="font-jost font-semibold text-lg">BidBuddy</h1>
			</div>

			<div className="flex gap-2 items-center">
				{session ? <SignOut /> : <SignIn />}
				<Avatar>
					<AvatarImage src={session?.user?.image || ""} />
					<AvatarFallback>BB</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
};

export default Header;
