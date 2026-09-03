import React from 'react';
import Layout from '@theme/Layout';

export default function AboutUs(): React.JSX.Element {
  return (
    <Layout
      title="About Us | GATE Aspire"
      description="Learn about GATE Aspire's mission to empower Computer Science & Engineering students with free, structured preparation resources, courses, and solved PYQs.">
      <main className="container margin-vert--lg" style={{ maxWidth: '850px' }}>
        <h1>About GATE Aspire</h1>
        <p className="hero__subtitle" style={{ color: 'var(--ifm-color-emphasis-700)', fontSize: '1.1rem' }}>
          Empowering Computer Science & Information Technology aspirants to crack GATE with free, structured, high-quality learning resources.
        </p>

        <hr style={{ margin: '24px 0' }} />

        <h2>Our Mission</h2>
        <p>
          Preparing for the Graduate Aptitude Test in Engineering (GATE) can often feel overwhelming due to scattered notes, expensive coaching programs, and unverified solutions.
          <strong>GATE Aspire</strong> was created to solve this challenge by building a centralized, 100% free, open platform where aspirants can master every subject with clarity and confidence.
        </p>

        <h2>What We Provide</h2>
        <ul>
          <li><strong>Structured Subject Courses</strong>: Comprehensive concept tutorials covering Engineering Mathematics, Discrete Mathematics, Operating Systems, Digital Logic Design, and C Programming.</li>
          <li><strong>Step-by-Step Solved PYQs</strong>: Detailed solutions for previous year GATE questions with shortcut techniques and conceptual breakdowns.</li>
          <li><strong>Topic-wise Practice & Test Series</strong>: Concept-strengthening practice sets designed to simulate real exam patterns.</li>
          <li><strong>Formula & Revision Sheets</strong>: Concise last-minute revision formula sheets for rapid recall before the exam.</li>
        </ul>

        <h2>Open & Community Driven</h2>
        <p>
          GATE Aspire is built by passionate educators and high-scoring GATE alumni. Our content is open-source and continuously refined by the student and developer community.
          Anyone can suggest edits, contribute notes, or improve problem solutions via our <a href="https://github.com/anand2468/gate-aspire" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
        </p>

        <h2>Connect With Us</h2>
        <p>
          Have questions, feedback, or suggestions? Visit our <a href="/contact">Contact Page</a> or reach out to us at <code>im.anandrn@gmail.com</code>.
        </p>
      </main>
    </Layout>
  );
}
