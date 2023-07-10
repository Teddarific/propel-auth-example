To run the server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit http://localhost:3000/pageOne

It should show as "Loading" for the first five seconds. You can click on the link to navigate to page two, where you'll see that the loading occurs again.

If you go into `_app.tsx` and comment out the `RequiredAuthProvider` and run the above steps again, you'll notice that the loading while navigating between the two pages does not happen.

