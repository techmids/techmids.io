import dynamic from "next/dynamic";
import { MoonStars, Sun } from "tabler-icons-react";
import useDarkMode from "use-dark-mode";

function UnsafeDarkModeToggle() {
	const darkMode = useDarkMode(false, {
		classNameDark: "dark",
		classNameLight: "light",
		element: document.documentElement,
	});

	return (
		<button onClick={darkMode.toggle} className="block">
			<span className="sr-only">
				{darkMode.value ? "Disable dark mode" : "Enable dark mode"}
			</span>
			{darkMode.value ? <Sun /> : <MoonStars />}
		</button>
	);
}

// Make DarkModeToggle no-SSR so there's not hydration mismatches in toggle
export const DarkModeToggle = dynamic(
	() => Promise.resolve(UnsafeDarkModeToggle),
	{ ssr: false }
);
