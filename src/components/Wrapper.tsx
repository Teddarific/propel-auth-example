import { useEffect, useState } from "react";

export function Wrapper({ children }: { children: React.ReactNode }) {
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	}, []);

	if (isLoading) {
		return <div>The wrapper is loading...</div>;
	}

	return <div>{children}</div>;
}
