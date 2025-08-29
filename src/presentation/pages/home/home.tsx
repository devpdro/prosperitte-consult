import { Achievement, Path, Faq, Footer, Header, Meta, Navbar, Rate, Steps, Letters, Representatives, Contact, Warning } from "src/presentation/components"
import { ICON, IMAGE } from 'src/presentation/assets'

import S from './home.module.scss'

const Home = () => {
  const IMAGES = IMAGE.HEADER

  return (
    <div>
      <Meta
        title="Agnaldo Tomsic - Consultor em Alavancagem Patrimonial"
        description="Estratégias inteligentes para construção de patrimônio através de consórcios e investimentos imobiliários. Consultoria personalizada em alavancagem patrimonial com Agnaldo Tomsic."
        keywords="consórcio, alavancagem patrimonial, Agnaldo Tomsic, consórcio imobiliário, investimento imobiliário, planejamento financeiro, patrimônio, renda passiva, consultoria financeira, estratégias de investimento" />
      <Header />
      <Warning />
      <Rate />
      <Letters />
      <Achievement />
      <Path />
      <Faq />
      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Prosp%C3%A9ritt%C3%A9%20Consult%20e%20gostaria%20de%20saber%20mais%20informações!"
        target="_blank"
        rel="noopener noreferrer"
        className={S['whatsapp-button']}
      >
        <ICON.IconBrandWhatsapp className={S.icon} />
      </a>
    </div>
  )
}

export default Home
