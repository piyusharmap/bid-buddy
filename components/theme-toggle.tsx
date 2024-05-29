"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { DropdownMenuItem } from "./ui/dropdown-menu";

export function ModeToggle() {
	const { setTheme, resolvedTheme } = useTheme();

	function handleThemeToggle() {
		if (resolvedTheme === "dark") {
			setTheme("light");
		} else setTheme("dark");
	}

	return (
		<DropdownMenuItem
			className="w-full flex items-center gap-2"
			onClick={handleThemeToggle}
		>
			{resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
			<p className="font-medium">Toggle Theme</p>
		</DropdownMenuItem>
	);
}
