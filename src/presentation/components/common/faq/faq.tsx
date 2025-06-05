"use client";

import { useState } from "react";

import { FiPlus, FiX } from "react-icons/fi";

import styles from "./faq.module.scss";

const QUESTIONS = [
    {
        question: "Consórcio é seguro?",
        answer: `Sim! O consórcio é regulamentado pelo Banco Central, e as administradoras são fiscalizadas rigorosamente. O dinheiro dos participantes é protegido por regras específicas e transparência total.`,
    },
    {
        question: "Preciso dar entrada para participar do consórcio?",
        answer: `Não! No consórcio, você não precisa dar entrada. Basta escolher o valor da sua carta de crédito e começar a pagar as parcelas mensais.`,
    },
    {
        question: "Quando vou receber meu bem?",
        answer: `Você pode ser contemplado por sorteio ou dando um lance nas assembleias mensais. Todos os participantes têm chances iguais de serem sorteados, e quem oferece o maior lance também pode ser contemplado.`,
    },
    {
        question: "O valor das parcelas pode mudar?",
        answer: `Sim, as parcelas podem ser ajustadas conforme a variação do preço do bem ou serviço, garantindo que o valor da sua carta de crédito seja sempre suficiente para a compra.`,
    },
    {
        question: "E se eu desistir do consórcio?",
        answer: `Você pode sair do grupo a qualquer momento. O valor pago será devolvido conforme as regras do contrato, geralmente após o encerramento do grupo ou por sorteio de desistentes.`,
    },
    {
        question: "Quais as vantagens do consórcio em relação ao financiamento?",
        answer: `O consórcio não tem juros, apenas uma taxa de administração, o que torna as parcelas mais acessíveis. Além disso, você pode planejar a compra do seu bem sem comprometer seu orçamento.`,
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section id="perguntas-frequentes" className={styles.faqSection}>
            <div className={styles.contentWrapper}>
                <div className={styles.left}>
                    <h2 className={styles.title}>Ficou com alguma dúvida?</h2>
                    <p className={styles.subtitle}>
                        Tire suas dúvidas e descubra por que o consórcio é uma alternativa segura, flexível e econômica para conquistar seus objetivos.
                    </p>
                </div>
                <div className={styles.right}>
                    {QUESTIONS.map((q, i) => (
                        <div
                            className={`${styles.card} ${open === i ? styles.open : ""}`}
                            key={i}
                            onClick={() => setOpen(open === i ? null : i)}
                        >
                            <div className={styles.cardHeader}>
                                <span className={styles.question}>{q.question}</span>
                                {open === i ? (
                                    <FiX className={styles.icon} />
                                ) : (
                                    <FiPlus className={styles.icon} />
                                )}
                            </div>
                            <div
                                className={styles.answer}
                                style={{
                                    maxHeight: open === i ? "500px" : "0",
                                    opacity: open === i ? 1 : 0,
                                    paddingTop: open === i ? "20px" : "0",
                                }}
                            >
                                {q.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
