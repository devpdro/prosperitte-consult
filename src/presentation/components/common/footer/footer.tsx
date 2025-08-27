import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.privacyText}>
            Ao clicar no botão você concorda que os dados pessoais fornecidos acima serão utilizados para envio de conteúdo informativo sobre consultoria imobiliária, estratégias de consórcio e oportunidades de investimento no setor imobiliário, nos termos da Lei Geral de Proteção de Dados. Ao continuar, você autoriza o Agnaldo Tonsic a coletar seus dados pessoais de acordo com a nossa Política de Privacidade para oferecer consultoria especializada em alavancagem patrimonial.
          </p>
          <p className={styles.copyright}>
            © 2025 COPYRIGHT – AGNALDO TONSIC – TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
