import React from 'react'
import S from './about.module.scss'

const features = [
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#F2F0FF" /><path d="M16 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" stroke="#7B3FF2" strokeWidth="2" /><path d="M16 26v-2M16 8V6M6 16h2M24 16h2M9.636 9.636l1.414 1.414M20.95 20.95l1.414 1.414M9.636 22.364l1.414-1.414M20.95 11.05l1.414-1.414" stroke="#7B3FF2" strokeWidth="2" strokeLinecap="round" /></svg>
        ),
        title: 'Atenção ao cliente',
        desc: 'Nosso time de especialistas está sempre disposto a ouvir o cliente e encontrar a melhor solução para cada necessidade.'
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#F2F0FF" /><path d="M16 22a6 6 0 0 1-6-6v-2a6 6 0 0 1 12 0v2a6 6 0 0 1-6 6Z" stroke="#7B3FF2" strokeWidth="2" /><path d="M16 18v2" stroke="#7B3FF2" strokeWidth="2" strokeLinecap="round" /></svg>
        ),
        title: 'Segurança',
        desc: 'Representamos administradoras sólidas, regulamentadas pelo Banco Central, e bem estabelecidas no mercado de consórcios.'
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#F2F0FF" /><path d="M10 22V10h12v12H10Z" stroke="#7B3FF2" strokeWidth="2" /><path d="M14 14h4v4h-4v-4Z" stroke="#7B3FF2" strokeWidth="2" /></svg>
        ),
        title: 'Transparência',
        desc: 'Contamos com um canal direto de atendimento ao cliente onde são disponibilizadas, de forma objetiva e transparente, todas as informações necessárias.'
    },
    {
        icon: (
            <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><rect width="32" height="32" rx="16" fill="#F2F0FF" /><path d="M16 6v4M16 22v4M6 16h4M22 16h4M10.93 10.93l2.12 2.12M19.07 19.07l2.12 2.12M10.93 21.07l2.12-2.12M19.07 12.93l2.12-2.12" stroke="#7B3FF2" strokeWidth="2" strokeLinecap="round" /></svg>
        ),
        title: 'Agilidade',
        desc: 'Acreditamos na desburocratização. Estamos aptos a dar andamento à grande maioria dos processos de um modo ágil e totalmente digital.'
    },
]

const About = () => {
    return (
        <section className={S.aboutSection}>
            <div className={S.container}>
                <div className={S.left}>
                    <h2 className={S.title}>O caminho certo para a realização do seu sonho!</h2>
                    <div className={S.textBlock}>
                        <p>Tramontana é uma palavra de origem italiana que tem como tradução livre: a estrela polar, o rumo do norte, o vento que sopra do norte. Antigamente, navegadores do mediterrâneo guiavam-se por essa estrela para seguir o rumo certo e encontrar o caminho de casa. Era o que os mantinham orientados, muito antes da bússola ser inventada.</p>
                        <p>A Tramontana Consórcios surgiu exatamente desse cuidado: fazer a diferença para seus clientes em um mercado complexo, orientando-os através da melhor direção para a realização de seus sonhos.</p>
                        <p>Com uma vasta experiência no segmento, e contando com o auxílio das mais bem-conceituadas administradoras de consórcio do Brasil, oferecemos as melhores soluções de crédito para a compra de imóveis. Conte com a Tramontana para encontrar o rumo certo do seu consórcio!</p>
                    </div>
                </div>
                <div className={S.right}>
                    <img className={S.image} src="/about-tramontana.jpg" alt="Tramontana Consórcios" />
                </div>
            </div>
            <div className={S.featuresRow}>
                {features.map((item, idx) => (
                    <div className={S.feature} key={idx}>
                        <div className={S.icon}>{item.icon}</div>
                        <div>
                            <div className={S.featureTitle}>{item.title}</div>
                            <div className={S.featureDesc}>{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About
