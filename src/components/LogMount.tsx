import { useEffect } from "react";

export function LogMount({
	name,
	children,
}: {
	name: string;
	children: React.ReactNode;
}) {
	useEffect(() => {
		console.log(`${name} mounted.`);

		return () => {
			console.log(`${name} unmounted`);
		};
	}, [name]);

	return children;
}
