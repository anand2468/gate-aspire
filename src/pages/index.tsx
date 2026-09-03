import type {ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import JsonLd from '../components/SEO/JsonLd';
import styles from './index.module.css';
import st from './main.module.css';

const faqData = [
  {
    question: 'What is GATE Aspire and is it free?',
    answer:
      'GATE Aspire is a 100% free online GATE preparation platform designed for Computer Science & Engineering aspirants. It offers comprehensive subject-wise courses, topic-wise test series, solved previous year questions (PYQs), formula sheets, and practice sets.',
  },
  {
    question: 'What subjects are included in the GATE Computer Science course?',
    answer:
      'GATE Aspire covers core GATE CS subjects including Engineering Mathematics, Discrete Mathematics, Operating Systems, Digital Logic Design, C Programming, Data Structures, and Algorithms with structured topic-wise notes.',
  },
  {
    question: 'Does GATE Aspire offer a GATE test series and PYQ solutions?',
    answer:
      'Yes, GATE Aspire provides topic-wise practice questions, full-length mock test series, and step-by-step solved GATE previous year questions (PYQs) with shortcut techniques and revision notes.',
  },
  {
    question: 'How can I start preparing for GATE CS on GATE Aspire?',
    answer:
      'You can start your GATE preparation immediately by clicking on "Start Learning", selecting a subject course like Discrete Mathematics or Operating System, and following our structured study roadmaps.',
  },
];

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'GATE Computer Science & Engineering Preparation Course',
    description:
      'Comprehensive free GATE preparation course covering Engineering Mathematics, Discrete Mathematics, Operating Systems, Digital Logic, and C Programming with test series and PYQs.',
    provider: {
      '@type': 'Organization',
      name: 'GATE Aspire',
      sameAs: 'https://gateaspire.in',
    },
    isAccessibleForFree: true,
  };

  return (
    <Layout
      title="Free GATE Preparation, Courses & Test Series | GATE Aspire"
      description="Crack GATE Computer Science with free subject courses, topic-wise test series, solved PYQs, revision formula sheets, and comprehensive GATE preparation notes.">
      
      <JsonLd data={[faqSchema, courseSchema]} />

      <section className={clsx('hero hero--primary', styles.heroBanner, st.hero)}>
        <div>
          <h1 className={clsx('hero__title', st.heroTitle)}>
            Complete Free GATE Preparation, Courses & Test Series
          </h1>

          <p className={clsx('hero__subtitle', st.heroSubtitle)}>
            Master every GATE Computer Science subject with structured courses,
            topic-wise test series, solved previous year questions (PYQs), formula sheets,
            and expert preparation roadmaps—all 100% free.
          </p>

          <div className="buttons">
            <a href="/foreword" className="button button--secondary button--lg">
              Start GATE Preparation
            </a>
          </div>
        </div>
      </section>

      <div className={st.container}>
        {/* Stats Section */}
        <section className={st.stats}>
          <div className={st.card}>
            <h2>5+</h2>
            <p>Core GATE Courses</p>
          </div>

          <div className={st.card}>
            <h2>100+</h2>
            <p>Topic-wise GATE Notes</p>
          </div>

          <div className={st.card}>
            <h2>1000+</h2>
            <p>GATE PYQs & Test Questions</p>
          </div>

          <div className={st.card}>
            <h2>100%</h2>
            <p>Free Learning Platform</p>
          </div>
        </section>

        {/* Courses Section */}
        <div className={st.sectionHeader}>
          <h2>Free GATE Computer Science Courses</h2>
          <p>
            Structured subject courses designed specifically for GATE CS & IT aspirants.
            Study concept notes, solve practice problems, and excel in your GATE exam.
          </p>
        </div>

        <section className={st.coursesGrid}>
          <a href="/em" className={st.courseCard}>
            <div>
              <span className={st.courseTag}>Foundation</span>
              <h3>Engineering Mathematics</h3>
              <p>
                Complete linear algebra, calculus, probability, and statistics notes tailored for GATE preparation.
              </p>
            </div>
            <span className={st.courseLink}>Explore Course →</span>
          </a>

          <a href="/dm" className={st.courseCard}>
            <div>
              <span className={st.courseTag}>Core Subject</span>
              <h3>Discrete Mathematics</h3>
              <p>
                In-depth tutorials on set theory, mathematical logic, relations, functions, and graph theory.
              </p>
            </div>
            <span className={st.courseLink}>Explore Course →</span>
          </a>

          <a href="/os" className={st.courseCard}>
            <div>
              <span className={st.courseTag}>Core Subject</span>
              <h3>Operating System</h3>
              <p>
                Process management, CPU scheduling, memory management, deadlock, and concurrency for GATE.
              </p>
            </div>
            <span className={st.courseLink}>Explore Course →</span>
          </a>

          <a href="/dld" className={st.courseCard}>
            <div>
              <span className={st.courseTag}>Core Subject</span>
              <h3>Digital Logic Design</h3>
              <p>
                Boolean algebra, logic gates, combinational and sequential circuits with solved GATE PYQs.
              </p>
            </div>
            <span className={st.courseLink}>Explore Course →</span>
          </a>

          <a href="/c" className={st.courseCard}>
            <div>
              <span className={st.courseTag}>Programming</span>
              <h3>C Programming</h3>
              <p>
                Pointers, arrays, structures, recursion, and memory layout questions common in GATE exam.
              </p>
            </div>
            <span className={st.courseLink}>Explore Course →</span>
          </a>
        </section>

        {/* Features Section */}
        <div className={st.sectionHeader}>
          <h2>Everything You Need for GATE Preparation</h2>
          <p>
            GATE Aspire provides all essential learning and assessment tools to maximize your GATE score.
          </p>
        </div>

        <section className={st.features}>
          <div className={st.feature}>
            <h3>📚 Comprehensive GATE Courses</h3>
            <p>Concise, exam-oriented notes for every GATE Computer Science subject.</p>
          </div>

          <div className={st.feature}>
            <h3>📝 Solved Previous Year Questions</h3>
            <p>GATE PYQs with step-by-step explanations, alternative methods, and shortcuts.</p>
          </div>

          <div className={st.feature}>
            <h3>🎯 Topic-Wise GATE Test Series</h3>
            <p>Strengthen concept accuracy with curated practice questions and mock tests.</p>
          </div>

          <div className={st.feature}>
            <h3>📈 Full-Length Mock Exams</h3>
            <p>Real exam pattern practice tests with detailed performance analysis.</p>
          </div>

          <div className={st.feature}>
            <h3>⚡ GATE Revision Formula Sheets</h3>
            <p>Quick revision sheets and formula guides for fast last-minute revision.</p>
          </div>

          <div className={st.feature}>
            <h3>🗓️ Preparation Roadmaps</h3>
            <p>Structured preparation strategy and roadmaps for 3, 6, and 12-month GATE prep.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <div className={st.faqSection}>
          <div className={st.sectionHeader}>
            <h2>Frequently Asked Questions on GATE Preparation</h2>
            <p>Get answers to common queries about GATE preparation, courses, and test series.</p>
          </div>

          <div className={st.faqGrid}>
            {faqData.map((item, index) => (
              <div key={index} className={st.faqItem}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contribution Section */}
        <section className={st.contributionSection}>
          <div className={st.contributionCard}>
            <span className={st.contributionBadge}>🤝 Open Community Project</span>
            <h2>Help Fellow Aspirants — Contribute to GATE Aspire</h2>
            <p>
              GATE Aspire is an open community initiative for GATE aspirants. If you have quality notes,
              solved PYQs, formula cheat-sheets, or topic corrections, join us on GitHub to expand and refine our free study material!
            </p>
            <div className={st.contributionButtons}>
              <a
                href="https://github.com/anand2468/gate-aspire"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--secondary">
                Contribute on GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={st.cta} style={{marginBottom: '24px'}}>
          <h2>Start Your GATE Preparation Today</h2>

          <p style={{margin: '18px 0', color: 'var(--ifm-color-emphasis-700)'}}>
            Master every subject with free structured courses, practice test series,
            and PYQ revision resources.
          </p>

          <a href="/foreword" className="button button--primary button--lg">
            Explore Free GATE Resources
          </a>
        </section>
      </div>
    </Layout>
  );
}
