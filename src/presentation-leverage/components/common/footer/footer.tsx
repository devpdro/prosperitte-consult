import S from './footer.module.scss';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${S.footerSection} ${className || ''}`}>
      <div className={S.container}>
        {/* Seção principal com 3 colunas */}
        <div className={S.mainContent}>
          {/* Coluna 1 - Logo e descrição */}
          <div className={S.column}>
            <p className={S.description}>
              Estratégias inteligentes para acelerar a construção do seu patrimônio com segurança e previsibilidade.
            </p>
          </div>

          {/* Coluna 2 - Contato */}
          <div className={S.column}>
            <h3 className={S.columnTitle}>Contato</h3>
            <div className={S.contactInfo}>
              <p>Telefone: (19) 98243-5337</p>
              <p>WhatsApp: (19) 98243-5337</p>
              <p>Email: contato@tomsic-consultoria.com</p>
            </div>
          </div>

          {/* Coluna 3 - Escritório */}
          <div className={S.column}>
            <h3 className={S.columnTitle}>Nosso escritório</h3>
            <div className={S.officeInfo}>
              <p>
                Piracicaba – SP Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className={S.divider}></div>

        {/* Texto institucional */}
        <div className={S.institutionalText}>
          <p>
            Agnaldo Tomsic oferece consultoria especializada em alavancagem patrimonial e estratégias de investimento. Todas as orientações são consultivas, personalizadas e focadas na construção segura e inteligente do seu patrimônio. Nosso objetivo é conectar você às melhores estratégias de investimento disponíveis no mercado, sempre com transparência e segurança.
          </p>
        </div>

        {/* Rodapé final */}
        <div className={S.finalFooter}>
          <p>
            Copyright © {currentYear}. Agnaldo Tomsic - Consultoria em Alavancagem Patrimonial. Todos os direitos reservados. Piracicaba – SP, Brasil. Todas as orientações oferecidas são consultivas e personalizadas, sem coleta de dados por meio do site.
          </p>
        </div>

        {/* Link de termos */}
        <div className={S.termsLink}>
          <a href="/termos-de-uso" className={S.link}>
            Termos de Uso
          </a>
          <span className={S.separator}> | </span>
          <a href="/politica-de-privacidade" className={S.link}>
            Políticas de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}