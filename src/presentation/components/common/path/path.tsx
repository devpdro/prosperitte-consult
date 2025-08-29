'use client'

import { useRef, useEffect, useState } from 'react'
import { IconX } from '@tabler/icons-react'
import S from './path.module.scss'

const targetAudience = [
    {
        text: 'Investidores, empresários e profissionais liberais que querem renda passiva e aceleração patrimonial.'
    },
    {
        text: 'Quem já possui algum capital e busca estratégias inteligentes para alavancar e blindar o patrimônio.'
    },
    {
        text: 'Quem pensa no longo prazo e valoriza segurança com crescimento.'
    },
    {
        text: 'Quem está cansado de retornos medíocres e quer uma visão profissional e personalizada.'
    }
];

const notForAudience = [
    {
        text: 'Quem busca "enriquecimento rápido" sem estrutura, sem disciplina ou com expectativa de garantias de ganhos.'
    }
];

const Path = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const stepRefs = useRef<(HTMLDivElement | null)[]>([])
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        function handleScroll() {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.height;

            const start = windowHeight - 100;
            const end = -sectionHeight + 100;

            let percent = 0;
            if (rect.top < start && rect.bottom > end) {
                const total = start - end;
                const current = start - rect.top;
                percent = Math.max(0, Math.min(1, current / total));
            }
            setProgress(percent);
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <section className={S.pathSection}>
            <div className={S.container}>
                <div className={S.content}>
                    {/* Left Column - Title */}
                    <div className={S.titleColumn}>
                        <h2 className={S.title}>
                            <span className={S.titleLine1}>Para quem é</span>
                            <span className={S.titleLine2}>nossa Consultoria?</span>
                        </h2>
                    </div>

                    {/* Right Column - Content */}
                    <div className={S.contentColumn}>
                        <div className={S.contentSection}>
                            <div className={S.sectionHeader}>
                                <div className={S.verticalLine}></div>
                                <h3 className={S.contentTitle}>É para você que deseja...</h3>
                            </div>
                            <div className={S.listContainer}>
                                {targetAudience.map((item, index) => (
                                    <div className={S.listItem} key={index}>
                                        <div className={S.itemNumber}>
                                            {(index + 1).toString().padStart(2, '0')}
                                        </div>
                                        <p className={S.itemText}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={S.contentSection}>
                            <div className={S.sectionHeader}>
                                <div className={S.verticalLine}></div>
                                <h3 className={S.contentTitle}>Para quem não é:</h3>
                            </div>
                            <div className={S.listContainer}>
                                {notForAudience.map((item, index) => (
                                    <div className={S.listItem} key={index}>
                                        <div className={S.itemNumber}>
                                            <IconX size={16} stroke={2} />
                                        </div>
                                        <p className={S.itemText}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Path
