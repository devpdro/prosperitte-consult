import { IconBrandWhatsapp, IconBrandInstagram, IconBrandYoutube, IconBrandLinkedin, IconMapPin, IconPhone, IconWorld, IconMail } from '@tabler/icons-react';
import styles from './footer.module.scss';

const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5519982435337&text=Ol%C3%A1%2C%20tenho%20interesse%20em%20uma%20consultoria.';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Main Footer Content */}
          <div className={styles.mainFooter}>
            {/* Company Info */}
            <div className={styles.companyInfo}>
              <p className={styles.companyDescription}>
                Estratégias inteligentes para construção de patrimônio através de consórcios e investimentos imobiliários.
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                  <IconBrandWhatsapp size={16} stroke={2} />
                  <span>Falar Agora</span>
                </a>
              </p>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfo}>
              <h4 className={styles.sectionTitle}>Contato</h4>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <IconMapPin size={16} stroke={2} />
                  <span>Piracicaba – SP</span>
                </div>
                <div className={styles.contactItem}>
                  <IconPhone size={16} stroke={2} />
                  <span>(19) 98243-5337</span>
                </div>
                <div className={styles.contactItem}>
                  <IconWorld size={16} stroke={2} />
                  <span>www.tomsic-consultoria.com</span>
                </div>
                <div className={styles.contactItem}>
                  <IconMail size={16} stroke={2} />
                  <span>contato@tomsic-consultoria.com</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className={styles.socialMedia}>
              <h4 className={styles.sectionTitle}>Redes Sociais</h4>
              <div className={styles.socialList}>
                <a href="https://instagram.com/agnaldo_tomsic" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                  <IconBrandInstagram size={16} stroke={2} />
                  <span>Instagram</span>
                </a>
                <a href="https://youtube.com/@AgnaldoTomsicOficial" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                  <IconBrandYoutube size={16} stroke={2} />
                  <span>YouTube</span>
                </a>
                <a href="https://linkedin.com/in/agnaldo-tomsic" target="_blank" rel="noopener noreferrer" className={styles.socialItem}>
                  <IconBrandLinkedin size={16} stroke={2} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className={styles.bottomFooter}>
            <div className={styles.disclaimer}>
              <p>
                Todas as orientações oferecidas nesta página são consultivas, personalizadas e sem coleta de dados por meio do site.
              </p>
            </div>
            <div className={styles.copyright}>
              <p>© 2025 Agnaldo Tomsic. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
