import { IMAGE } from 'src/presentation/assets'

import {
    IconHome,
    IconCar,
    IconTools,
    IconTruck
} from '@tabler/icons-react'

import S from './achievement.module.scss'

const cards = [
    {
        image: IMAGE.CAMINHAO.src,
        icon: <IconTruck size={28} color="#100f30" />,
        title: 'Consórcio de Veículos Pesados',
        taxa: 'Taxa de administração a partir de 0,14% a.m',
        credito: 'Crédito de R$ 150 mil até R$ 700 mil',
        parcela: 'Parcelas a partir de R$ 700,00 no Plano Flex',
        obs: 'Perfeito para quem busca caminhões, tratores, ônibus, embarcações e implementos agrícolas ou rodoviários.'
    },
    {
        image: IMAGE.CONSTRUCAO.src,
        icon: <IconTools size={28} color="#100f30" />,
        title: 'Consórcio para Reformar ou Construir',
        taxa: 'Taxa de administração a partir de 0,10% a.m.',
        credito: 'Crédito de R$ 80 mil até R$ 500 mil.',
        parcela: 'Parcelas a partir de R$ 209,00 no Plano Flex.',
        obs: 'Use seu crédito para construir, reformar, ampliar ou finalizar obras de imóveis residenciais ou comerciais.'
    },
    {
        image: IMAGE.CARRO.src,
        icon: <IconCar size={28} color="#100f30" />,
        title: 'Consórcio de Veículos',
        taxa: 'Taxa de administração a partir de 0,14% a.m.',
        credito: 'Crédito de R$ 20 mil até R$ 150 mil.',
        parcela: 'Parcelas a partir de R$ 156,00 no Plano Flex.',
        obs: 'Ideal para carros, motos e veículos novos ou seminovos, sem juros e sem entrada.'
    },
    {
        image: IMAGE.CASA.src,
        icon: <IconHome size={28} color="#100f30" />,
        title: 'Consórcio de Imóveis',
        taxa: 'Taxa de administração a partir de 0,10% a.m.',
        credito: 'Crédito de R$ 80 mil até R$ 500 mil.',
        parcela: 'Parcelas a partir de R$ 209,00 no Plano Flex.',
        obs: 'Adquira sua casa, apartamento, terreno ou imóvel comercial sem juros e sem entrada.'
    },
]

const Achievement = () => {
    return (
        <section id='consorcio' className={S.achievementSection}>
            <h2 className={S.sectionTitle}>Encontre o consórcio ideal para você</h2>
            <p className={S.sectionSubtitle}>
                Conheça os tipos de consórcio que oferecemos e conquiste seus objetivos:
            </p>
            <div className={S.cardsContainer}>
                {cards.map((card, idx) => (
                    <div className={S.card} key={idx}>
                        <div className={S.cardImage}>
                            <img src={card.image} alt={card.title} />
                        </div>
                        <div className={S.cardContent}>
                            <div className={S.cardIcon}>{card.icon}</div>
                            <div className={S.cardTitle}>{card.title}</div>
                            <ul className={S.cardList}>
                                <li>{card.taxa}</li>
                                <li>{card.credito}</li>
                                <li>{card.parcela}</li>
                            </ul>
                            <div className={S.cardObs}>{card.obs}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Achievement
