import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageTwo() {
	return (
		<div>
			<div>This is Page One</div>

			<Link href="/pageOne">Click Here to go to Page One</Link>
		</div>
	);
}
