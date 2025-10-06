import { Meta } from "src/presentation-leverage/components"

import S from './privacy-policy.module.scss'

const PrivacyPolicy = () => {
    return (
        <div>
            <Meta
                title="Política de Privacidade | Agnaldo Tomsic"
                description="Saiba como Agnaldo Tomsic protege seus dados pessoais e respeita sua privacidade em nossa consultoria de alavancagem patrimonial."
                keywords="Política de Privacidade, LGPD, privacidade, dados pessoais, Agnaldo Tomsic, consultoria alavancagem patrimonial"
            />
            <div className={S.privacyPolicyContainer}>
                <div className={S.privacyPolicyContent}>
                    <h1 className={S.privacyTitle}>POLÍTICA DE PRIVACIDADE</h1>

                    <h2>1. COLETA DE INFORMAÇÕES</h2>
                    <p>
                        Ao acessar nosso site e solicitar consultoria em alavancagem patrimonial, podemos coletar dados pessoais fornecidos voluntariamente pelo usuário, como nome, e-mail, telefone e outras informações necessárias para contato, envio de materiais educativos e agendamento de consultorias especializadas.
                        <br /><br />
                        Também utilizamos cookies e tecnologias semelhantes para melhorar a experiência de navegação e personalizar conteúdos relacionados a estratégias de investimento e alavancagem patrimonial.
                    </p>

                    <h2>2. USO DAS INFORMAÇÕES</h2>
                    <p>Os dados coletados são utilizados para:</p>
                    <ul>
                        <li>Entrar em contato com o usuário para agendamento de consultorias</li>
                        <li>Enviar informações sobre estratégias de alavancagem patrimonial, materiais educativos e oportunidades de investimento</li>
                        <li>Personalizar recomendações de investimento e estratégias patrimoniais</li>
                        <li>Melhorar a navegação e a personalização do site</li>
                        <li>Cumprir exigências legais e regulatórias</li>
                    </ul>

                    <h2>3. COMPARTILHAMENTO DE INFORMAÇÕES</h2>
                    <p>Não compartilhamos informações pessoais com terceiros, exceto:</p>
                    <ul>
                        <li>Plataformas de pagamento (quando aplicável, para aquisição de serviços de consultoria)</li>
                        <li>Fornecedores de tecnologia e marketing digital (ex.: Google, Meta, ferramentas de automação de e-mail/CRM)</li>
                        <li>Parceiros estratégicos relacionados a produtos de investimento (sempre com seu consentimento)</li>
                        <li>Quando exigido por lei</li>
                    </ul>

                    <h2>4. DIREITOS DO USUÁRIO</h2>
                    <p>De acordo com a LGPD, você pode solicitar a qualquer momento:</p>
                    <ul>
                        <li>Confirmação da existência de tratamento de seus dados</li>
                        <li>Acesso, correção ou exclusão de informações pessoais</li>
                        <li>Revogação de consentimento para uso de dados</li>
                        <li>Portabilidade dos dados para outro fornecedor de serviços</li>
                    </ul>
                    <p>Solicitações podem ser feitas pelo e-mail: contato@tomsic-consultoria.com</p>

                    <h2>5. SEGURANÇA DOS DADOS</h2>
                    <p>Adotamos medidas de segurança técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, perda ou alteração indevida. Todas as informações relacionadas a estratégias de investimento e dados financeiros são tratadas com máxima confidencialidade.</p>

                    <h2>6. RETENÇÃO DE DADOS</h2>
                    <p>Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, respeitando os prazos legais de retenção e as necessidades de acompanhamento de estratégias de investimento de longo prazo.</p>

                    <h2>7. ALTERAÇÕES DESTA POLÍTICA</h2>
                    <p>Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir mudanças em nossos serviços ou na legislação aplicável. Recomendamos a revisão periódica desta página.</p>

                    <p className={S.privacyFinal}>
                        Agnaldo Tomsic - Consultoria em Alavancagem Patrimonial — Todos os direitos reservados
                    </p>
                    <p className={S.privacyVersao}>
                        Versão 1.0 — Atualizada em janeiro de 2025
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
