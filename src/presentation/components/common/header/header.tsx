import { StaticImageData } from 'next/image'
import { IconArrowRight, IconCheck, IconChevronDown, IconBolt, IconClock, IconBrandWhatsapp } from '@tabler/icons-react'

import S from './header.module.scss'
import { IMAGE } from 'src/presentation/assets'

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Prosp%C3%A9ritt%C3%A9%20Consult%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es!'

const Header = () => (
  <header
    id='faca-uma-simulacao'
    className={S.container}
    style={{
      backgroundImage: `url(${IMAGE.CASA.src})`,
    }}
  >
    <div className={S.overlay}></div>

    <div className={S.content}>
      <div className={S.leftSection}>
        <div className={S.badge}>
          <IconCheck size={16} stroke={2} />
          <span>Método Comprovado</span>
        </div>

        <h1 className={S.title}>
          Compre imóveis pagando apenas <span className={S.highlight}>20%</span> e deixe o inquilino quitar os outros <span className={S.highlight}>80%</span>
        </h1>

        <div className={S.textContent}>
          <p className={S.paragraph}>
            Transforme seu boleto em escritura usando <strong>Alavancagem Patrimonial</strong> com Consórcio.
          </p>
          <p className={S.paragraph}>
            Conheça o <strong>Método RAIZ</strong>: Retorno • Alavancagem • Investimento • Zero risco excessivo.
          </p>
        </div>

        <div className={S.features}>
          <div className={S.feature}>
            <IconCheck size={20} stroke={2} />
            <span>Sem juros bancários</span>
          </div>
          <div className={S.feature}>
            <IconCheck size={20} stroke={2} />
            <span>Renda passiva mensal</span>
          </div>
          <div className={S.feature}>
            <IconCheck size={20} stroke={2} />
            <span>Patrimônio em crescimento</span>
          </div>
        </div>

        <div className={S.ctaContainer}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={S.ctaButton}>
            <span className={S.ctaMain}>Agende sua Consultoria Gratuita</span>
            <IconArrowRight size={20} stroke={2} />
          </a>
          <div className={S.ctaSubtitle}>
            <div className={S.ctaFeature}>
              <IconBolt size={16} stroke={2} />
              <span>Consultoria 100% gratuita</span>
            </div>
            <div className={S.ctaFeature}>
              <IconClock size={16} stroke={2} />
              <span>30 minutos</span>
            </div>
            <div className={S.ctaFeature}>
              <IconBrandWhatsapp size={16} stroke={2} />
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      <div className={S.rightSection}>
        <div className={S.imageContainer}>
          <img src={IMAGE.AGNALDO.src} alt="Agnaldo - Especialista em Consórcios" />
          <div className={S.imageBadge}>
            <span className={S.badgeTitle}>Agnaldo</span>
            <span className={S.badgeSubtitle}>Especialista</span>
          </div>
        </div>
      </div>
    </div>

    <div className={S.scrollIndicator}>
      <div className={S.scrollText}>Role para saber mais</div>
      <IconChevronDown size={24} stroke={2} className={S.scrollIcon} />
    </div>
  </header>
)

export default Header
