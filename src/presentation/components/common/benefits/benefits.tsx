import React from 'react'
import S from './benefits.module.scss'

const benefits = [
    {
        icon: (
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#F2F6FF" /><path d="M13 27V17a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2Z" stroke="#1A3AFF" strokeWidth="2" /><path d="M17 21h6" stroke="#1A3AFF" strokeWidth="2" strokeLinecap="round" /></svg>
        ),
        title: 'Conquista econômica',
        desc: 'Até 50% mais barato que os outros consórcios.'
    },
    {
        icon: (
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#F2F6FF" /><path d="M13 27V17a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H15a2 2 0 0 1-2-2Z" stroke="#1A3AFF" strokeWidth="2" /><path d="M20 19v6" stroke="#1A3AFF" strokeWidth="2" strokeLinecap="round" /></svg>
        ),
        title: 'Menos burocracia',
        desc: 'Processo simples e transparente sobre valores e processos de contemplação.'
    },
    {
        icon: (
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#F2F6FF" /><path d="M20 13v14" stroke="#1A3AFF" strokeWidth="2" strokeLinecap="round" /><circle cx="20" cy="20" r="7" stroke="#1A3AFF" strokeWidth="2" /></svg>
        ),
        title: 'Confiança total',
        desc: '93% dos clientes indicam o consórcio Mycon.'
    },
    {
        icon: (
            <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#F2F6FF" /><path d="M20 13v14M13 20h14" stroke="#1A3AFF" strokeWidth="2" strokeLinecap="round" /></svg>
        ),
        title: 'Contempla mais',
        desc: 'A média de contemplação é de 5,5% contra 2% dos outros consórcios.'
    },
]

const Benefits = () => {
    return (
        <section className={S.benefitsSection}>
            <h2 className={S.title}>O consórcio ideal para conquistar seu sonho</h2>
            <p className={S.subtitle}>Você conquista de um jeito leve para o seu bolso e sem pesar na mente.</p>
            <div className={S.cardsContainer}>
                {benefits.map((item, idx) => (
                    <div className={S.card} key={idx}>
                        <div className={S.icon}>{item.icon}</div>
                        <div className={S.cardTitle}>{item.title}</div>
                        <div className={S.cardDesc}>{item.desc}</div>
                    </div>
                ))}
            </div>
            <button className={S.ctaBtn}>Falar com o Time de Especialistas</button>
        </section>
    )
}

export default Benefits