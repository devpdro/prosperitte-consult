'use client'

import { useState } from 'react'
import { IconChevronDown, IconQuestionMark } from '@tabler/icons-react'
import styles from './faq.module.scss'

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Prosp%C3%A9ritt%C3%A9%20Consult%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es!'

const faqData = [
    {
        question: "Consórcio demora?",
        answer: "Depende da estratégia de contemplação: sorteio, lance livre, lances fixos por fidelidade (6, 12, 18 meses) e compra de carta já contemplada. Nós desenhamos o caminho mais adequado ao seu perfil e horizonte."
    },
    {
        question: "Preciso dar uma grande entrada?",
        answer: "Trabalhamos com entradas inteligentes (~20%) e, em muitos casos, meia parcela até a contemplação."
    },
    {
        question: "E se o aluguel não cobrir a parcela?",
        answer: "Selecionamos regiões e tipologias com yield compatível. Em cenários conservadores, usamos buffer (FIIs, reserva e ajuste de timing) para manter a segurança do fluxo."
    },
    {
        question: "Quais os custos?",
        answer: "Taxa de administração do consórcio (varia por administradora), eventuais seguros e custos cartoriais/ITBI na compra. Tudo é simulado e previsto no plano."
    },
    {
        question: "E os riscos?",
        answer: "Não trabalhamos com promessas de ganho garantido. Nosso foco é estrutura, seleção de ativos e gestão de risco. Exemplos são ilustrativos e podem variar."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Perguntas Frequentes
                    </h2>
                    <p className={styles.subtitle}>
                        Tire suas dúvidas sobre consórcios e alavancagem patrimonial
                    </p>
                </div>

                {/* FAQ Items */}
                <div className={styles.faqContainer}>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className={styles.questionText}>{item.question}</span>
                                <div className={styles.chevronIcon}>
                                    <IconChevronDown size={24} stroke={2} />
                                </div>
                            </button>

                            <div className={styles.faqAnswer}>
                                <div className={styles.answerContent}>
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>
                            Ainda tem dúvidas?
                        </h3>
                        <p className={styles.ctaSubtitle}>
                            Nossa equipe está pronta para te ajudar
                        </p>
                    </div>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                        FALAR COM ESPECIALISTA
                    </a>
                </div>
            </div>
        </section>
    );
}
