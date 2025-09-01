import { IconChartBar, IconTrendingUp, IconHome, IconCalculator, IconTarget, IconStar, IconCrown } from '@tabler/icons-react';
import styles from './achievement.module.scss';

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20consultoria.';

const strategySteps = [
    {
        icon: <IconChartBar size={32} stroke={2} />,
        title: 'Investiu R$ 500 mil em FIIs',
        description: 'Gerando aproximadamente R$ 5.000/mês em dividendos',
        color: '#10b981',
        gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
        icon: <IconHome size={32} stroke={2} />,
        title: 'Assumiu 5 contratos dentro do planejamento',
        description: 'R$ 300 mil cada (R$ 1,5 milhão de alavancagem)',
        color: '#8503FE',
        gradient: 'linear-gradient(135deg, #8503FE 0%, #8b5cf6 100%)'
    },
    {
        icon: <IconTrendingUp size={32} stroke={2} />,
        title: 'Compra para locação',
        description: 'O imóvel com vocação locatícia amortiza as parcelas',
        color: '#f59e0b',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    }
];

const results = [
    {
        number: 'R$ 1,5',
        unit: 'milhão',
        title: 'Potencial de até R$ 1,5 milhão em patrimônio consolidado',
        icon: <IconHome size={24} stroke={2} />,
        color: '#10b981'
    },
    {
        number: 'R$ 10',
        unit: 'mil/mês',
        title: 'Receita mensal através de aluguéis proporcionais aos ativos adquiridos',
        icon: <IconTrendingUp size={24} stroke={2} />,
        color: '#8503FE'
    },
    {
        number: 'R$ 500',
        unit: 'mil',
        title: 'iniciais seguem investidos',
        icon: <IconTarget size={24} stroke={2} />,
        color: '#f59e0b'
    }
];

export default function Achievement() {
    return (
        <section className={styles.achievementSection}>
            <div className={styles.container}>
                {/* Hero Section */}
                <div className={styles.heroSection}>
                    <div className={styles.heroBadge}>
                        <IconCrown size={20} stroke={2} />
                        <span>ESTUDO DE CASO REAL</span>
                    </div>
                    <h2 className={styles.heroTitle}>
                        O Poder da <span className={styles.highlight}>Alavancagem Inteligente</span>
                    </h2>
                    <p className={styles.heroSubtitle}>
                        Veja como Carlos transformou R$ 500 mil em quase 2 milhões de reais
                    </p>
                </div>

                {/* Main Content */}
                <div className={styles.mainContent}>
                    {/* Person Profile */}
                    <div className={styles.personProfile}>
                        <div className={styles.personAvatar}>
                            <div className={styles.avatarRing}>
                                <IconTarget size={40} stroke={2} />
                            </div>
                            <div className={styles.statusBadge}>
                                <IconStar size={12} stroke={2} />
                                <span>SUCESSO</span>
                            </div>
                        </div>
                        <div className={styles.personInfo}>
                            <h3 className={styles.personName}>Carlos Silva</h3>
                            <p className={styles.personAge}>39 anos • Empresário</p>
                            <p className={styles.personContext}>
                                Ia comprar uma casa à vista por R$ 500 mil. Com a estratégia certa, ele:
                            </p>
                        </div>
                    </div>

                    {/* Strategy Timeline */}
                    <div className={styles.strategyTimeline}>
                        <div className={styles.timelineHeader}>
                            <h3 className={styles.timelineTitle}>Estratégia em 3 Passos</h3>
                            <div className={styles.timelineProgress}>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill}></div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.timelineSteps}>
                            {strategySteps.map((step, index) => (
                                <div className={styles.timelineStep} key={index}>
                                    <div className={styles.stepConnector}>
                                        <div className={styles.stepDot} style={{ background: step.gradient }}></div>
                                        {index < strategySteps.length - 1 && (
                                            <div className={styles.stepLine} style={{ background: step.gradient }}></div>
                                        )}
                                    </div>
                                    <div className={styles.stepContent}>
                                        <div className={styles.stepIcon} style={{ color: step.color }}>
                                            {step.icon}
                                        </div>
                                        <div className={styles.stepText}>
                                            <h4 className={styles.stepTitle}>{step.title}</h4>
                                            <p className={styles.stepDescription}>{step.description}</p>
                                        </div>
                                        <div className={styles.stepNumber}>{index + 1}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Results Showcase */}
                    <div className={styles.resultsShowcase}>
                        <div className={styles.resultsHeader}>
                            <h3 className={styles.resultsTitle}>
                                Resultados em <span className={styles.timeHighlight}>15 anos</span>
                            </h3>
                            <div className={styles.resultsSubtitle}>
                                Transformação patrimonial completa
                            </div>
                        </div>

                        <div className={styles.resultsGrid}>
                            {results.map((result, index) => (
                                <div className={styles.resultCard} key={index}>
                                    <div className={styles.resultIcon} style={{ color: result.color }}>
                                        {result.icon}
                                    </div>
                                    <div className={styles.resultContent}>
                                        <div className={styles.resultNumber}>
                                            <span className={styles.number}>{result.number}</span>
                                            <span className={styles.unit}>{result.unit}</span>
                                        </div>
                                        <p className={styles.resultTitle}>{result.title}</p>
                                    </div>
                                    <div className={styles.resultGlow} style={{ background: result.color }}></div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.resultsCta}>
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                                AGENDAR CONSULTORIA GRATUITA
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
