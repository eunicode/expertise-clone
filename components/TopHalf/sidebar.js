import styles from "./sidebar.module.css";

const sideBarData = [
  {
    reason: "1. Availability",
    definition:
      "Consistently approachable and responsive, so customers never feel ignored.",
  },
  {
    reason: "2. Qualifications",
    definition:
      "Building customer confidence with licensing, accreditations, and awards.",
  },
  {
    reason: "3. Reputation",
    definition: "A history of delighted customers and outstanding service.",
  },
  {
    reason: "4. Experience",
    definition:
      "Masters of their craft, based on years of practical experience and education.",
  },
  {
    reason: "5. Professionalism",
    definition: "Providing service with honesty, reliability, and respect.",
  },
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarHeader}>Why these [professionals]?</h2>
      <p>
        Our goal is to connect people with the best local experts. We scored
        [city] [professionals] on more than 25 variables across five categories,
        and analyzed the results to give you a hand-picked list of the best.
      </p>
      <h3 className={styles.sidebarHeader}>Our selection criteria:</h3>
      {sideBarData.map((criteria, i) => (
        <>
          <h4 className={styles.sidebarHeader}>{criteria.reason}</h4>
          <p className={styles.sidebarText}>{criteria.definition}</p>
        </>
      ))}
      <style jsx>{`
        h3 {
          margin-bottom: 1em;
          font-weight: 500;
        }
        h2,
        p {
          margin-bottom: 1em;
        }
      `}</style>
    </aside>
  );
}
