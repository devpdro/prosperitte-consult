'use client'

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { IconChevronLeft, IconChevronRight, IconSun, IconFileText, IconUsers, IconGift, IconCalendarEvent, IconTrophy } from '@tabler/icons-react';

import styles from './steps.module.scss';

const articles = [
    {
        icon: <IconSun size={42} color="#100f30" />,
        title: '1 - Simule Online',
        description: 'Escolha o valor da sua carta de crédito, o prazo e simule direto pelo nosso site ou aplicativo, de forma rápida e fácil.',
    },
    {
        icon: <IconFileText size={42} color="#100f30" />,
        title: '2 - Contrate 100% Digital',
        description: 'Após a simulação, você faz a contratação diretamente pela plataforma, sem burocracia, sem papelada e sem precisar sair de casa.',
    },
    {
        icon: <IconUsers size={42} color="#100f30" />,
        title: '3 - Entrada no Grupo',
        description: 'Ao contratar, você entra automaticamente em um grupo com pessoas que têm o mesmo objetivo: conquistar seu bem de forma planejada.',
    },
    {
        icon: <IconGift size={42} color="#100f30" />,
        title: '4 - Sorteios Mensais',
        description: 'Todos os meses acontecem sorteios online e seguros, que você pode acompanhar em tempo real pela plataforma.',
    },
    {
        icon: <IconCalendarEvent size={42} color="#100f30" />,
        title: '5 - Lances e Assembleias',
        description: 'Além dos sorteios, você pode oferecer lances para antecipar sua contemplação. Tudo é transparente e pode ser acompanhado pelo app.',
    },
    {
        icon: <IconTrophy size={42} color="#100f30" />,
        title: '6 - Contemplação',
        description: 'Seja por sorteio ou lance, ao ser contemplado você recebe sua carta de crédito e pode realizar seu sonho do jeito que quiser.',
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
        <section id='como-funciona' className={styles.section}>
            <div className={styles.contentWrapper}>
                <div className={styles.headerColumn}>
                    <h2 className={styles.title}>Como funciona o consórcio? Veja as etapas:</h2>
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
                                        <div className={styles.cardIconNum}>
                                            {article.icon}
                                        </div>
                                        <div className={styles.cardContent}>
                                            <div className={styles.cardTitle}>{article.title}</div>
                                            <div className={styles.cardDescription}>{article.description}</div>
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
