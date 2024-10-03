import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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
