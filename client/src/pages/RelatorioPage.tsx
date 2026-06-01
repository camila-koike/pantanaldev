import { FileText, BarChart3, TrendingUp, AlertCircle } from 'lucide-react';

export default function RelatorioPage() {
  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663605723416/bNzgUpS4pUsi564K8QNxBy/health-research-MaKrjyVFb6QyJNkZDGihfx.webp)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Relatório Técnico-Científico</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Análise integrada de dados ambientais e epidemiológicos do Pantanal
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Visão Geral</h2>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border-l-4 border-secondary">
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  O projeto produz análises técnicas e relatório científico que geram evidências aplicadas demonstrando a relação entre queimadas e agravos à saúde, subsidiando decisões públicas e fortalecendo a base técnica para políticas de prevenção.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Os dados integram informações de qualidade do ar, focos de calor, variáveis meteorológicas e indicadores epidemiológicos de internações respiratórias.
                </p>
              </div>
            </div>

            {/* Eixos de Análise */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Eixos de Análise</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <FileText className="text-primary" size={28} />,
                    title: 'Protocolo Metodológico',
                    desc: 'Definição de modelo estatístico para análise de correlação entre focos de calor, poluentes atmosféricos e internações respiratórias',
                  },
                  {
                    icon: <BarChart3 className="text-secondary" size={28} />,
                    title: 'Análise Estatística',
                    desc: 'Aplicação de técnicas avançadas para identificação de tendências, padrões sazonais e fatores de risco',
                  },
                  {
                    icon: <TrendingUp className="text-accent" size={28} />,
                    title: 'Boletins Técnicos',
                    desc: 'Produção periódica de boletins com análise dos dados e recomendações para gestores públicos',
                  },
                  {
                    icon: <AlertCircle className="text-destructive" size={28} />,
                    title: 'Indicadores de Risco',
                    desc: 'Desenvolvimento de modelo preditivo de risco à saúde associado à exposição à fumaça',
                  },
                ].map((eixo, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0 mt-1">{eixo.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{eixo.title}</h3>
                      <p className="text-gray-700">{eixo.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dados e Indicadores */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Dados e Indicadores</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-emerald-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Dados Ambientais</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Focos de calor (satélites)</li>
                    <li>✓ Qualidade do ar (PM2.5, PM10)</li>
                    <li>✓ Variáveis meteorológicas</li>
                    <li>✓ Índices de vegetação</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-cyan-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Dados Epidemiológicos</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Internações respiratórias</li>
                    <li>✓ Atendimentos em saúde</li>
                    <li>✓ Indicadores de morbidade</li>
                    <li>✓ Dados demográficos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resultados Esperados */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Resultados Esperados</h2>
              <div className="bg-gradient-to-r from-emerald-50 via-cyan-50 to-blue-50 p-8 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Plataforma digital de monitoramento implementada',
                    'Relatório técnico-científico publicado',
                    'Metodologia replicável documentada',
                    'Subsídios para políticas públicas',
                    'Modelo preditivo de risco desenvolvido',
                    'Integração de dados em tempo real',
                  ].map((resultado, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-800 font-medium">{resultado}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metodologia */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Abordagem Metodológica</h2>
              <div className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Coleta e Padronização',
                    desc: 'Levantamento de bases de dados públicas e padronização de variáveis',
                  },
                  {
                    step: '02',
                    title: 'Integração de Dados',
                    desc: 'Desenvolvimento de banco de dados georreferenciado único',
                  },
                  {
                    step: '03',
                    title: 'Análise Estatística',
                    desc: 'Aplicação de modelos de correlação e regressão',
                  },
                  {
                    step: '04',
                    title: 'Disseminação',
                    desc: 'Publicação de boletins e relatório final com recomendações',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 pb-6 border-b border-gray-200 last:border-b-0">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
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
