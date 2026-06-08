import { ArrowRight, Flame, Heart, Users, Globe, MapPin } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663605723416/bNzgUpS4pUsi564K8QNxBy/pantanal-hero-JPDJGYHE7rCfFfFoGf55ci.webp)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-white text-center md:text-left">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Pantanal e o Desenvolvimento Regional TESTE CI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
              Monitoramento integrado de queimadas, saúde pública e desenvolvimento sustentável
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                Saiba Mais
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 backdrop-blur-sm border border-white/30">
                Documentos
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="text-white text-center">
            <p className="text-sm mb-2">Explore</p>
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gradient-to-r from-emerald-50 to-cyan-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">150-210</div>
              <p className="text-gray-700 font-medium">mil km² de Pantanal</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.700+</div>
              <p className="text-gray-700 font-medium">espécies de plantas e animais</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1.5M</div>
              <p className="text-gray-700 font-medium">pessoas na região</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3</div>
              <p className="text-gray-700 font-medium">campi do IFMS envolvidos</p>
            </div>
          </div>
        </div>
      </section>


      {/* Key Initiatives */}
      <section className="py-16 md:py-24 bg-white">
        {/* Overview */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">O Pantanal</h2>
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-8 rounded-xl border-l-4 border-primary">
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              O Pantanal é a maior área úmida tropical continental do planeta, abrangendo cerca de 150 a 210 mil km² na América do Sul, com aproximadamente 75% dessa extensão no Brasil, principalmente nos estados de Mato Grosso e Mato Grosso do Sul.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Este bioma possui alta biodiversidade, abrigando milhares de espécies de plantas, aves, peixes e mamíferos, além de desempenhar papel crucial nos ciclos hidrológicos e na regulação climática regional e global.
            </p>
          </div>
        </div>
<br></br>
               <br></br>
        {/* Localização */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">Localização Geográfica</h2>
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

            
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
            Eixos Estratégicos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-xl card-hover border border-emerald-200">
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                <Flame className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Monitoramento</h3>
              <p className="text-gray-700">Sistema integrado de monitoramento saúde-fumaça com dados ambientais e epidemiológicos</p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-8 rounded-xl card-hover border border-cyan-200">
              <div className="w-14 h-14 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Saúde Pública</h3>
              <p className="text-gray-700">Análise de impactos das queimadas na saúde respiratória e bem-estar comunitário</p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl card-hover border border-amber-200">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Comunidade</h3>
              <p className="text-gray-700">Capacitação e engajamento de comunidades locais em monitoramento ambiental</p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl card-hover border border-red-200">
              <div className="w-14 h-14 bg-destructive rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cooperação</h3>
              <p className="text-gray-700">Colaboração internacional em pesquisa e políticas públicas transfronteiriças</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="gradient-primary py-16 md:py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Juntos pela Sustentabilidade do Pantanal
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Conheça mais sobre nossos objetivos, metodologia e equipe de especialistas
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
            Explorar Projeto
          </button>
        </div>
      </section>
    </div>
  );
}
