import React from 'react'
import S from './achievement.module.scss'

const cards = [
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#E6F2EA" /><path d="M8 24v-2.5A2.5 2.5 0 0 1 10.5 19h11A2.5 2.5 0 0 1 24 21.5V24" stroke="#2B7A4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><rect x="11" y="13" width="10" height="6" rx="2" stroke="#2B7A4B" strokeWidth="2" /><path d="M13 13V9.5A2.5 2.5 0 0 1 15.5 7h1A2.5 2.5 0 0 1 19 9.5V13" stroke="#2B7A4B" strokeWidth="2" /></svg>
        ),
        title: 'CONSÓRCIO DE CARROS',
        value: 'R$ 391,71',
        link: '#',
        linkLabel: 'Acesse a página de carros',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#E6F2EA" /><circle cx="16" cy="16" r="7" stroke="#2B7A4B" strokeWidth="2" /><circle cx="16" cy="16" r="3" stroke="#2B7A4B" strokeWidth="2" /></svg>
        ),
        title: 'CONSÓRCIO DE SERVIÇOS',
        value: 'R$ 282,76',
        link: '#',
        linkLabel: 'Acesse a página de serviços',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#E6F2EA" /><path d="M10 22V14l6-5 6 5v8" stroke="#2B7A4B" strokeWidth="2" strokeLinejoin="round" /><rect x="13" y="17" width="6" height="5" rx="1" stroke="#2B7A4B" strokeWidth="2" /></svg>
        ),
        title: 'CONSÓRCIO DE IMÓVEIS',
        value: 'R$ 366,51',
        link: '#',
        linkLabel: 'Acesse a página de imóveis',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#E6F2EA" /><path d="M10 22v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="#2B7A4B" strokeWidth="2" /><circle cx="16" cy="14" r="3" stroke="#2B7A4B" strokeWidth="2" /></svg>
        ),
        title: 'CONSÓRCIO DE MOTOS',
        value: 'R$ 227,11',
        link: '#',
        linkLabel: 'Acesse a página de motos',
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#E6F2EA" /><rect x="10" y="14" width="12" height="6" rx="2" stroke="#2B7A4B" strokeWidth="2" /><rect x="13" y="17" width="6" height="3" rx="1" stroke="#2B7A4B" strokeWidth="2" /></svg>
        ),
        title: 'CONSÓRCIO DE CAMINHÕES',
        value: 'R$ 1.631,50',
        link: '#',
        linkLabel: 'Acesse a página de caminhões',
    },
]

const Achievement = () => {
    return (
        <section className={S.achievementSection}>
            <h2 className={S.title}>Faça sua simulação do seu consórcio</h2>
            <div className={S.cardsContainer}>
                {cards.map((card, idx) => (
                    <div className={S.card} key={idx}>
                        <div className={S.icon}>{card.icon}</div>
                        <div className={S.cardTitle}>{card.title}</div>
                        <div className={S.cardValue}>Parcelas a partir de <span>{card.value}</span></div>
                        <button className={S.simulateBtn}>SIMULAR</button>
                        <a className={S.cardLink} href={card.link}>{card.linkLabel}</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Achievement