import styles from "../styles/experienceList.module.css" ;

export interface Experience {
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  skills: string[];
  description: string;
}

interface ExperienceListProps {
  experience: Experience[];
}


function Connector() {
  return (
    <div className={styles.connector}>
      <div className={styles.arrowRow}>
        <div className={styles.line} />
        <div className={styles.arrowhead} />
      </div>
    </div>
  );
}

export default function ExperienceList({ experience }: { experience: Experience[] }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.panel}>
        <h2 className={styles.heading}>/ Experience</h2>
        <p className={styles.eyebrow}>
          <span className={styles.k}>const</span> experience{" "}
          <span className={styles.p}>=</span> new LinkedList
          <span className={styles.p}>()</span>
        </p>

        <div className={styles.trackOuter}>
          <div className={styles.track}>
            <div className={styles.head}>
              <div className={styles.arrowRow}>
                <div className={styles.headLine} />
                <div className={styles.headArrowhead} />
              </div>
            </div>

            {experience.map((item, i) => (
              <div key={item.position} style={{ display: "contents" }}>
                <div className={styles.node}>
                  <p className={styles.role}>{item.position}</p>
                  <span className={styles.dates}>{item.startDate} — {item.endDate}</span>
                  <span className={styles.platform}>
                    
                    {item.company}
                  </span>
                  <p className={styles.desc}>{item.description}</p>
                </div>
                <Connector  />
              </div>
            ))}

            <div className={styles.nullBox}></div>
          </div>
        </div>
      </div>
    </div>
  );
}