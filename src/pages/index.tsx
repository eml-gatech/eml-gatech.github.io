import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className="hero__subtitle">
          Our group works on the understanding and design of defects in the bulk and at the interfaces of 
          semiconductors by novel deposition and characterization techniques. We study how dimensionality 
          and chemical composition in semiconductors affect electronic defect formation and strive to design 
          deposition methods that allow us to control these materials at the nanoscale.
      </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className='container'>
          <h1><p className="heading new_title">News and Updates</p></h1>
          <div className='tweets'>
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="BaenaLab"
            options={{height: 600, width: "100%"}}
          />
          </div>
        </div>
      </main>
    </Layout>
  );
}
