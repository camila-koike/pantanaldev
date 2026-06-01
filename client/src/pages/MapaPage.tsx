import { MapPin, Droplets, Leaf, AlertTriangle } from 'lucide-react';

export default function MapaPage() {
  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <section
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663605723416/bNzgUpS4pUsi564K8QNxBy/pantanal-landscape-md8K4PGmhroDUr4Aaj46ZD.webp)',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Mapa do Pantanal</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Compreendendo a geografia, biodiversidade e desafios ambientais
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">O Pantanal</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 rounded-xl border-l-4 border-primary">
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  O Pantanal é a maior área úmida tropical continental do planeta, abrangendo cerca de 150 a 210 mil km² na América do Sul, com aproximadamente 75% dessa extensão no Brasil, principalmente nos estados de Mato Grosso e Mato Grosso do Sul.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Este bioma possui alta biodiversidade, abrigando milhares de espécies de plantas, aves, peixes e mamíferos, além de desempenhar papel crucial nos ciclos hidrológicos e na regulação climática regional e global.
                </p>
              </div>
            </div>

            {/* Localização */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Localização Geográfica</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  { country: 'Brasil', percentage: '75%', desc: 'Mato Grosso e Mato Grosso do Sul' },
                  { country: 'Bolívia', percentage: '15%', desc: 'Região de Santa Cruz' },
                  { country: 'Paraguai', percentage: '10%', desc: 'Região Oriental' },
                ].map((loc, idx) => (
                  <div key={idx} className="bg-white border-2 border-emerald-200 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <MapPin className="text-primary mx-auto mb-3" size={32} />
                    <p className="text-2xl font-bold text-primary mb-2">{loc.percentage}</p>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{loc.country}</h3>
                    <p className="text-gray-700 text-sm">{loc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Biodiversidade */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Biodiversidade</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { 
                    icon: <Leaf className="text-primary" size={32} />, 
                    title: 'Flora', 
                    items: ['4.700+ espécies de plantas', 'Vegetação aquática e terrestre', 'Florestas inundáveis', 'Cerrado e campos'] 
                  },
                  { 
                    icon: <Droplets className="text-secondary" size={32} />, 
                    title: 'Fauna', 
                    items: ['650+ espécies de aves', '260 espécies de peixes', '100 mamíferos', '50+ répteis'] 
                  },
                ].map((bio, idx) => (
                  <div key={idx} className="bg-gray-50 p-8 rounded-lg border-2 border-gray-200">
                    <div className="flex items-center gap-3 mb-6">
                      {bio.icon}
                      <h3 className="text-2xl font-bold text-gray-900">{bio.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {bio.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Ciclo de Inundações */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ciclo de Inundações</h2>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6">
                      O Pantanal apresenta um ciclo hidrológico único, com inundações anuais que afetam aproximadamente 80% da região. As variações sazonais do nível da água podem chegar de 2 a 5 metros, criando um ecossistema dinâmico e resiliente.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <p className="text-gray-700"><strong>Cheia:</strong> Maio a Agosto</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <p className="text-gray-700"><strong>Estiagem:</strong> Setembro a Abril</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Importância Hidrológica</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li>✓ Regulação de fluxos de água</li>
                      <li>✓ Recarga de aquíferos</li>
                      <li>✓ Prevenção de enchentes</li>
                      <li>✓ Manutenção de biodiversidade</li>
                      <li>✓ Sequestro de carbono</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ameaças e Desafios */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Ameaças e Desafios</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <AlertTriangle className="text-destructive" size={28} />,
                    title: 'Incêndios Florestais',
                    desc: 'Aproximadamente 90% causados por atividades humanas. Em 2020, mais de 4 milhões de hectares foram afetados.',
                    stats: '30% do bioma em 2020',
                  },
                  {
                    icon: <Leaf className="text-orange-500" size={28} />,
                    title: 'Desmatamento',
                    desc: 'Aproximadamente 12% da vegetação nativa foi perdida, com aumento entre 2020-2023.',
                    stats: 'Apenas 4,5% sob proteção efetiva',
                  },
                  {
                    icon: <Droplets className="text-blue-500" size={28} />,
                    title: 'Desvio de Água',
                    desc: 'Hidrelétricas e sistemas de irrigação ameaçam o ciclo hidrológico natural.',
                    stats: 'Impacto em toda a bacia hidrográfica',
                  },
                  {
                    icon: <AlertTriangle className="text-red-500" size={28} />,
                    title: 'Mudanças Climáticas',
                    desc: 'Alterações nos padrões de chuva e temperatura afetam o ecossistema.',
                    stats: 'Aumento de períodos de seca extrema',
                  },
                ].map((ameaca, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-red-50 rounded-lg border-l-4 border-destructive hover:bg-red-100 transition-colors">
                    <div className="flex-shrink-0 mt-1">{ameaca.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{ameaca.title}</h3>
                      <p className="text-gray-700 mb-2">{ameaca.desc}</p>
                      <p className="text-sm font-medium text-destructive">{ameaca.stats}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campi Envolvidos */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Campi do IFMS na Região</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { campus: 'Aquidauana', desc: 'Localizado na região central do Pantanal', focus: 'Monitoramento de queimadas' },
                  { campus: 'Corumbá', desc: 'Porta de entrada para cooperação internacional', focus: 'Pesquisa transfronteiriça' },
                  { campus: 'Jardim', desc: 'Região de transição Cerrado-Pantanal', focus: 'Biodiversidade e conservação' },
                ].map((campus, idx) => (
                  <div key={idx} className="bg-white border-2 border-primary p-6 rounded-lg hover:shadow-lg transition-shadow">
                    <h3 className="text-lg font-bold text-primary mb-2">{campus.campus}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{campus.desc}</p>
                    <div className="bg-emerald-50 px-3 py-2 rounded text-sm font-medium text-primary">
                      {campus.focus}
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
