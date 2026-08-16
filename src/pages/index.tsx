import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import st from './main.module.css'


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Prepare for GATE with free notes, previous year questions, mock tests, practice problems and study material. Learn, practice and improve your GATE preparation with GATE Aspire.">
           
      <section className={clsx('hero hero--primary', styles.heroBanner)}>

        <div>

          <h1 className="hero__title">Everything You Need to Crack GATE.</h1>

          <p className="hero__subtitle">
            Comprehensive notes, previous year questions, formulas,
            practice sets, mock tests, and structured preparation for every
            GATE subject—all in one place.
          </p>

          <div className="buttons">
            {/* <a href="#" className="button button--primary">Start Learning</a>
            <span style={{width:"5px"}}></span> */}
            <a href="/index" className="button button--secondary button--lg">Start Learning</a>
          </div>

        </div>

      </section>
      
      <div className={st.container}>
        <section className={st.stats}>

          <div className={st.card}>
            <h2>2</h2>
            <p>Subjects Covered</p>
          </div>

          <div className={st.card}>
            <h2>2</h2>
            <p>Topic-wise Notes</p>
          </div>

          <div className={st.card}>
            <h2>0K+</h2>
            <p>Practice Questions</p>
          </div>

          <div className={st.card}>
            <h2>100%</h2>
            <p>Free Learning Resources</p>
          </div>

        </section>

        <section className={st.features}>

          <div className={st.feature}>
            <h3>📚 Complete Notes</h3>
            <p>Concise, exam-oriented notes for every GATE subject.</p>
          </div>

          <div className={st.feature}>
            <h3>📝 Previous Year Questions</h3>
            <p>Solved PYQs with detailed explanations and shortcuts.</p>
          </div>

          <div className={st.feature}>
            <h3>🎯 Topic-wise Practice</h3>
            <p>Strengthen concepts using curated questions.</p>
          </div>

          <div className={st.feature}>
            <h3>📈 Mock Tests</h3>
            <p>Full-length tests with performance analysis.</p>
          </div>

          <div className={st.feature}>
            <h3>⚡ Formula Sheets</h3>
            <p>Quick revision sheets for last-minute preparation.</p>
          </div>

          <div className={st.feature}>
            <h3>🗓️ Study Roadmaps</h3>
            <p>Structured plans for 3, 6, and 12-month preparation.</p>
          </div>

        </section>

        <section className={st.cta} style={{marginBottom:"24px"}}>

          <h2>Start Your GATE Journey Today</h2>

          <p style={{ margin: "18px 0", color: "#666" }}>
            Master every subject with structured notes, practice,
            and revision resources.
          </p>

          <a href="/index" className="button button--primary">Explore Resources</a>

        </section>
      </div>
    </Layout>
  );
}
