import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ObjetivoPage from './pages/ObjetivoPage';
import RelatorioPage from './pages/RelatorioPage';
import MapaPage from './pages/MapaPage';
import MissaoPage from './pages/MissaoPage';
import EquipePage from './pages/EquipePage';
import ParceirosPage from './pages/ParceirosPage';


function App() {
  const [activeTab, setActiveTab] = useState('home');
  useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [activeTab]);
  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'objetivo':
        return <ObjetivoPage />;
      case 'relatorio':
        return <RelatorioPage />;
      case 'mapa':
        return <MapaPage />;
      case 'missao':
        return <MissaoPage />;
      case 'equipe':
        return <EquipePage />;
      case 'parceiros':
        return <ParceirosPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <div className="min-h-screen bg-white">
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          <main>
            {renderPage()}
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Projeto Pantanal</h3>
                  <p className="text-gray-400 text-sm">
                    Monitoramento integrado de queimadas e saúde pública na região do Pantanal
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Navegação</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition">Início</button></li>
                    <li><button onClick={() => setActiveTab('objetivo')} className="hover:text-white transition">Objetivo</button></li>
                    <li><button onClick={() => setActiveTab('relatorio')} className="hover:text-white transition">Relatório</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Informações</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li><button onClick={() => setActiveTab('mapa')} className="hover:text-white transition">Mapa</button></li>
                    <li><button onClick={() => setActiveTab('equipe')} className="hover:text-white transition">Equipe</button></li>
                    <li><button onClick={() => setActiveTab('parceiros')} className="hover:text-white transition">Parceiros</button></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-4">Contato</h4>
                  <p className="text-sm text-gray-400">
                    Instituto Federal de Mato Grosso do Sul<br/>
                    Rua Jornalista Belizário Lima, 236<br/>
                    Campo Grande - MS
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
                <p>&copy; 2026 Projeto Pantanal e o Desenvolvimento Regional. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
