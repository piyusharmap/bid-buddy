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
			<Button variant="destructive">Log Out</Button>
		</form>
	);
};

export default SignOut;
