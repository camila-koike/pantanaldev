import { Users, BookOpen, Code, Map } from 'lucide-react';

export default function EquipePage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Nossa Equipe</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Profissionais dedicados de múltiplas disciplinas trabalhando juntos
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Estrutura Organizacional */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Estrutura Organizacional</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 rounded-xl">
                <div className="space-y-6">
                  <div className="text-center pb-6 border-b-2 border-primary">
                    <div className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-bold mb-2">
                      Tania Mara Miyashiro Sasaki
                    
                    <p className="text-gray-700">Coordenadora Geral - ASINT</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { campus: 'Camila Yumi Koike', role: 'Coordenador de Aquidauan' },
                      { campus: 'Gabriel Paganini Faggioni', role: 'Coordenador de Corumbá' },
                      { campus: 'Danilo Souza Melo', role: 'Coordenador de Jardim' },
                    ].map((item, idx) => (
                      <div key={idx} className="text-center">
                        <div className="bg-white border-2 border-primary p-4 rounded-lg">
                          <p className="font-bold text-primary text-lg">{item.campus}</p>
                          <p className="text-gray-700 text-sm">{item.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Composição da Equipe */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Composição da Equipe</h2>
              <div className="space-y-6">
                {[
                  {
                    role: 'Coordenação Geral',
                    count: '1',
                    location: 'Reitoria/ASINT',
                    desc: 'Coordenação científica e articulação institucional',
                    icon: <Users className="text-primary" size={32} />,
                  },
                  {
                    role: 'Coordenadores de Campus',
                    count: '3',
                    location: 'Aquidauana, Corumbá, Jardim',
                    desc: 'Coordenação executiva em cada campus',
                    icon: <BookOpen className="text-secondary" size={32} />,
                  },      
                  {
                    role: 'Estudantes',
                    count: '9',
                    location: '3 por campus',
                    desc: 'Estudantes de nível superior e médio',
                    icon: <Map className="text-destructive" size={32} />,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border-l-4 border-primary">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                        <span className="bg-primary text-white px-3 py-1 rounded-full font-bold text-lg">{item.count}</span>
                      </div>
                      <p className="text-gray-700 mb-2"><strong>Local:</strong> {item.location}</p>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Áreas de Expertise */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Áreas de Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    area: 'Informática',
                    expertise: 'Banco de Dados',
                    desc: 'Estruturação de banco de dados, análise estatística básica e capacitação em organização de dados',
                    icon: '💻',
                  },
                  {
                    area: 'Geografia',
                    expertise: 'Análise Territorial',
                    desc: 'Compreensão territorial do Pantanal, análise de mapas, dados espaciais e clima',
                    icon: '🗺️',
                  },
                  {
                    area: 'Biologia',
                    expertise: 'Saúde Ambiental',
                    desc: 'Fisiologia respiratória, saúde ambiental, ecologia e impactos biológicos das queimadas',
                    icon: '🧬',
                  },
                ].map((area, idx) => (
                  <div key={idx} className="bg-white border-2 border-emerald-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="text-5xl mb-4">{area.icon}</div>
                    <h3 className="text-xl font-bold text-primary mb-2">{area.area}</h3>
                    <p className="text-sm font-bold text-gray-700 mb-3">{area.expertise}</p>
                    <p className="text-gray-700 text-sm">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recursos Humanos */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Recursos e Apoio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-cyan-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Gestão Administrativa</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ Coordenação Geral (IFMS)</li>
                    <li>✓ Vice-Coordenação (IFMS)</li>
                    <li>✓ Gestão Financeira (Fundação)</li>
                    <li>✓ Equipe Técnica (ASINT/PROPI)</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-emerald-200 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Infraestrutura</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>✓ Espaços dos 3 campi</li>
                    <li>✓ Laboratórios equipados</li>
                    <li>✓ Acesso a bases de dados</li>
                    <li>✓ Ferramentas de geoprocessamento</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Capacitação e Desenvolvimento */}
            <div className="bg-gradient-to-r from-emerald-50 via-cyan-50 to-blue-50 p-8 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Capacitação e Desenvolvimento</h2>
              <p className="text-lg text-gray-800 leading-relaxed mb-6">
                Equipe capacitada em:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Análise estatística avançada',
                  'Geoprocessamento e sensoriamento remoto',
                  'Epidemiologia ambiental',
                  'Comunicação científica',
                  'Ciência cidadã e engajamento comunitário',
                  'Cooperação internacional',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-gray-800 font-medium">{item}</p>
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
