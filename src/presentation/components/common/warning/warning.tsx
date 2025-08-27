import { IconPigMoney, IconBuilding, IconChartLine, IconBulb } from '@tabler/icons-react';
import styles from './warning.module.scss';

export default function Warning() {
    return (
        <section className={styles.warningSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        <span className={styles.titleEmphasis}>Pare de se sabotar:</span><br />
                        Seus investimentos estão trabalhando <span className={styles.titleHighlight}>contra você</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Você já conquistou muito na vida, mas ainda está preso nas <strong>armadilhas financeiras</strong> que drenam seu patrimônio.
                        <span className={styles.callout}>É hora de mudar o jogo.</span>
                    </p>
                </div>

                <div className={styles.cardsContainer}>
                    <div className={styles.problemsGrid}>
                        <div className={styles.problemCard}>
                            <div className={styles.cardIcon}>
                                <IconPigMoney size={32} stroke={2} />
                            </div>
                            <h3 className={styles.cardTitle}>Poupança</h3>
                            <p className={styles.cardDescription}>
                                <span className={styles.problemEmphasis}>&ldquo;Segurança&rdquo;</span> que está roubando seu futuro.
                                Enquanto você &ldquo;protege&rdquo; seu dinheiro, ele derrete silenciosamente na sua conta.
                            </p>
                            <div className={styles.cardBadge}>-8% ao ano real</div>
                        </div>

                        <div className={styles.problemCard}>
                            <div className={styles.cardIcon}>
                                <IconBuilding size={32} stroke={2} />
                            </div>
                            <h3 className={styles.cardTitle}>Financiamento</h3>
                            <p className={styles.cardDescription}>
                                <span className={styles.problemEmphasis}>12% ao ano</span> de juros compostos trabalhando contra você.
                                O banco lucra mais com seu imóvel do que você mesmo.
                            </p>
                            <div className={styles.cardBadge}>30 anos de prisão</div>
                        </div>

                        <div className={styles.problemCard}>
                            <div className={styles.cardIcon}>
                                <IconChartLine size={32} stroke={2} />
                            </div>
                            <h3 className={styles.cardTitle}>Bolsa de Valores</h3>
                            <p className={styles.cardDescription}>
                                <span className={styles.problemEmphasis}>Cassino disfarçado</span> de investimento sério.
                                Você passa o dia checando gráficos ao invés de construir patrimônio real.
                            </p>
                            <div className={styles.cardBadge}>Vício em volatilidade</div>
                        </div>
                    </div>

                    <div className={styles.solutionCard}>
                        <div className={styles.solutionHeader}>
                            <div className={styles.solutionIcon}>
                                <IconBulb size={40} stroke={2} />
                            </div>
                            <h3 className={styles.solutionTitle}>O Método que Funciona</h3>
                        </div>
                        <p className={styles.solutionDescription}>
                            <span className={styles.solutionHighlight}>Consórcio + Imóveis Estratégicos</span> = a única fórmula que te liberta financeiramente.
                            <strong>Sem juros. Sem riscos. Só resultados.</strong>
                        </p>
                        <div className={styles.solutionBenefits}>
                            <span className={styles.benefit}>✓ 0% juros bancários</span>
                            <span className={styles.benefit}>✓ Renda passiva garantida</span>
                            <span className={styles.benefit}>✓ Patrimônio multiplicado</span>
                        </div>
                        <div className={styles.gradientSwoosh}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
