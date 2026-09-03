import React from 'react';
import Layout from '@theme/Layout';

export default function ContactUs(): React.JSX.Element {
  return (
    <Layout
      title="Contact Us | GATE Aspire"
      description="Contact the GATE Aspire team for support, feedback, content contributions, or general inquiries.">
      <main className="container margin-vert--lg" style={{ maxWidth: '850px' }}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Whether you have questions about our GATE study resources, feedback, or content contributions, feel free to get in touch.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '32px 0' }}>
          <div style={{ background: 'var(--ifm-card-background-color)', border: '1px solid var(--ifm-color-emphasis-200)', padding: '24px', borderRadius: '12px' }}>
            <h3>📧 Email Inquiries</h3>
            <p>For support, suggestions, or business inquiries:</p>
            <p><strong>im.anandrn@gmail.com</strong></p>
          </div>

          <div style={{ background: 'var(--ifm-card-background-color)', border: '1px solid var(--ifm-color-emphasis-200)', padding: '24px', borderRadius: '12px' }}>
            <h3>🤝 Community & GitHub</h3>
            <p>To report errors or contribute notes/PYQ solutions:</p>
            <a href="https://github.com/anand2468/gate-aspire" target="_blank" rel="noopener noreferrer" className="button button--secondary">
              GATE Aspire GitHub Repo →
            </a>
          </div>
        </div>

        <h2>Frequently Requested Info</h2>
        <p>If you are looking for specific resources, explore these links:</p>
        <ul>
          <li><a href="/foreword">GATE CS Syllabus & Subject Index</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/about">About GATE Aspire</a></li>
        </ul>
      </main>
    </Layout>
  );
}
