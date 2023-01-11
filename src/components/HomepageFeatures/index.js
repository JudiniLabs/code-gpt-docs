import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

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
        Select different providers like <a href="https://openai.com/" target="_blank">OpenAI</a>, <a href="https://cohere.ai/" target="_blank">Cohere</a> or <a href="https://www.ai21.com/" target="_blank">AI21</a>.
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
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
