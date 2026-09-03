import React from 'react';
import Head from '@docusaurus/Head';

interface JsonLdProps {
  data: Record<string, any> | Record<string, any>[];
}

export default function JsonLd({ data }: JsonLdProps): React.JSX.Element {
  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Head>
  );
}
