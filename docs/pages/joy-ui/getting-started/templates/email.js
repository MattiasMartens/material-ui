import * as React from 'react';
import Head from 'next/head';
import EmailApp from 'docs/data/joy/getting-started/templates/email/App';
import { NextNProgressBar } from 'docs/src/modules/components/AppFrame';

export default function Email() {
  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href={`https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap`}
          rel="stylesheet"
        />
      </Head>
      <NextNProgressBar />
      <EmailApp />
    </React.Fragment>
  );
}
