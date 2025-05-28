import {
    IconShieldCheck,
    IconPigMoney,
    IconTrendingUp,
    IconFileCertificate,
    IconGift,
    IconUsersGroup
} from "@tabler/icons-react";

import styles from "./benefits.module.scss";

const BENEFITS = [
    {
        icon: <IconShieldCheck size={36} stroke={1.7} />,
        title: "Segurança e Credibilidade",
        desc: "Empresa autorizada e fiscalizada pelo Banco Central. Seu dinheiro está 100% protegido.",
    },
    {
        icon: <IconPigMoney size={36} stroke={1.7} />,
        title: "Sem Juros, Sem Entrada",
        desc: "Planeje seu futuro sem pagar juros abusivos. Aqui, você investe no que é seu.",
    },
    {
        icon: <IconTrendingUp size={36} stroke={1.7} />,
        title: "Planos Flexíveis",
        desc: "Diversas opções de créditos, parcelas que cabem no seu bolso e prazos sob medida.",
    },
    {
        icon: <IconFileCertificate size={36} stroke={1.7} />,
        title: "Atendimento Especializado",
        desc: "Consultores prontos para te ajudar a escolher o melhor plano, de forma transparente e humanizada.",
    },
    {
        icon: <IconGift size={36} stroke={1.7} />,
        title: "Contemplação Acelerada",
        desc: "Aumente suas chances com lances livres, lances fixos e sorteios mensais.",
    },
    {
        icon: <IconUsersGroup size={36} stroke={1.7} />,
        title: "Sem Burocracia",
        desc: "Faça tudo 100% online, com agilidade na contratação e acompanhamento da sua cota.",
    },
];

const Benefits = () => {
    return (
        <section id="beneficios" className={styles.section}>
            <h2 className={styles.title}>
                Por que fazer consórcio com a <span style={{ color: "#100f30" }}>Prospéritté</span><span style={{ color: "#100f30", fontStyle: "italic" }}> Consult?</span>
            </h2>
            <div className={styles.grid}>
                {BENEFITS.map((b, i) => (
                    <div className={styles.card} key={i}>
                        <div className={styles.icon}>{b.icon}</div>
                        <div className={styles.cardTitle}>{b.title}</div>
                        <div className={styles.cardDesc}>{b.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
