"use client";

import Link from 'next/link';

import { FaFacebookF, FaInstagram } from "react-icons/fa";

import styles from "./footer.module.scss";

export default function Footer() {
  const handleSmoothScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>

        <div className={styles.column}>
          <h4>Ouvidoria</h4>
          <ul>
            <li>Atendimento em dias úteis das 8h às 18h (horário de Brasília)</li>
          </ul>
          <h5>Redes Sociais</h5>
          <div className={styles.social}>
            <a href="https://www.facebook.com/prosperitteconsult" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/prosperitteconsult/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h4>Transparência</h4>
          <ul>
            <li><Link href="/politica-de-privacidade">Política de privacidade</Link></li>
            <li><Link href="/termos-de-uso">Termos de uso</Link></li>
          </ul>
          <h5>Ajuda</h5>
          <ul>
            <li>
              <a href="#perguntas-frequentes" onClick={handleSmoothScroll("perguntas-frequentes")}>Perguntas frequentes</a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Fale com a gente</h4>
          <ul>
            <li>
              Capitais e regiões metropolitanas<br />
              <strong>(19) 99327‑3002</strong>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Navegue</h4>
          <ul className={styles.navFooter}>
            <li>
              <a href="#consorcio" onClick={handleSmoothScroll("consorcio")}>Consórcio</a>
            </li>
            <li>
              <a href="#beneficios" onClick={handleSmoothScroll("beneficios")}>Benefícios</a>
            </li>
            <li>
              <a href="#como-funciona" onClick={handleSmoothScroll("como-funciona")}>Como funciona</a>
            </li>
            <li>
              <a href="#quem-somos" onClick={handleSmoothScroll("quem-somos")}>Quem somos</a>
            </li>
            <li>
              <a href="#perguntas-frequentes" onClick={handleSmoothScroll("perguntas-frequentes")}>Perguntas frequentes</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.copyright}>
          A Prospéritté Consult é uma consultoria especializada na intermediação de consórcios, atuando em parceria com administradoras autorizadas e fiscalizadas pelo Banco Central do Brasil, conforme a Lei nº 11.795/2008 e a Circular 3.432/2009.
          Atuamos de forma 100% online, oferecendo suporte, simulações e acompanhamento completo durante todo o processo de aquisição da sua cota. Não somos uma administradora de consórcios, nem realizamos gestão de grupos.
          Importante: Não solicitamos pagamentos antecipados e não possuímos representantes externos. Qualquer negociação deve ser feita exclusivamente pelos nossos canais oficiais.
          As condições de taxa, prazo e contemplação podem variar de acordo com a administradora e o grupo escolhido. Consulte sempre as regras e condições no ato da simulação e no Contrato de Participação em Grupos de Consórcio.
        </div>
      </div>
    </footer>
  );
}
