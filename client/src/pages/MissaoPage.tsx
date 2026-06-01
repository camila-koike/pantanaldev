import { Zap, Users, Globe, Heart } from 'lucide-react';

export default function MissaoPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nossa Missão</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Transformar conhecimento em ação para proteger o Pantanal e suas comunidades
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Missão Principal */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Missão</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 rounded-xl border-l-4 border-primary">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Criar e implementar um sistema integrado de monitoramento dos impactos da fumaça na saúde pública na região do Pantanal, articulando dados ambientais e de saúde para fortalecer ações preventivas junto às populações vulneráveis e fomentar a cooperação internacional em pesquisa, educação e políticas públicas.
                </p>
              </div>
            </div>

            {/* Pilares */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Pilares Estratégicos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: <Zap className="text-primary" size={40} />,
                    title: 'Inovação Científica',
                    desc: 'Desenvolvimento de metodologias inovadoras de monitoramento integrado que combina tecnologia, dados e ciência cidadã.',
                  },
                  {
                    icon: <Users className="text-secondary" size={40} />,
                    title: 'Engajamento Comunitário',
                    desc: 'Capacitação e empoderamento de comunidades locais para participar ativamente do monitoramento e prevenção.',
                  },
                  {
                    icon: <Heart className="text-destructive" size={40} />,
                    title: 'Saúde Pública',
                    desc: 'Proteção e promoção da saúde das populações vulneráveis expostas aos impactos das queimadas.',
                  },
                  {
                    icon: <Globe className="text-accent" size={40} />,
                    title: 'Cooperação Internacional',
                    desc: 'Estabelecimento de parcerias transfronteiriças para compartilhamento de conhecimento e soluções.',
                  },
                ].map((pilar, idx) => (
                  <div key={idx} className="bg-white border-2 border-gray-200 p-8 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="mb-4">{pilar.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{pilar.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{pilar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Valores */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Nossos Valores</h2>
              <div className="space-y-4">
                {[
                  { title: 'Excelência Científica', desc: 'Rigor metodológico e produção de conhecimento de qualidade' },
                  { title: 'Responsabilidade Social', desc: 'Compromisso com as comunidades e seu bem-estar' },
                  { title: 'Sustentabilidade', desc: 'Proteção ambiental e desenvolvimento equilibrado' },
                  { title: 'Transparência', desc: 'Comunicação clara e acesso público aos dados e resultados' },
                  { title: 'Colaboração', desc: 'Trabalho em rede com parceiros nacionais e internacionais' },
                  { title: 'Inovação', desc: 'Busca contínua por novas soluções e tecnologias' },
                ].map((valor, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-emerald-50 to-transparent rounded-lg border-l-4 border-primary">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{valor.title}</h3>
                      <p className="text-gray-700">{valor.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Objetivos de Impacto */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Objetivos de Impacto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    category: 'Científico',
                    goals: [
                      'Publicação de relatório técnico-científico',
                      'Desenvolvimento de metodologia replicável',
                      'Integração de dados ambientais e epidemiológicos',
                    ],
                  },
                  {
                    category: 'Institucional',
                    goals: [
                      'Consolidação do IFMS como referência regional',
                      'Fortalecimento de cooperação internacional',
                      'Integração entre ensino, pesquisa e extensão',
                    ],
                  },
                  {
                    category: 'Social',
                    goals: [
                      'Capacitação de 30+ pessoas em monitoramento',
                      'Ampliação do acesso a informações de qualidade do ar',
                      'Fortalecimento da resiliência comunitária',
                    ],
                  },
                  {
                    category: 'Ambiental',
                    goals: [
                      'Subsídios para políticas de prevenção',
                      'Monitoramento de focos de queimadas',
                      'Gestão ambiental baseada em evidências',
                    ],
                  },
                ].map((obj, idx) => (
                  <div key={idx} className="bg-white border-2 border-emerald-200 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-primary mb-4">{obj.category}</h3>
                    <ul className="space-y-3">
                      {obj.goals.map((goal, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Visão de Futuro */}
            <div className="bg-gradient-to-r from-emerald-50 via-cyan-50 to-blue-50 p-8 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visão de Futuro</h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Esperamos que este projeto se torne um modelo de referência para monitoramento integrado de saúde-ambiente em regiões afetadas por queimadas, contribuindo para:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Redução de impactos das queimadas na saúde pública',
                  'Fortalecimento de políticas de prevenção e mitigação',
                  'Empoderamento de comunidades vulneráveis',
                  'Cooperação científica transfronteiriça',
                  'Proteção da biodiversidade do Pantanal',
                  'Desenvolvimento sustentável da região',
                ].map((visao, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">→</span>
                    </div>
                    <p className="text-gray-800 font-medium">{visao}</p>
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
