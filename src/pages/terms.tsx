import React from 'react';
import Layout from '@theme/Layout';

export default function TermsOfService(): React.JSX.Element {
  return (
    <Layout
      title="Terms of Service | GATE Aspire"
      description="Terms of Service for GATE Aspire - Rules and guidelines for using our free educational resources, notes, and test series.">
      <main className="container margin-vert--lg" style={{ maxWidth: '850px' }}>
        <h1>Terms of Service</h1>
        <p><em>Last Updated: September 3, 2026</em></p>

        <p>
          Welcome to <strong>GATE Aspire</strong>! These terms and conditions outline the rules and regulations for the use of
          GATE Aspire's Website, located at <a href="https://gateaspire.in">https://gateaspire.in</a>.
        </p>

        <h2>1. Intellectual Property Rights</h2>
        <p>
          Unless otherwise stated, GATE Aspire and/or its licensors own the intellectual property rights for all material on GATE Aspire.
          All intellectual property rights are reserved. You may access this from GATE Aspire for your own personal educational use subjected to
          restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from GATE Aspire for commercial gain without explicit written consent.</li>
          <li>Sell, rent, or sub-license material from GATE Aspire.</li>
          <li>Reproduce, duplicate, or copy material from GATE Aspire for commercial resale.</li>
        </ul>

        <h2>2. Educational Content & Accuracy</h2>
        <p>
          The materials appearing on GATE Aspire's website could include technical, typographical, or photographic errors. GATE Aspire does not
          warrant that any of the materials on its website are 100% accurate, complete, or current. GATE Aspire may make changes to the materials
          contained on its website at any time without notice.
        </p>

        <h2>3. External Links Disclaimer</h2>
        <p>
          GATE Aspire has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site.
          The inclusion of any link does not imply endorsement by GATE Aspire of the site. Use of any such linked website is at the user's own risk.
        </p>

        <h2>4. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the
          exclusive jurisdiction of the courts in that location.
        </p>

        <h2>5. Modifications</h2>
        <p>
          GATE Aspire may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be
          bound by the then current version of these terms of service.
        </p>
      </main>
    </Layout>
  );
}
