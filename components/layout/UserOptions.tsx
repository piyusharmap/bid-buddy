import { auth } from "@/app/auth";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ImagePlus, Images, User2 } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UserOptions = async ({ userId }: { userId?: string }) => {
	const session = await auth();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="cursor-pointer">
				<Avatar>
					<AvatarImage src={session?.user?.image || ""} />
					<AvatarFallback>
						<User2 />
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>

			<DropdownMenuContent align="end">
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
						<Link
							href="/profile"
							className="p-2 font-medium cursor-pointer"
						>
							<span className="mr-2">
								<User2 size={16} />
							</span>
							Profile
						</Link>
					</DropdownMenuItem>

					<DropdownMenuItem asChild>
						<Link
							href={`/items/${userId}`}
							className="p-2 font-medium cursor-pointer"
						>
							<span className="mr-2">
								<Images size={16} />
							</span>
							My Items
						</Link>
					</DropdownMenuItem>

					<DropdownMenuItem asChild>
						<Link
							href="#"
							className="p-2 font-medium cursor-pointer"
						>
							<span className="mr-2">
								<ImagePlus size={16} />
							</span>
							Create Bid
						</Link>
					</DropdownMenuItem>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserOptions;
