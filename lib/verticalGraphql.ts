async function fetchQuery(query, variables = {}) {
  const res = await fetch("https://graphql.anilist.co", {
    // All requests to AniList GraphQL API must be made as a POST request
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables: variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json;
}

const QUERY_PAGES = {
  query: `
    query ($page: Int, $perPage: Int) {
      Page (page: $page, perPage: $perPage) {
        media {
          id
          title {
            english
          }
        }
      }
    }`,
  variables: {
    page: 1,
    perPage: 10,
  },
};

const QUERY_PAGE = {
  query: `
  query ($id: Int)  { # Define which variables will be used in the query (id)
    Media (id: $id) { # Insert our variables into the query arguments (id) 
        id
        title {
          english
        }
        genres
        averageScore
        countryOfOrigin
    }
  }`,
};

export async function getPages() {
  const payload = await fetchQuery(QUERY_PAGES.query, QUERY_PAGES.variables);
  console.log("hi");
  return payload;
}

export async function getPage(slug) {
  const payload = await fetchQuery(QUERY_PAGE.query, {
    slug: slug,
  });

  return payload;
}

// `
//       {
//         providerPages {
//           id
//           slug
//           title
//           metro
//           state
//           service
//         }
//       }
//     `

//     `
//   query PageBySlug ($slug: String) {
//     providerPages(where: {slug: $slug}) {
//       title
//       state
//       metro
//       service
//       slug
//       description
//       providerCards{
//         companyName
//         description
//       }
//     }
//   }
//   `
