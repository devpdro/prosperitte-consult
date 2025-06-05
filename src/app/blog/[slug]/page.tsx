import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import { IMAGE } from 'src/presentation/assets';

import { MdCalendarToday, MdAccessTime } from 'react-icons/md';

import styles from './post.module.scss';
import { Contact, Footer, Navbar } from 'src/presentation/components';

const posts = [
    {
        tag: 'CLIENTE EM FOCO',
        category: 'Cliente em Foco',
        image: IMAGE.GOLPES.src,
        slug: 'golpes-em-consorcio-como-evitar',
    },
    {
        tag: 'MERCADO',
        category: 'Mercado',
        image: IMAGE.TENDENCIAS.src,
        slug: 'tendencias-do-setor-de-consorcios-em-2024',
    },
    {
        tag: 'CLIENTE EM FOCO',
        category: 'Cliente em Foco',
        image: IMAGE.PLANEJAMENTO.src,
        slug: 'planejamento-financeiro-com-consorcio',
    },
    {
        tag: 'DICAS DE INVESTIMENTO',
        category: 'Dicas de Investimento',
        image: IMAGE.IMPOSTO_COMPRA_CARRO.src,
        slug: 'imposto-na-compra-de-carro-com-consorcio',
    },
    {
        tag: 'MERCADO',
        category: 'Mercado',
        image: IMAGE.QUATRO_VEICULOS_NOVOS_HYNDAI.src,
        slug: 'quatro-veiculos-novos-hyundai-no-consorcio',
    },
];

