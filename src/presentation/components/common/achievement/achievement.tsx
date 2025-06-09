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
        taxa: 'Taxa adm: a partir de 0,14% a.m.',
        credito: 'Crédito de R$ 500 mil a R$ 3 milhões',
        parcela: 'Parcelas a partir de R$ 2.400 reais',
    },
    {
        image: IMAGE.CONSTRUCAO.src,
        icon: <IconTools size={28} color="#100f30" />,
        title: 'Consórcio para Reformar ou Construir',
        taxa: 'Taxa adm: a partir de 0,10% a.m.',
        credito: 'Crédito de R$ 100 mil a R$ 1 milhão',
        parcela: 'Parcelas a partir de 650 reais',
    },
    {
        image: IMAGE.CARRO.src,
        icon: <IconCar size={28} color="#100f30" />,
        title: 'Consórcio de Veículos',
        taxa: 'Taxa adm: a partir de 0,14% a.m.',
        credito: 'Crédito de R$ 80 mil a R$ 800 mil',
        parcela: 'Parcelas a partir de R$ 550 reais',
    },
    {
        image: IMAGE.CASA.src,
        icon: <IconHome size={28} color="#100f30" />,
        title: 'Consórcio de Imóveis',
        taxa: 'Taxa adm: a partir de 0,10% a.m.',
        credito: 'Crédito de R$ 100 mil a R$ 2 milhões',
        parcela: 'Parcelas a partir de 550 reais',
    },
];

const ctaUrl = 'https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Quero%20falar%20com%20um%20especialista%20da%20Prosp%C3%A9ritt%C3%A9%20Consult.';

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
                        </div>
                    </div>
                ))}
            </div>
            <div className={S.ctaContainer}>
                <a
                    href={ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={S.ctaBtn}
                >
                    SIMULAR AGORA
                </a>
            </div>
        </section>
    )
}

export default Achievement
