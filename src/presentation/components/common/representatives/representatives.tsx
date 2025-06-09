import { IMAGE } from 'src/presentation/assets';

import styles from './representatives.module.scss';

const LOGOS = [
    { alt: 'HS Consórcios', src: IMAGE.HS.src },
    { alt: 'Ancora', src: IMAGE.ANCORA.src, special: true},
    { alt: 'Embracon', src: IMAGE.EMBRACON.src },
    { alt: 'Santander Consórcio', src: IMAGE.SANTANDER.src },
    { alt: 'Rodobens', src: IMAGE.RODOBENS.src, special: true },
];

export default function Representatives() {
    return (
        <section className={styles.representativesSection}>
            <h3 className={styles.title}>REPRESENTANTE AUTORIZADA:</h3>
            <div className={styles.logosGrid}>
                {LOGOS.map((logo, idx) => {
                    return (
                        <div
                            className={`${styles.logoWrapper} ${logo.special ? styles.specialLogo : ''}`}
                            key={idx}
                        >
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className={styles.logoImg}
                            />
                        </div>
                    );
                })}
            </div>
            <hr className={styles.divider} />
        </section>
    );
}
