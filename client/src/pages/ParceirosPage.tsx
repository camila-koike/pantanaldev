import { Building2, Award, Globe, Heart } from 'lucide-react';

export default function ParceirosPage() {
  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663605723416/bNzgUpS4pUsi564K8QNxBy/community-engagement-4gtEyfyCjpMxx69EVGSMaU.webp)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Parceiros e Especialistas</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Colaboração entre instituições, especialistas e lideranças em queimadas, saúde e meio ambiente
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Parceiros Institucionais */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Parceiros Institucionais</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Building2 className="text-primary" size={32} />,
                    name: 'Instituto Federal de Mato Grosso do Sul (IFMS)',
                    role: 'Instituição Executora',
                    desc: 'Coordenação científica, pesquisa de campo, capacitação e extensão comunitária através dos campi de Aquidauana, Corumbá e Jardim',
                  },
                  {
                    icon: <Globe className="text-secondary" size={32} />,
                    name: 'Instituto Global da Paz (GPF Brasil)',
                    role: 'Contratante',
                    desc: 'Apoio financeiro, articulação institucional e cooperação internacional. Atuante desde 2010 em projetos de desenvolvimento e paz',
                  },
                  // {
                  //   icon: <Award className="text-accent" size={32} />,
                  //   name: 'Universidade Federal de Goiás (UFG)',
                  //   role: 'Parceiro de Pesquisa',
                  //   desc: 'Colaboração em projetos ambientais anteriores e desenvolvimento de materiais educacionais',
                  // },
                  {
                    icon: <Heart className="text-destructive" size={32} />,
                    name: 'Ministério da Saúde',
                    role: 'Parceiro Estratégico',
                    desc: 'Dados epidemiológicos, apoio na implementação de ações de saúde pública e integração com atenção primária',
                  },
                ].map((parceiro, idx) => (
                  <div key={idx} className="flex gap-6 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-l-4 border-primary">
                    <div className="flex-shrink-0">{parceiro.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{parceiro.name}</h3>
                      <p className="text-sm font-bold text-primary mb-2">{parceiro.role}</p>
                      <p className="text-gray-700">{parceiro.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Possíveis Parceiros */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Rede de Colaboradores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-emerald-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-4">Instituições de Pesquisa</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ Institutos Federais e universidades locais</li>
                    <li>✓ Centros de pesquisa em mudanças climáticas</li>
                    <li>✓ Instituições internacionais de pesquisa</li>
                    <li>✓ Redes de pesquisa nacionais e internacionais</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-cyan-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-4">Órgãos Públicos</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ Agências ambientais (IBAMA, ICMBio)</li>
                    <li>✓ Secretarias de Saúde municipais</li>
                    <li>✓ Órgãos de proteção civil</li>
                    <li>✓ Instituições de vigilância epidemiológica</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-amber-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-4">Organizações Comunitárias</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ ONGs ambientais e de saúde</li>
                    <li>✓ Organizações comunitárias locais</li>
                    <li>✓ Grupos de lideranças indígenas</li>
                    <li>✓ Associações de produtores rurais</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-primary mb-4">Cooperação Internacional</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ Instituições na Bolívia e Paraguai</li>
                    <li>✓ Agências de cooperação bilateral</li>
                    <li>✓ Plataformas regionais (Mercosul)</li>
                    <li>✓ Fóruns globais de saúde-ambiente</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Especialistas e Renomes */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Áreas de Expertise Representadas</h2>
              <div className="space-y-6">
                {[
                  {
                    category: 'Queimadas e Incêndios Florestais',
                    experts: [
                      'Pesquisadores em sensoriamento remoto e monitoramento de focos de calor',
                      'Especialistas em prevenção e combate a incêndios',
                      'Cientistas em dinâmica do fogo em ecossistemas úmidos',
                    ],
                  },
                  {
                    category: 'Saúde Pública e Epidemiologia',
                    experts: [
                      'Epidemiologistas ambientais',
                      'Especialistas em doenças respiratórias',
                      'Pesquisadores em saúde mental e desastres ambientais',
                    ],
                  },
                  {
                    category: 'Qualidade do Ar e Poluição',
                    experts: [
                      'Especialistas em qualidade do ar e poluentes atmosféricos',
                      'Pesquisadores em impactos da fumaça na saúde',
                      'Cientistas em modelagem de dispersão de poluentes',
                    ],
                  },
                  {
                    category: 'Bombeiros e Proteção Civil',
                    experts: [
                      'Chefes de bombeiros e proteção civil',
                      'Especialistas em resposta a desastres',
                      'Coordenadores de planos de contingência',
                    ],
                  },
                  {
                    category: 'Conservação e Biodiversidade',
                    experts: [
                      'Ecologistas e conservacionistas',
                      'Especialistas em áreas úmidas',
                      'Pesquisadores em adaptação climática',
                    ],
                  },
                  {
                    category: 'Tecnologia e Inovação',
                    experts: [
                      'Desenvolvedores de plataformas de monitoramento',
                      'Especialistas em ciência de dados',
                      'Pesquisadores em IoT e sensores ambientais',
                    ],
                  },
                ].map((area, idx) => (
                  <div key={idx} className="bg-white border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-primary mb-4">{area.category}</h3>
                    <ul className="space-y-2">
                      {area.experts.map((expert, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{expert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Cooperação Internacional */}
            <div className="bg-gradient-to-r from-emerald-50 via-cyan-50 to-blue-50 p-8 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cooperação Transfronteiriça</h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                O projeto promove cooperação internacional com instituições em países vizinhos do Pantanal:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    country: 'Bolívia',
                    focus: 'Compartilhamento de dados de focos de calor e análise comparativa de impactos',
                    icon: '🇧🇴',
                  },
                  {
                    country: 'Paraguai',
                    focus: 'Intercâmbio de metodologias e capacitação técnica',
                    icon: '🇵🇾',
                  },
                  {
                    country: 'Brasil',
                    focus: 'Integração com políticas nacionais e plataformas regionais',
                    icon: '🇧🇷',
                  },
                ].map((país, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg text-center border-2 border-primary">
                    <div className="text-5xl mb-3">{país.icon}</div>
                    <h3 className="text-lg font-bold text-primary mb-2">{país.country}</h3>
                    <p className="text-gray-700 text-sm">{país.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
