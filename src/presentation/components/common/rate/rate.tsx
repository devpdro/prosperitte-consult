import { IconTarget, IconTrendingUp, IconHome, IconCalculator } from '@tabler/icons-react';
import styles from './rate.module.scss';

const benefits = [
    {
        icon: <IconTarget size={32} stroke={2} />,
        title: 'Patrimônio em Construção',
        description: 'Sem esvaziar o caixa, você constrói patrimônio de forma inteligente e sustentável.'
    },
    {
        icon: <IconTrendingUp size={32} stroke={2} />,
        title: 'Renda Passiva',
        description: 'Gere renda mensal sem juros bancários, usando o dinheiro do inquilino.'
    },
    {
        icon: <IconHome size={32} stroke={2} />,
        title: 'Imóvel Quitado',
        description: 'Ao final, você tem um imóvel quitado com valorização e lucro mensal.'
    }
];

const conceptSteps = [
    {
        number: '20%',
        title: 'Seu Investimento',
        description: 'Apenas 20% do valor total, parcelado e planejado'
    },
    {
        number: '80%',
        title: 'Pago pelo Inquilino',
        description: 'Os outros 80% são cobertos pelo aluguel mensal'
    }
];

export default function Rate() {
    return (
        <section className={styles.rateSection}>
            <div className={styles.container}>
                <div className={styles.conceptGrid}>
                    <div className={styles.conceptCard}>
                        <div className={styles.conceptContent}>
                            <h3 className={styles.conceptTitle}>
                                Estratégia de Alavancagem Inteligente
                            </h3>
                            <p className={styles.conceptDescription}>
                                Em vez de imobilizar 100% do capital pagando o imóvel à vista, você investe cerca de 20% de forma parcelada e planejada. Os outros 80%? São pagos pelo próprio inquilino, via aluguel que pode cobrir integralmente as parcelas do consórcio.
                            </p>
                        </div>
                    </div>

                    <div className={styles.stepsContainer}>
                        {conceptSteps.map((step, index) => (
                            <div className={styles.stepCard} key={index}>
                                <div className={styles.stepNumber}>
                                    {step.number}
                                </div>
                                <div className={styles.stepContent}>
                                    <h4 className={styles.stepTitle}>{step.title}</h4>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.benefitsSection}>
                    <h3 className={styles.benefitsTitle}>
                        Na prática, você obtém:
                    </h3>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, index) => (
                            <div className={styles.benefitCard} key={index}>
                                <div className={styles.benefitIcon}>
                                    {benefit.icon}
                                </div>
                                <div className={styles.benefitContent}>
                                    <h4 className={styles.benefitTitle}>{benefit.title}</h4>
                                    <p className={styles.benefitDescription}>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
