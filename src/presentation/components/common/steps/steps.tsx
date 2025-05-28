'use client'

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

import styles from './steps.module.scss';

import { IMAGE } from 'src/presentation/assets';


const articles = [
    {
        image: '/img/solar-panels.jpg', // foto de painéis solares
        title: 'Simulação',
        description: 'Faça a simulação e escolha o consórcio ideal para você.',
    },
    {
        image: '/img/ilustracao-contratacao.png', // ilustração
        title: 'Contratação',
        description: 'Contrate pelo aplicativo ou vá até uma agência Sicredi e dê o primeiro passo para a realização do seu sonho.',
    },
    {
        image: '/img/ilustracao-grupo.png', // ilustração
        title: 'Seu grupo',
        description: 'Você fará parte de um grupo de pessoas com o mesmo objetivo e terá uma cota para participar dos sorteios.',
    },
    {
        image: '/img/ilustracao-sorteio.png', // ilustração
        title: 'Sorteio',
        description: 'Mensalmente você pode acompanhar as contemplações que ocorrem por sorteio nas assembleias.',
    },
    {
        image: '/img/airplane-takeoff.jpg', // foto de um avião decolando
        title: 'Assembleias',
        description: 'As assembleias ocorrem todos os meses. Sua cota participa do sorteio ou você pode dar um lance, e os resultados você confere pelo aplicativo de consórcios.',
    },
    {
        image: '/img/harvester-field.jpg', // foto de uma colheitadeira em uma lavoura
        title: 'Contemplação',
        description: 'Você tem duas possibilidades: ser contemplado por sorteio, onde todos participam em igualdade de condições, ou dar um lance, onde as maiores ofertas são contempladas.',
    },
]

export default function Steps() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        skipSnaps: false,
        slidesToScroll: 1,
        dragFree: false,
        containScroll: 'trimSnaps',
        breakpoints: {
            '(max-width: 767px)': { slidesToScroll: 1 },
            '(min-width: 768px) and (max-width: 1023px)': { slidesToScroll: 2 },
            '(min-width: 1024px)': { slidesToScroll: 3 },
        },
    });
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className={styles.section}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerColumn}>
                    <h2 className={styles.title}>Ainda tem dúvidas? Conheça as etapas do consórcio</h2>
                    <div className={styles.controls}>
                        <button
                            className={styles.prevBtn}
                            aria-label="Anterior"
                            onClick={() => emblaApi && emblaApi.scrollPrev()}
                            disabled={!canScrollPrev}
                        >
                            <IconChevronLeft size={26} />
                        </button>
                        <button
                            className={styles.nextBtn}
                            aria-label="Próximo"
                            onClick={() => emblaApi && emblaApi.scrollNext()}
                            disabled={!canScrollNext}
                        >
                            <IconChevronRight size={26} />
                        </button>
                    </div>
                </div>
                <div className={styles.carouselWrapper}>
                    <div className={styles.carousel} ref={emblaRef}>
                        <div className={styles.track}>
                            {articles.map((article, idx) => (
                                <div className={styles.slide} key={idx}>
                                    <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={article.image} alt={article.title} />
                                        </div>
                                        <div className={styles.cardContent}>
                                            <div className={styles.cardTitle}>{article.description}</div>
                                            <div className={styles.cardDescription}>{article.title}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
