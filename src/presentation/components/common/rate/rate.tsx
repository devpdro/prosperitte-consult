import React from 'react'
import S from './rate.module.scss'

const Rate = () => {
    return (
        <section className={S.rateSection}>
            <div className={S.bgImage} />
            <div className={S.overlay} />
            <div className={S.content}>
                <h2 className={S.title}>A menor taxa com<br />parcelas que<br />cabem no bolso</h2>
                <div className={S.subtext}>A partir de</div>
                <div className={S.rateValue}>0,06<span className={S.percent}>%</span></div>
                <div className={S.perMonth}>ao mês.</div>
                <div className={S.downloadText}>Baixe o app</div>
                <div className={S.stores}>
                    <a href="#" className={S.storeBtn} aria-label="Google Play">
                        <img src="/google-play-badge.svg" alt="Disponível na Google Play" height={40} />
                    </a>
                    <a href="#" className={S.storeBtn} aria-label="App Store">
                        <img src="/app-store-badge.svg" alt="Disponível na App Store" height={40} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Rate
