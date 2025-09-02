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
        description: 'Possibilidade de renda mensal com ativos reais alugados.'
    },
    {
        icon: <IconHome size={32} stroke={2} />,
        title: 'Imóvel Quitado',
        description: 'Imóvel quitado com potencial de valorização e geração de receita.'
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
        description: 'O aluguel pode ajudar a cobrir parte ou até a totalidade das parcelas'
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
                                Em vez de imobilizar 100% do capital pagando o imóvel à vista, você investe cerca de 20% de forma parcelada e planejada. Os outros 80%? São pagos pelo próprio inquilino, via aluguel que pode cobrir integralmente as parcelas do contrato.
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