function generatePostData(slug: string) {
    if (slug.includes('golpes')) {
        return {
            title: 'Golpes em consórcio: como se proteger de fraudes e armadilhas',
            reading: '9 minutos de leitura',
            content: (
                <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ color: '#100f30', marginBottom: '16px' }}>
                        O perigo dos golpes em consórcio
                    </h2>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        O consórcio é uma das formas mais inteligentes e seguras de conquistar bens como carros, imóveis e até serviços, sem precisar pagar juros.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        No entanto, com o crescimento desse mercado, infelizmente também aumentaram as tentativas de golpes aplicados por pessoas mal-intencionadas.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Entender como esses golpes funcionam é essencial para garantir que você realize seu sonho de forma segura e sem prejuízos.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Segundo dados do Banco Central, o número de denúncias de golpes relacionados a consórcios cresceu significativamente nos últimos anos.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Isso acontece, principalmente, pela falta de informação e pela ilusão de ofertas que parecem boas demais para serem verdade.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '24px' }}>
                        É exatamente nesse ponto que os golpistas se aproveitam: promessas de contemplação imediata, taxas muito abaixo do mercado, isenção de lances e outras mentiras que, na prática, só existem para enganar quem não conhece bem como funciona um consórcio legítimo.
                    </p>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Como funcionam os golpes mais comuns
                    </h3>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Os golpistas geralmente se passam por representantes de administradoras, muitas vezes criando sites falsos, perfis no Instagram, Facebook e até simulando conversas via WhatsApp com logotipos e documentos falsificados.
                    </p>

                    <p style={{ color: '#616161', marginBottom: '24px' }}>
                        Eles oferecem falsas oportunidades, dizendo que você será contemplado imediatamente, sem precisar esperar os sorteios nem ofertar lances.
                        Após convencer a vítima, solicitam pagamentos antecipados sob pretexto de taxas de adesão, seguros ou até uma suposta garantia de contemplação. Depois que o dinheiro é transferido, desaparecem, bloqueando todos os canais de comunicação.
                    </p>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Sinais claros de golpe
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>Promessa de contemplação imediata sem sorteio ou lance.</li>
                        <li style={{ marginBottom: '8px' }}>Valores muito abaixo do mercado ou ofertas que parecem milagrosas.</li>
                        <li style={{ marginBottom: '8px' }}>Solicitação de pagamento antecipado via PIX, boleto ou conta de pessoa física.</li>
                        <li style={{ marginBottom: '8px' }}>Perfis em redes sociais sem CNPJ, sem endereço fixo e sem site oficial.</li>
                        <li style={{ marginBottom: '8px' }}>Dificuldade em encontrar informações da suposta empresa no Banco Central.</li>
                        <li style={{ marginBottom: '8px' }}>Pressão psicológica com frases como "Últimas vagas", "Só hoje" ou "Oferta exclusiva".</li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Como verificar se um consórcio é confiável
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Consulte o Banco Central. Verifique se a empresa consta no cadastro oficial (bcb.gov.br).
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Cheque o CNPJ. A empresa precisa ter CNPJ ativo, consultável no site da Receita Federal.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Evite pagamentos antecipados. Taxas são pagas diretamente à administradora, com contrato.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Desconfie de promessas fora da realidade. Nenhuma empresa garante contemplação sem sorteio ou lance.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Verifique a reputação da empresa em sites como Reclame Aqui, redes sociais e Google.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Dicas extras para sua segurança
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Nunca envie dados pessoais por WhatsApp sem confirmar a autenticidade da empresa.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Desconfie de intermediários que se apresentam como facilitadores da contemplação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Procure conversar pessoalmente ou por videochamada com um consultor oficial.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Leia atentamente todas as cláusulas do contrato antes de assinar qualquer documento.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Em caso de dúvida, fale diretamente com a administradora, sem intermediários.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        O que fazer se cair em um golpe
                    </h3>

                    <ol style={{ color: '#616161', paddingLeft: '20px', marginBottom: '24px' }}>
                        <li style={{ marginBottom: '8px' }}>
                            Faça um boletim de ocorrência na delegacia, seja ela física ou online.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Comunique imediatamente seu banco para tentar bloquear a transação.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Informe o golpe ao Banco Central.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Denuncie o perfil, site ou contato falso nas redes sociais.
                        </li>
                        <li style={{ marginBottom: '8px' }}>
                            Busque apoio jurídico para tentar recuperar os valores.
                        </li>
                    </ol>

                    <h3 style={{ color: '#100f30', marginBottom: '12px' }}>
                        Conclusão
                    </h3>

                    <p style={{ color: '#616161', marginBottom: '12px' }}>
                        Informação é sua maior proteção. Compartilhe esse conteúdo com quem você conhece e ajude outras pessoas a não caírem em golpes relacionados a consórcios.
                    </p>

                    <p style={{ color: '#616161' }}>
                        O consórcio é, sim, uma excelente forma de adquirir bens, desde que seja feito de maneira segura, com empresas autorizadas e dentro da lei.
                    </p>
                </div>
            ),
        };
    }

    if (slug.includes('tendencias')) {
        return {
            title: 'Tendências do setor de consórcios em 2024',
            reading: '6 minutos de leitura',
            content: (
                <>
                    <h2 style={{ color: '#100f30' }}>O que esperar do mercado de consórcios</h2>
                    <p style={{ color: '#616161' }}>O setor de consórcios segue em crescimento, impulsionado pela busca de alternativas de crédito mais acessíveis e sem juros. Em 2024, a digitalização e a personalização das cotas são tendências fortes.</p>
                    <h3 style={{ color: '#100f30' }}>Principais tendências</h3>
                    <ul style={{ color: '#616161' }}>
                        <li>Consórcios 100% digitais e atendimento online personalizado.</li>
                        <li>Planos flexíveis e adaptados ao perfil do cliente.</li>
                        <li>Maior transparência e educação financeira para o consumidor.</li>
                        <li>Expansão para novos segmentos, como serviços e energia solar.</li>
                    </ul>
                    <h3 style={{ color: '#100f30' }}>Oportunidades para investidores</h3>
                    <p style={{ color: '#616161' }}>O consórcio se consolida como opção de investimento seguro e planejado, especialmente para imóveis e veículos. Fique atento às novidades e aproveite as melhores oportunidades!</p>
                </>
            ),
        };
    }
    if (slug.includes('planejamento')) {
        return {
            title: 'Planejamento financeiro com consórcio',
            reading: '7 minutos de leitura',
            content: (
                <>
                    <h2 style={{ color: '#100f30' }}>Por que o consórcio é aliado do planejamento</h2>
                    <p style={{ color: '#616161' }}>O consórcio permite adquirir bens de forma programada, sem juros e com parcelas acessíveis. É ideal para quem quer se organizar financeiramente e evitar dívidas.</p>
                    <h3 style={{ color: '#100f30' }}>Vantagens do consórcio para seu bolso</h3>
                    <ul style={{ color: '#616161' }}>
                        <li>Parcelas que cabem no orçamento.</li>
                        <li>Sem entrada e sem juros.</li>
                        <li>Possibilidade de antecipar a contemplação com lances.</li>
                        <li>Flexibilidade para usar o crédito em diferentes tipos de bens.</li>
                    </ul>
                    <h3 style={{ color: '#100f30' }}>Dicas para um bom planejamento</h3>
                    <ul style={{ color: '#616161' }}>
                        <li>Defina seu objetivo e prazo.</li>
                        <li>Escolha o grupo certo para seu perfil.</li>
                        <li>Conte com o suporte de especialistas para simular cenários.</li>
                    </ul>
                    <p style={{ color: '#616161' }}>Com disciplina e informação, o consórcio pode ser o caminho mais seguro para realizar seus sonhos!</p>
                </>
            ),
        };
    }
    if (slug.includes('imposto')) {
        return {
            title: 'Imposto na compra de carro com consórcio',
            reading: '6 minutos de leitura',
            content: (
                <>
                    <h2 style={{ color: '#100f30' }}>Como funciona a tributação</h2>
                    <p style={{ color: '#616161' }}>Ao adquirir um veículo por consórcio, é importante entender os impostos envolvidos, como o IOF e o IPVA. O consórcio não tem juros, mas há taxas administrativas e eventuais tributos na transferência do bem.</p>
                    <h3 style={{ color: '#100f30' }}>Principais impostos e taxas</h3>
                    <ul style={{ color: '#616161' }}>
                        <li>IOF: incide sobre operações de crédito, mas não sobre consórcio.</li>
                        <li>IPVA: obrigatório após a transferência do veículo.</li>
                        <li>Taxa de transferência: cobrada pelo Detran.</li>
                    </ul>
                    <h3 style={{ color: '#100f30' }}>Vantagens fiscais do consórcio</h3>
                    <ul style={{ color: '#616161' }}>
                        <li>Sem juros embutidos nas parcelas.</li>
                        <li>Possibilidade de diluir custos ao longo do tempo.</li>
                        <li>Planejamento tributário mais eficiente.</li>
                    </ul>
                    <p style={{ color: '#616161' }}>Consulte sempre a administradora e um contador para evitar surpresas e aproveitar todos os benefícios fiscais!</p>
                </>
            ),
        };
    }
    if (slug.includes('quatro-veiculos')) {
        return {
            title: 'Quatro veículos Hyundai novos no consórcio',
            reading: '7 minutos de leitura',
            content: (
                <>
                    <h2 style={{ color: '#100f30' }}>Por que escolher Hyundai no consórcio</h2>
                    <p style={{ color: '#616161' }}>Adquirir um Hyundai zero km por consórcio é uma alternativa inteligente para quem busca economia e flexibilidade. Os modelos da marca são reconhecidos pela qualidade e baixo custo de manutenção.</p>
                    <h3 style={{ color: '#100f30' }}>Vantagens exclusivas</h3>
                    <ul style={{ color: '#616161' }}>
                        <li>Parcelas acessíveis e sem juros.</li>
                        <li>Modelos para todos os perfis.</li>
                        <li>Facilidade na contemplação e uso do crédito.</li>
                        <li>Assistência técnica e garantia de fábrica.</li>
                    </ul>
                    <h3 style={{ color: '#100f30' }}>Dicas para aproveitar o consórcio</h3>
                    <ul style={{ color: '#616161' }}>
                        <li>Pesquise os modelos disponíveis.</li>
                        <li>Simule diferentes valores e prazos.</li>
                        <li>Conte com o suporte da Prospéritté Consult para tirar dúvidas.</li>
                    </ul>
                    <p style={{ color: '#616161' }}>Com planejamento, o consórcio Hyundai pode ser o melhor negócio para seu próximo carro!</p>
                </>
            ),
        };
    }
    return {
        title: 'Destaque do Blog',
        reading: '5 minutos de leitura',
        content: (
            <>
                <p style={{ color: '#616161' }}>Confira as melhores dicas e novidades sobre consórcio, planejamento financeiro e mercado.</p>
            </>
        ),
    };
}

