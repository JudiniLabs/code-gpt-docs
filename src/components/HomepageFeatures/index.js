import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { Redirect } from '@docusaurus/router';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/code_gpt_easy_to_use.svg').default,
    description: (
      <>
        Code GPT was designed from the ground up to be easily installed and with simple usage options.
      </>
    ),
  },
  {
    title: 'Flexible Configuration',
    Svg: require('@site/static/img/code_gpt_config.svg').default,
    description: (
      <>
        Modify the parameters of each query to better tune each response generation
      </>
    ),
  },
  {
    title: 'Select AI providers',
    Svg: require('@site/static/img/code_gpt_select_provider.svg').default,
    description: (
      <>
        Select different providers like <a href="https://openai.com/" target="_blank">OpenAI</a>, <a href="https://app.codegpt.co" target="_blank">CodeGPT Plus</a>, <a href="https://cloud.google.com/" target="_blank">Google Gemini</a>, <a href="https://azure.microsoft.com/" target="_blank">Microsoft Azure</a>, <a href="https://www.anthropic.com/" target="_blank">Anthropic</a> or <a href="https://ollama.ai" target="_blank">Ollama</a>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return <Redirect to="/docs/intro" />;
}
