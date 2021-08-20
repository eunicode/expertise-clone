import Layout from "../../components/layout";
import { getPages, getPage } from "../../lib/verticalGraphql";

export async function getStaticPaths() {
  let data = await getPages();
  data = data.data.Page.media;

  const paths = data.map((obj) => {
    return {
      // Error: A required parameter (slug) was not provided as a string in getStaticPaths for /verticalmetros/[slug]
      // `id` is a number. It needs to be a string to be used as a path
      params: { slug: obj.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const slug = Number.parseInt(context.params.slug);
  let data = await getPage(slug);
  data = data.data.Media;

  return {
    props: {
      verticalMetroData: data,
    },
  };
}

export default function VerticalMetro({ verticalMetroData }) {
  // console.log(verticalMetroData);

  const multiplier = (data) => {
    const cards = [];

    for (let i = 0; i < 5; i += 1) {
      cards.push(
        <div key={i}>
          <div>Business Name: {data.title.english}</div>
          <div>Tags: {data.genres.join(", ")}</div>
          <div>Address: {data.countryOfOrigin}</div>
          <div>Reputation: {data.averageScore}</div>
          <br />
        </div>
      );
    }

    return cards;
  };

  return <Layout>{multiplier(verticalMetroData)}</Layout>;
}

/*
List of errors
Forgot to add "default" to React component in [slug].tsx 

TypeError: Cannot read property 'title' of undefined

Unexpected token u in JSON at position 0 <-- This means undefined
*/
