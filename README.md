# João Ortiz Nuxt.js Exercise

This exercise was developed using nuxt.js, tailwindcss and @nuxtjs/tailwindcss to configurate tailwindcss automatically.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```
## Description

This project consists of a main page where you have a NuxtLink to the events page.

The Events page where all events listed are NuxtLinks to the event respective ```/events/[slug]``` page with a swipe transition.

The Event page where it have a gradient color based on the current event ```accent_colour``` property, the event title and some of it's information.
## Pros

Built with 3 pages and dynamic route for the ```/event/[slug]``` page, with nested routes, used the ```useFetch()``` hook, which will create a unique key for the request based on the url, this reduces unecessary data fetching and helps the app optimization.

All pages are resposive utilizing tailwindcss breakpoints ```sm: md: lg:``` to define the desktop style rules and classes without the breakpoint for the mobile version.

## Cons

No use of the ```Layouts``` feature of nuxt, as it's a simple app which didnt required complex layouts, but as the application grows some layouts can be extracted such as the filters form.

No use of a dynamic route for the ```/events``` page, as the request still simple without much options to filter through parameters, but as application grows the endpoint can become more complex and a ```/events-[option]``` dynamic route would be useful to configure parameters for the fetch request.

Simple page transitions, only swipe and blur transitions with no keyframes to make a smoother transition, and no tailwindcss configuration, used the default tailwindcss configuration.
## License

[MIT](https://choosealicense.com/licenses/mit/)