import { Achievement, About, Benefits, Faq, Footer, Header, Meta, Navbar, Rate, Steps, Warning } from "src/presentation/components"
import { ICON, IMAGE } from 'src/presentation/assets'

import S from './home.module.scss'
import Path from "src/presentation/components/common/path/path"

const Home = () => {
  const IMAGES = IMAGE.CASAL

  return (
    <div>
      <Meta
        title="Prospéritté Consult | Consórcio digital que cabe no seu plano de vida"
        description="Realize seus sonhos com a Prospéritté Consult, especialista em consórcios. Simule seu consórcio de forma rápida, segura e sem burocracia. Planeje seu futuro com as melhores condições do mercado!"
        keywords="consórcio, simulação de consórcio, Prospéritté Consult, consórcio imobiliário, consórcio de veículos, consórcio online, planejamento financeiro, segurança, sem juros, carta de crédito" />
      <Navbar />
      <Header
        title="Simule seu consórcio agora mesmo!"
        subtitle={`Realizando sonhos \n com planejamento e \n segurança`}
        paragraph="*Aqui seu consórcio é simples, rápido e sem burocracia"
        image={IMAGES.src} />

      <Warning />
      <Achievement />
      <Path />
      <Benefits />
      <Rate />
      <Steps />
      <About />
      <Faq />
      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=5519993273002&text=Ol%C3%A1!%20Vim%20do%20site%20da%20Prosp%C3%A9ritt%C3%A9%20Consult%20e%20gostaria%20de%20saber%20mais%20informações!"
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
