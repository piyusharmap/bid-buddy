import { LogIn } from "lucide-react";
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
			<Button variant="outline">
				<LogIn size="16" className="mr-2" />
				<span className="hidden sm:block">Sign In</span>
			</Button>
		</form>
	);
};

export default SignIn;
