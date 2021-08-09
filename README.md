# Expertise Clone

## Demo

## Features

- Responsive, mobile-first design

## To do

- Sticky header
- Use grid-gap to manage spacing between layout components
- Tweak text

LATER

- Use classnames library
- Use Tailwind
- How to use element selectors with CSS Modules
- Find out the difference between styled-jsx and styled-components

## Things I would do differently

I would use styled-components to keep CSS on the same page as JS, or
I would use Tailwind to avoid having to think of class names and try a utility-first class approach to keep styling atomic, composable and reusable.

## Lessons learned

- With Next.js, when using root relative paths, we don't include `public` in the path
- Next.js image's css overrides custom css
- We can't give React component instances classes
- Using CSS grid with CSS Modules is hard bc of locally scoped classes. If you have React component instances, use props to pass down styles or wrapper divs
- Use viewport meta tag to make websites full bleed in mobile views
- How to use Grid to make text overlay images
- Only Javascript expressions are allowed in JSX.

# Layout component example

This example shows a very common use case when building websites where you need to repeat some sort of layout for all your pages. Our pages are: `home`, `about` and `contact` and they all share the same layout and sidebar.

## Preview

Preview the example live on [StackBlitz](http://stackblitz.com/):

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/layout-component)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/layout-component&project-name=layout-component&repository-name=layout-component)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example layout-component layout-component-app
# or
yarn create next-app --example layout-component layout-component-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
