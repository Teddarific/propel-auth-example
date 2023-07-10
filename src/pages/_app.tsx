import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {  RequiredAuthProvider } from "@propelauth/react";
import { Wrapper } from "@/components/Wrapper";


// Remove the RequiredAuthProvider to see the expected behavior.
export default function App({ Component, pageProps }: AppProps) {
	return (
		<RequiredAuthProvider
			authUrl={
				process.env.NEXT_PUBLIC_AUTH_URL ??
				"https://607430308.propelauthtest.com"
			}
		>
			<Wrapper>
				<Component {...pageProps} />
			</Wrapper>
		</RequiredAuthProvider>
	);
}