const categoryMap: Record<string, { name: string; count: number }> = {};
for (const post of posts) {
    const key = post.category.trim().toLowerCase();
    if (!categoryMap[key]) {
        categoryMap[key] = { name: post.category.trim(), count: 0 };
    }
    categoryMap[key].count++;
}
const categories = Object.values(categoryMap);

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = posts.find(p => p.slug === params.slug);
    if (!post) return notFound();
    const { title, reading, content } = generatePostData(post.slug);

    return (
        <div>
            <Navbar />
            <div className={styles.blogGrid}>
                <aside className={styles.rightMobile}>
                    <h4 className={styles.categoriesTitle}>CATEGORIAS</h4>
                    <div className={styles.categoriesList + ' ' + styles.stickyCategories}>
                        <Link
                            href="/blog"
                            className={styles.categoryBtn}
                        >
                            Todas as Categorias
                            <span className={styles.count}>{posts.length}</span>
                        </Link>
                        {categories.map((cat) => (
                            <Link
                                href={`/blog?categoria=${encodeURIComponent(cat.name)}`}
                                className={styles.categoryBtn}
                                key={cat.name}
                            >
                                {cat.name}
                                <span className={styles.count}>{cat.count}</span>
                            </Link>
                        ))}
                    </div>
                </aside>
                <div className={styles.left}>
                    <div className={styles.imageWrapper}>
                        <Image src={post.image} alt={title} width={800} height={400} className={styles.image} />
                    </div>
                    <span className={styles.tag}>{post.tag}</span>
                    <h1 className={styles.title}>{title}</h1>
                    <div className={styles.meta}>
                        <span><MdCalendarToday size={16} /> 12/06/2024</span>
                        <span className={styles.dot}>•</span>
                        <span><MdAccessTime size={16} /> {reading}</span>
                    </div>
                    <div className={styles.content}>{content}</div>
                </div>
                <aside className={styles.rightDesktop}>
                    <h4 className={styles.categoriesTitle}>CATEGORIAS</h4>
                    <div className={styles.categoriesList + ' ' + styles.stickyCategories}>
                        <Link
                            href="/blog"
                            className={styles.categoryBtn}
                        >
                            Todas as Categorias
                            <span className={styles.count}>{posts.length}</span>
                        </Link>
                        {categories.map((cat) => (
                            <Link
                                href={`/blog?categoria=${encodeURIComponent(cat.name)}`}
                                className={styles.categoryBtn}
                                key={cat.name}
                            >
                                {cat.name}
                                <span className={styles.count}>{cat.count}</span>
                            </Link>
                        ))}
                    </div>
                </aside>
            </div>
            <Contact />
            <Footer />
        </div>
    );
} 