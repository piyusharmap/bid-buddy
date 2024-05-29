import { LogOutIcon } from "lucide-react";
import { signOut } from "@/app/auth";
import { DropdownMenuItem } from "./ui/dropdown-menu";

const SignOut = () => {
	return (
		<form
			action={async () => {
				"use server";
				await signOut();
			}}
		>
			<DropdownMenuItem className="flex items-center gap-2 text-red-500">
				<LogOutIcon size={16} />
				<p className="font-medium">Log Out</p>
			</DropdownMenuItem>
		</form>
	);
};

export default SignOut;
