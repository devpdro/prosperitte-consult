import { IconTarget, IconMessageCircle, IconChartBar, IconShieldCheck, IconPhoneCall, IconBookmark } from '@tabler/icons-react';
import styles from './letters.module.scss';

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20consultoria.';

const consultationSteps = [
    {
        icon: <IconTarget size={32} stroke={2} />,
        title: 'Análise de Perfil',
        description: 'Avaliação completa do seu perfil financeiro: patrimônio atual, fluxo de caixa e perfil de risco.'
    },
    {
        icon: <IconChartBar size={32} stroke={2} />,
        title: 'Definição de Objetivos',
        description: 'Estabelecimento de metas financeiras de médio e longo prazo, com foco em renda passiva e crescimento patrimonial.'
    },
    {
        icon: <IconShieldCheck size={32} stroke={2} />,
        title: 'Estratégia Personalizada',
        description: 'Desenvolvimento de um plano sob medida para seu perfil e objetivos, com uso de ativos reais, simulações práticas e cronograma estratégico de crescimento patrimonial.'
    },
    {
        icon: <IconMessageCircle size={32} stroke={2} />,
        title: 'Assessoria Especializada',
        description: 'Acompanhamento na aquisição de ativos imobiliários estratégicos ou otimização de carteira da carteira pratimonial.'
    }
];

const raizMethod = [
    {
        letter: 'R',
        title: 'Retorno',
        description: 'Geração de renda passiva + valorização patrimonial sustentável'
    },
    {
        letter: 'A',
        title: 'Alavancagem',
        description: 'Multiplicação do poder de compra sem comprometer capital próprio'
    },
    {
        letter: 'I',
        title: 'Investimento',
        description: 'Ativo real, tangível e com proteção contra volatilidade de mercado'
    },
    {
        letter: 'Z',
        title: 'Zero de Crescimento',
        description: 'Estabilidade financeira com foco em patrimônio real e previsibilidade'
    }
];

export default function Letters() {
    return (
        <section className={styles.lettersSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.mainTitle}>
                        Metodologia da Consultoria
                    </h2>
                    <p className={styles.subtitle}>
                        Transformação patrimonial através de estratégias avançadas de alavancagem financeira
                    </p>
                </div>

                <div className={styles.consultationSection}>
                    <div className={styles.stepsGrid}>
                        {consultationSteps.map((step, index) => (
                            <div className={styles.stepCard} key={index}>
                                <div className={styles.stepIcon}>
                                    {step.icon}
                                </div>
                                <div className={styles.stepContent}>
                                    <h3 className={styles.stepTitle}>{step.title}</h3>
                                    <p className={styles.stepDescription}>{step.description}</p>
                                </div>
                                <div className={styles.stepNumber}>{index + 1}</div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.ctaSection}>
                        <div className={styles.ctaContent}>
                            <div className={styles.ctaIcon}>
                                <IconPhoneCall size={40} stroke={2} />
                            </div>
                            <h3 className={styles.ctaTitle}>
                                Agende sua Consultoria Estratégica
                            </h3>
                            <p className={styles.ctaSubtitle}>
                                Primeira sessão gratuita para análise do seu perfil financeiro
                            </p>
                        </div>
                        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                            AGENDAR CONSULTORIA GRATUITA
                        </a>
                    </div>
                </div>

                <div className={styles.raizSection}>
                    <div className={styles.raizHeader}>
                        <div className={styles.raizHeaderIcon}>
                            <IconBookmark size={32} stroke={2} />
                        </div>
                        <h3 className={styles.raizTitle}>
                            Metodologia RAIZ para Alavancagem patrimonial
                        </h3>
                        <p className={styles.raizSubtitle}>
                           Estratégia prática para maximizar segurança, rentabilidade e patrimônio
                        </p>
                    </div>

                    <div className={styles.raizGrid}>
                        {raizMethod.map((item, index) => (
                            <div className={styles.raizCard} key={index}>
                                <div className={styles.raizLetter}>
                                    {item.letter}
                                </div>
                                <div className={styles.raizContent}>
                                    <h4 className={styles.raizCardTitle}>{item.title}</h4>
                                    <p className={styles.raizCardDescription}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
