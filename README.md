# Expertise Clone

## Description

A recreation of Expertise's [vertical page](https://www.expertise.com/ca/los-angeles/plumbing).

## Demo

https://expertise-clone.vercel.app/verticalpage

## Features

- Responsive, mobile-first layout with CSS Grid

## Tech Stack

- React

## Lessons learned - CSS

- Using CSS grid with CSS Modules is tricky bc of locally scoped classes. If Grid children are React component instances, use props to pass down styles or use wrapper divs
- Use viewport meta tag to make websites full bleed in mobile views
- How to use Grid to make text overlay images
- Use `position: sticky` to make headers sticky and offset header height in one line
- Start with mobile design, then add media queries for larger viewports

## Things I would do differently

I would use styled-components to keep my CSS on the same page as my JS, or
I would use Tailwind to avoid having to think of class names and learn a utility-first class approach to keep styling atomic and composable, to easily find relevant styles, and to prevent CSS from growing.

## To do

- Implement card "more info" dropdown
- Implement navigation menu dropdown
- Switch card from flex to grid to maintain image to text ratio regardless of amount of text
- Use grid-gap to manage spacing between layout components
- DRY up card footer
- Tweak text
- DRY up styles, e.g. create utility classes

LATER

- Use classnames library
- Use Tailwind
- Search how to use element selectors with CSS Modules
- Find out the difference between styled-jsx and styled-components
- Search how to prevent flex grow

## Notes

- With Next.js, when using _root_ relative paths, don't include `public` in the path
- Next.js image's css overrides custom css(?)
- Only Javascript expressions are allowed in JSX. Can't use statements.
- Use camelCase with CSS Modules
- You can use element selectors with CSS Modules if you target it with a class first

## Setup

Clone/download project.

Move to project folder.

Run `npm install`.

Run `npm run dev`.

Development server will be running at http://localhost:3000/

## Attribution

This project was scaffolded with [Next.js](https://github.com/vercel/next.js/tree/master/examples/layout-component)

## Project continuation

## Lessons learned - GraphQL

- A GraphQL API request should be a POST request with a JSON body of the form `{ "query": "...", "variables": {...} }` (https://graphql.org/learn/serving-over-http/)
- GraphQL API response will be JSON
- To give a query variables, you use the `query` keyword and declare typed variables with `$`: `query ($id: Int) {...}`.
- Then you specify where they'll be used: `Media (id: $id) {...}`
- Then you define the variable values: `{ "query": "...", "variables": { "id": 1525} }`

## Lessons learned - Dynamic routing

https://expertise-clone.vercel.app/verticalmetros/1

- Check if query works in GraphiQL and then Postman
- Read Nextjs API documentation for details on how getStaticPaths(), getStaticProps() work. The tutorial or other resources don't explain as clearly.
- getStaticPaths() - Get paths (slugs) from API. Then give the list of paths to Nextjs. Nextjs will statically pre-render all the paths.

```
return {
  paths: [
    { params: { id: '1' } },
    { params: { id: '2' } }
  ]
}
```

- The path must be a string, it can't be a number
- getStaticProps() - Feed data into your component via props. Similar to Redux's mapStateToProps()

```
return {
  props: {
    ninja: data
  }
}
```

- getStaticProps() automatically gets a `context` parameter. The `context` object has a `params` key that holds the page's route parameter; the id/slug. This is how you can connect the correct data to the correct route/page. You make a fetch request with the id.
- If you're going to create an index of page links, your query should include the slug and title of the page
