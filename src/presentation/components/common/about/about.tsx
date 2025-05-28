import { IMAGE } from 'src/presentation/assets'

import S from './about.module.scss'

const differentials = [
    {
        image: IMAGE.ATENCAO_CLIENTE,
        city: 'Atenção ao cliente',
        text: 'Especialistas sempre prontos para ouvir e encontrar a melhor solução.'
    },
    {
        image: IMAGE.ATENCAO_CLIENTE,
        city: 'Atenção ao cliente',
        text: 'Especialistas sempre prontos para ouvir e encontrar a melhor solução.'
    },
    {
        image: IMAGE.TRANSPARENCIA,
        city: 'Transparência',
        text: 'Canal direto e informações sempre objetivas e claras.'
    },
    {
        image: IMAGE.AGILIDADE,
        city: 'Agilidade',
        text: 'Processos ágeis e totalmente digitais, sem burocracia.'
    },
    {
        image: IMAGE.SEGURANCA,
        city: 'Segurança',
        text: 'Administradoras sólidas, regulamentadas pelo Banco Central.'
    },
]

const PlayIcon = () => (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="27" stroke="white" strokeWidth="2" />
        <polygon points="23,18 40,28 23,38" fill="white" />
    </svg>
)

const About = () => (
    <section id='quem-somos' className={S.aboutSection}>
        <div className={S.topRow}>
            <div className={S.left}>
                <h2 className={S.title}>
                    <span className={S.hashtag}>#Diferenciais:</span><br />
                    Por que somos diferentes
                </h2>
                <p className={S.subtitle}>
                    Na Prospéritté Consult, nosso propósito é ser a bússola que guia você na realização dos seus sonhos.
                    Assim como navegadores se orientavam pelas estrelas, estamos aqui para te conduzir pelo caminho certo, com segurança, transparência e as melhores condições do mercado.
                    Com o suporte das maiores administradoras do Brasil, ajudamos você a conquistar seu imóvel, veículo ou serviço, de forma planejada, sem juros e sem burocracia.
                    Prospéritté Consult. O caminho certo para seus sonhos.
                </p>
            </div>
            <div className={S.right}>
                <div className={S.mainCard}>
                    <img className={S.mainImage} src={IMAGE.EMPRESA.src} alt='Empresa' />
                </div>
            </div>
        </div>
        <div className={S.testimonialsRow}>
            {differentials.slice(1).map((t, idx) => (
                <div className={S.testimonialCard} key={idx}>
                    <div className={S.cardImageWrapper}>
                        <img src={t.image.src} alt={t.city} className={S.cardImage} />
                        <div className={S.overlayPlay}><PlayIcon /></div>
                    </div>
                    <div className={S.cardInfo}>
                        <span className={S.city}>{t.city}</span>
                        <span className={S.text}>{t.text}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
)

export default About
