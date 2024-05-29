import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "@/app/auth";

const SignOut = () => {
	return (
		<form
			action={async () => {
				"use server";
				await signOut();
			}}
		>
			<Button variant="outline">
				<LogOut size="16" className="mr-2" />
				<span className="hidden sm:block">Log Out</span>
			</Button>
		</form>
	);
};

export default SignOut;
