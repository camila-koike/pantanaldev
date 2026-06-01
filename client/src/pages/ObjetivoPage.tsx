import { CheckCircle, Target } from 'lucide-react';

export default function ObjetivoPage() {
  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663605723416/bNzgUpS4pUsi564K8QNxBy/fire-monitoring-52CmAugP5ZDPn9thGqWd5H.webp)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Objetivo Geral</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Criar e implementar um sistema integrado de monitoramento dos impactos da fumaça na saúde pública
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Objetivo Geral */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-primary" size={32} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Objetivo Geral</h2>
              </div>
              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 rounded-xl border-l-4 border-primary">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Criar e implementar um sistema integrado de monitoramento dos impactos da fumaça na saúde pública na região do Pantanal, tendo como base as cidades de Aquidauana, Corumbá e Jardim, articulando dados ambientais e de saúde para fortalecer ações preventivas junto às populações vulneráveis e fomentar a cooperação internacional.
                </p>
              </div>
            </div>

            {/* Objetivos Específicos */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Objetivos Específicos</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Sistema Integrado de Monitoramento',
                    description: 'Implantar um sistema integrado de monitoramento saúde-fumaça, reunindo dados ambientais e epidemiológicos em plataforma digital.',
                  },
                  {
                    title: 'Análise Científica',
                    description: 'Produzir relatório científico, identificando a relação entre queimadas e agravos respiratórios com base em dados estruturados e análise estatística rigorosa.',
                  },
                  {
                    title: 'Rede Comunitária',
                    description: 'Implementar rede comunitária de monitoramento e prevenção com ações educativas voltadas às populações vulneráveis e capacitação técnica.',
                  },
                  {
                    title: 'Cooperação Internacional',
                    description: 'Estabelecer cooperação internacional, promovendo intercâmbio de dados e análise comparativa entre municípios transfronteiriços do Pantanal.',
                  },
                ].map((obj, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{obj.title}</h3>
                      <p className="text-gray-700">{obj.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metas */}
            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Metas Principais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: '📊', title: 'Plataforma Digital', desc: 'Sistema de monitoramento implementado e atualizado' },
                  { icon: '📄', title: 'Relatórios Técnicos', desc: 'Boletins e relatório científico final publicados' },
                  { icon: '👥', title: 'Capacitação', desc: 'Ações de capacitação para comunidades locais' },
                  { icon: '🤝', title: 'Cooperação', desc: 'Termo de cooperação internacional formalizado' },
                ].map((meta, idx) => (
                  <div key={idx} className="bg-white border-2 border-emerald-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-3">{meta.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{meta.title}</h3>
                    <p className="text-gray-700">{meta.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Cronograma de Execução</h2>
              <div className="space-y-4">
                {[
                  { period: 'Mês 1-2', title: 'Levantamento e Integração de Dados', status: 'Em andamento' },
                  { period: 'Mês 3-4', title: 'Desenvolvimento da Plataforma', status: 'Planejado' },
                  { period: 'Mês 4-5', title: 'Capacitação Comunitária', status: 'Planejado' },
                  { period: 'Mês 5-8', title: 'Análise e Relatórios Finais', status: 'Planejado' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-transparent border-l-4 border-primary rounded">
                    <div className="font-bold text-primary bg-white px-4 py-2 rounded min-w-fit">{item.period}</div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">{item.title}</p>
                    </div>
                    <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded">{item.status}</span>
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
