import React from 'react'
import {
    IconCar,
    IconTools,
    IconHome,
    IconMotorbike,
    IconTruck
} from '@tabler/icons-react'
import S from './achievement.module.scss'

const iconColor = "#100f30"
const iconSize = 44

const cards = [
    {
        icon: <IconCar size={iconSize} color={iconColor} />,
        title: 'CARROS',
        value: 'R$391,71',
        link: '#',
        linkLabel: 'Acesse a página de carros',
    },
    {
        icon: <IconTools size={iconSize} color={iconColor} />,
        title: 'SERVIÇOS',
        value: 'R$282,76',
        link: '#',
        linkLabel: 'Acesse a página de serviços',
    },
    {
        icon: <IconHome size={iconSize} color={iconColor} />,
        title: 'IMÓVEIS',
        value: 'R$366,51',
        link: '#',
        linkLabel: 'Acesse a página de imóveis',
    },
    {
        icon: <IconMotorbike size={iconSize} color={iconColor} />,
        title: 'MOTOS',
        value: 'R$227,11',
        link: '#',
        linkLabel: 'Acesse a página de motos',
    },
    {
        icon: <IconTruck size={iconSize} color={iconColor} />,
        title: 'CAMINHÕES',
        value: 'R$1.631,50',
        link: '#',
        linkLabel: 'Acesse a página de caminhões',
    },
]

const Achievement = () => {
    return (
        <section className={S.achievementSection}>
            <div className={S.achievementContent}>
                <h4 className={S.subtitle}>Então vamos nessa!</h4>
                <h2 className={S.title}>Já sabe qual vai ser a sua próxima conquista?</h2>
                <div className={S.cardsContainer}>
                    {cards.map((card, idx) => (
                        <div className={S.card} key={idx}>
                            <div className={S.icon}>{card.icon}</div>
                            <div className={S.cardTitle}>{card.title}</div>
                            <div className={S.cardValue}>Parcelas a partir de <span>{card.value}</span></div>
                            <button className={S.simulateBtn}>Simular</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Achievement