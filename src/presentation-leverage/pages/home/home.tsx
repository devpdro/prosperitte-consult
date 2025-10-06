import { Meta, Header, VSL, TabSection, Benefits, MediaTestimonials, Contact, Testimonials, Footer } from "src/presentation-leverage/components"

import { ICON } from 'src/presentation/assets'

import S from './home.module.scss'

const Home = () => {

  return (
    <div>
      <Meta
        title="Agnaldo Tomsic - Consultoria em Alavancagem Patrimonial | Estratégias de Investimento"
        description="Descubra como multiplicar seu patrimônio com estratégias inteligentes de alavancagem. Consultoria especializada em consórcios, investimentos imobiliários e construção de renda passiva com Agnaldo Tomsic."
        keywords="alavancagem patrimonial, Agnaldo Tomsic, consultoria investimentos, consórcio imobiliário, multiplicação patrimônio, renda passiva, estratégias financeiras, investimento inteligente, planejamento patrimonial, consultoria financeira especializada" />
      <Header />
      <VSL />
      <TabSection />
      <Benefits />
      <MediaTestimonials />
      <Contact />
      <Testimonials />
      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20consultoria."
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
