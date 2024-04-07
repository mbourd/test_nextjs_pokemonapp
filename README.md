This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project context

User Stories:

- As a user I want to be able to load the initial page and see all the Pokemon categories
- As a user I want to be able to click on one category/type and see all the Pokemons that belongs to that category/type
- As a user I want to be able to click in one of the Pokemon and see the Pokemon basic information and statuses in a graph
- As a user I want in the initial page be able to search for a specific Pokemon and filter
- As a user I want to be able to see the same Pokemon in different categories/types if it has two or more categories/types
- Please provide and show testing.

## Getting Started

First, install all dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Open Cypress interface

```bash
yarn cypress:open
```

This will open the Cypress testing framework, with open interface

## Run Cypress tests Components with CLI

```bash
yarn cypress:run:component
# or
yarn cypress:run:component:chrome
yarn cypress:run:component:firefox
```

This will execute cypress run command to test each spec file to check React components.

## Run Cypress tests E2E with CLI

```bash
yarn dev
# or
npm run dev

# then
yarn cypress:run:e2e
# or
yarn cypress:run:e2e:chrome
yarn cypress:run:e2e:firefox
```

This will execute cypress run command to test each E2E spec files.

## Run Jest test with CLI

```bash
yarn test
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
