import Link from "next/link";
import { useEffect, useState } from "react";

export default function PageOne() {
	return (
		<div>
            <div>This is Page One</div>
			<Link href="/pageTwo">Click Here to go to Page Two</Link>
		</div>
	);
}
