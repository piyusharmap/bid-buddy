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
import { ModeToggleItem } from "../theme-toggle";

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
				<div className="p-2">
					<p className="font-medium">
						{session?.user?.name || "Hello, Guest"}
					</p>
					<p className="text-sm text-gray-500">
						{session?.user?.email || "Welcome to BidBuddy"}
					</p>
				</div>

				<DropdownMenuSeparator />

				<div className="space-y-2">
					{session && (
						<DropdownMenuItem asChild>
							<Link
								href={`/${session?.user?.id}`}
								className="p-2 font-medium cursor-pointer"
							>
								<span className="mr-2">
									<User2 size={16} />
								</span>
								Profile
							</Link>
						</DropdownMenuItem>
					)}

					{session && (
						<DropdownMenuItem asChild>
							<Link
								href="bid/create"
								className="p-2 font-medium cursor-pointer"
							>
								<span className="mr-2">
									<ImagePlus size={16} />
								</span>
								Create Bid
							</Link>
						</DropdownMenuItem>
					)}

					<ModeToggleItem />
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserOptions;
