import { auth } from "@/app/auth";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Frame, Images, User, UserIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SignOut from "../SignOut";
import { ModeToggle } from "../theme-toggle";

const UserOptions = async () => {
	const session = await auth();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar>
					<AvatarImage src={session?.user?.image || ""} />
					<AvatarFallback>
						<User />
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end" className="mt-2">
				{session?.user && (
					<div className="p-2">
						<p className="font-semibold">{session?.user?.name}</p>
						<p className="text-sm text-gray-500">
							{session?.user?.email}
						</p>
					</div>
				)}

				<DropdownMenuSeparator />

				<div className="space-y-2">
					<DropdownMenuItem asChild>
						<Link href="/profile" className="p-2 font-medium">
							<span className="mr-2">
								<UserIcon size={16} />
							</span>
							Profile
						</Link>
					</DropdownMenuItem>

					<DropdownMenuItem asChild>
						<Link href="/profile" className="p-2 font-medium">
							<span className="mr-2">
								<Images size={16} />
							</span>
							My Items
						</Link>
					</DropdownMenuItem>

					<DropdownMenuItem asChild>
						<Link href="/profile" className="p-2 font-medium">
							<span className="mr-2">
								<Frame size={16} />
							</span>
							My Bids
						</Link>
					</DropdownMenuItem>

					<ModeToggle />
				</div>

				<DropdownMenuSeparator />

				<SignOut />
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserOptions;
