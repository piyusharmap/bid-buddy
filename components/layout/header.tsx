import { auth } from "@/app/auth";
import SignIn from "../SignIn";
import SignOut from "../SignOut";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = async () => {
	const session = await auth();

	return (
		<div className="container py-2 flex items-center justify-between border-b-2 border-slate-100">
			<div>
				<h1 className="font-bold text-lg">BidBuddy</h1>
			</div>

			<div className="flex gap-2 items-center">
				{session ? <SignOut /> : <SignIn />}
				<p className="font-semibold">{session?.user?.name}</p>
				<Avatar>
					<AvatarImage src={session?.user?.image || ""} />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</div>
		</div>
	);
};

export default Header;
