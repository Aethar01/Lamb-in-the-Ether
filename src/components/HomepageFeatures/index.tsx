import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

type EmbedItem = {
    title: string;
    html: JSX.Element;
};

const EmbedList: EmbedItem[] = [
    {
        title: 'Bastion',
        html: (
            <iframe frameborder="0" src="https://itch.io/embed/2933440" width="208" height="167"><a href="https://lamb-in-the-ether.itch.io/bastion">Bastion by Lamb in the Ether</a></iframe>
        )
    },
    {
        title: 'Wizard Politics',
        html: (
            <iframe frameborder="0" src="https://itch.io/embed/2983948" width="208" height="167"><a href="https://lamb-in-the-ether.itch.io/wizard-politics">Wizard Politics by Lamb in the Ether</a></iframe>
        )
    }
];

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Embed({title, html}: EmbedItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Heading as="h1">{title}</Heading>
                {html}
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {EmbedList.map((props, idx) => (
            <Embed key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
