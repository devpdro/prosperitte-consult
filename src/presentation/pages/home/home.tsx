import { Achievement, About, Benefits, Faq, Footer, Header, Meta, Navbar, Rate, Steps } from "src/presentation/components"
import { IMAGE } from 'src/presentation/assets'

const Home = () => {
  const IMAGES = IMAGE.CASAL

  return (
    <div>
      <Meta
        title="Empréstimo Online - América Financeira"
        description="Realize seus sonhos com os serviços de crédito da América Financeira. Oferecemos empréstimos rápidos, fáceis e descomplicados. Simule agora!"
        keywords="crédito, empréstimo, América Financeira, simulação de empréstimo, antecipação FGTS, cartão de crédito" />
      <Navbar />
      <Header
        title="Simule seu consórcio agora mesmo!"
        subtitle={`Realizando sonhos \n com planejamento \n e segurança`}
        paragraph="*Aqui seu consórcio é simples, rápido e sem burocracia"
        image={IMAGES.src} />

      <Achievement />
      <Steps />
      <Benefits />
      <About />
      <Rate />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
