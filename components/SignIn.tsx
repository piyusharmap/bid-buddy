import { Button } from "./ui/button";
import { signIn } from "@/app/auth";

const SignIn = () => {
	return (
		<form
			action={async () => {
				"use server";
				await signIn("google");
			}}
		>
			<Button variant="default">Sign In</Button>
		</form>
	);
};

export default SignIn;
