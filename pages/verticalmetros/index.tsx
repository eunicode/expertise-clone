import { getPages } from "../../lib/verticalGraphql";
import Link from "next/link";

export async function getStaticProps() {
  let data = await getPages();
  data = data.data.Page.media;

  return {
    props: {
      verticalMetroData: data,
    },
  };
}

export default function VerticalMetros({ verticalMetroData }) {
  console.log(verticalMetroData);

  return (
    <div>
      <h2>All Vertical Metro pages</h2>
      {verticalMetroData.map((verticalMetro) => {
        return (
          <Link
            href={`/verticalmetros/${verticalMetro.id}`}
            key={verticalMetro.id}
          >
            <a>
              <h3>{verticalMetro.title.english}</h3>
            </a>
          </Link>
        );
      })}
    </div>
  );
}

/*
NOTES
Can't use console.log() in getStaticProps()
You can use console.log(graphQL data) in React function component though.
 */
