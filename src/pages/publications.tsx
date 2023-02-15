import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <iframe src="https://serpapi.com/searches/0a8a692aee9bda01/63d88e5e654a8c2903b5cee3.xray"></iframe>
      </div>
    </Layout>
  );
}