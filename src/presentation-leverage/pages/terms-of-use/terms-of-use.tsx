import { Meta } from "src/presentation-leverage/components"

import S from './terms-of-use.module.scss'

const TermsOfUse = () => {
    return (
        <div>
            <Meta
                title="Termos de Uso | Agnaldo Tomsic"
                description="Conheça os termos de uso dos serviços de consultoria em alavancagem patrimonial de Agnaldo Tomsic e as condições para utilização de nosso site."
                keywords="Termos de Uso, condições de uso, Agnaldo Tomsic, consultoria alavancagem patrimonial, investimentos"
            />
            <div className={S.termsOfUseContainer}>
                <div className={S.termsOfUseContent}>
                    <h1 className={S.termsTitle}>TERMOS DE USO</h1>

                    <h2>1. ACEITAÇÃO DOS TERMOS</h2>
                    <p>
                        Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nosso site ou solicitar nossos serviços de consultoria em alavancagem patrimonial.
                    </p>

                    <h2>2. DESCRIÇÃO DO SERVIÇO</h2>
                    <p>
                        Este site oferece informações sobre consultoria especializada em alavancagem patrimonial, estratégias de investimento, materiais educativos sobre mercado financeiro e a possibilidade de agendamento de consultorias personalizadas. O conteúdo é fornecido para fins informativos e educacionais, não constituindo recomendação de investimento específica.
                    </p>

                    <h2>3. NATUREZA DOS SERVIÇOS DE CONSULTORIA</h2>
                    <p>
                        Os serviços de consultoria em alavancagem patrimonial oferecidos por Agnaldo Tomsic têm caráter educativo e de orientação estratégica. Todas as decisões de investimento são de responsabilidade exclusiva do cliente. Investimentos envolvem riscos e rentabilidade passada não garante resultados futuros.
                    </p>

                    <h2>4. USO ACEITÁVEL</h2>
                    <p>Você concorda em usar este site apenas para fins legais e de acordo com estes Termos de Uso. É proibido:</p>
                    <ul>
                        <li>Usar o site de qualquer forma que possa danificar, desabilitar ou prejudicar o site</li>
                        <li>Tentar obter acesso não autorizado ao site, servidores ou redes</li>
                        <li>Reproduzir, duplicar ou copiar qualquer parte do site sem autorização expressa</li>
                        <li>Usar o site para transmitir material ofensivo, difamatório ou ilegal</li>
                        <li>Utilizar as informações para atividades especulativas ou não autorizadas no mercado financeiro</li>
                    </ul>

                    <h2>5. PROPRIEDADE INTELECTUAL</h2>
                    <p>
                        Todo o conteúdo deste site, incluindo textos, gráficos, logotipos, imagens, metodologias de alavancagem patrimonial e software, é propriedade de Agnaldo Tomsic ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais e outras leis de propriedade intelectual.
                    </p>

                    <h2>6. LIMITAÇÃO DE RESPONSABILIDADE</h2>
                    <p>
                        As informações neste site são fornecidas "como estão" sem garantias de qualquer tipo. Agnaldo Tomsic não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso deste site ou das estratégias de investimento apresentadas. O cliente assume total responsabilidade por suas decisões de investimento.
                    </p>

                    <h2>7. RISCOS DE INVESTIMENTO</h2>
                    <p>
                        Todo investimento envolve riscos, incluindo a possibilidade de perda do capital investido. As estratégias de alavancagem patrimonial podem amplificar tanto ganhos quanto perdas. É fundamental que o cliente avalie sua tolerância ao risco e situação financeira antes de implementar qualquer estratégia sugerida.
                    </p>

                    <h2>8. LINKS PARA TERCEIROS</h2>
                    <p>
                        Este site pode conter links para sites de terceiros, incluindo corretoras, bancos e plataformas de investimento. Não somos responsáveis pelo conteúdo, práticas de privacidade ou políticas desses sites externos.
                    </p>

                    <h2>9. MODIFICAÇÕES</h2>
                    <p>
                        Reservamo-nos o direito de modificar estes termos a qualquer momento para refletir mudanças em nossos serviços ou na legislação aplicável. As alterações entrarão em vigor imediatamente após a publicação no site.
                    </p>

                    <h2>10. CONTATO</h2>
                    <p>
                        Para questões sobre estes Termos de Uso ou sobre nossos serviços de consultoria, entre em contato conosco pelo e-mail: contato@tomsic-consultoria.com ou pelo telefone (19) 98243-5337.
                    </p>

                    <p className={S.termsFinal}>
                        Agnaldo Tomsic - Consultoria em Alavancagem Patrimonial — Todos os direitos reservados
                    </p>
                    <p className={S.termsVersao}>
                        Versão 1.0 — Atualizada em janeiro de 2025
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TermsOfUse
