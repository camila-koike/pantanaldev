# Brainstorming de Design - Projeto Pantanal e o Desenvolvimento Regional

## Contexto do Projeto
O Projeto Pantanal é uma iniciativa interdisciplinar focada em monitoramento de queimadas, impactos na saúde pública e desenvolvimento regional. O site deve comunicar seriedade científica, urgência ambiental e colaboração internacional, enquanto mantém acessibilidade e clareza.

---

<response>
<probability>0.08</probability>
<text>

### Abordagem 1: Minimalismo Científico com Acentos Naturais

**Design Movement**: Bauhaus contemporâneo com influência de design científico/editorial

**Core Principles**:
1. Clareza hierárquica extrema - informação estruturada em níveis visuais distintos
2. Tipografia como protagonista - fontes grandes e respiradas criam estrutura
3. Cores restritas mas intencionais - terra, água, fogo como narrativa visual
4. Espaço negativo agressivo - muito branco/ar para respiração visual

**Color Philosophy**:
- Fundo: Branco puro (neutralidade científica)
- Primário: Verde profundo (Pantanal, vida, esperança) - #1B4D3E
- Secundário: Laranja queimado (urgência, fogo) - #C85A2A
- Terciário: Azul água (ciclo hidrológico) - #2E5F8A
- Acentos: Cinza escuro para texto, tons de terra para elementos

**Layout Paradigm**:
- Grid assimétrico 12 colunas com quebras estratégicas
- Seções com altura variável (não uniformes)
- Imagens grandes em bloco único, nunca em grid
- Tipografia em coluna única com margens generosas (max-width: 65 caracteres)

**Signature Elements**:
1. Linhas horizontais de espessura variável que separam conceitos
2. Números/dados em grande escala como elementos visuais (ex: "150.000 km²" em 48px)
3. Citações científicas em itálico com barra lateral colorida

**Interaction Philosophy**:
- Transições suaves de opacidade (sem escala/rotação)
- Hover: mudança de cor primária para secundária
- Scroll revela conteúdo com fade-in gradual
- Abas com underline animado (não background)

**Animation**:
- Fade-in ao scroll (duração: 600ms, delay escalonado)
- Número contador para estatísticas (1000ms)
- Underline de aba desliza suavemente (300ms)
- Nenhuma animação de entrada na página (carregamento rápido)

**Typography System**:
- Display: Playfair Display 700 (títulos principais, 48-64px)
- Heading: Lora 600 (seções, 28-36px)
- Body: Inter 400 (conteúdo, 16px)
- Accent: IBM Plex Mono 500 (dados, números, 14px)
- Line-height: 1.6 para body, 1.2 para headings

</text>
</response>

<response>
<probability>0.07</probability>
<text>

### Abordagem 2: Modernismo Dinâmico com Gradientes Naturais

**Design Movement**: Design contemporâneo + Data visualization + Movimento suave

**Core Principles**:
1. Gradientes como linguagem visual - transições suaves entre cores naturais
2. Movimento sutil mas constante - elementos respiram
3. Dados visualizados como arte - gráficos integrados ao design
4. Assimetria controlada - nada é perfeitamente alinhado

**Color Philosophy**:
- Gradiente fundo: De verde floresta (#0D5E3E) a azul céu (#1E3A8A)
- Primário: Verde vibrante (vida, monitoramento) - #10B981
- Secundário: Vermelho alerta (queimadas) - #DC2626
- Terciário: Âmbar (transição, dados) - #F59E0B
- Sobreposições: Glassmorphism com backdrop blur

**Layout Paradigm**:
- Seções em diagonal (clip-path: polygon)
- Cards flutuantes com sombra profunda
- Imagens em perspectiva 3D (transform: perspective)
- Conteúdo em colunas variáveis (não grid uniforme)

**Signature Elements**:
1. Formas geométricas abstratas (círculos, triângulos) que representam dados
2. Ícones customizados com estilo flat-modern
3. Cards com borda gradiente (não sólida)

**Interaction Philosophy**:
- Hover: Elevação (shadow aumenta, transform: translateY)
- Click: Ripple effect suave
- Scroll: Parallax em imagens de fundo
- Abas: Fundo com gradiente animado

**Animation**:
- Entrada de cards: scale + fade (500ms, staggered)
- Números contadores com easing ease-out (1200ms)
- Parallax no scroll (velocidade variável por profundidade)
- Pulse suave em elementos de alerta (infinito, 2s)

**Typography System**:
- Display: Sora 700 (títulos, 52-72px, moderno)
- Heading: Sora 600 (seções, 32-40px)
- Body: Sora 400 (conteúdo, 16px, legível)
- Accent: JetBrains Mono 500 (dados, 14px)
- Line-height: 1.7 para body (leitura confortável)

</text>
</response>

<response>
<probability>0.06</probability>
<text>

### Abordagem 3: Realismo Ambiental com Fotografia Imersiva

**Design Movement**: Fotojornalismo + Design editorial + Storytelling visual

**Core Principles**:
1. Imagens grandes e impactantes como protagonistas
2. Tipografia sobreposta em imagens (contrast-aware)
3. Narrativa visual que conta a história do Pantanal
4. Cores extraídas das imagens (paleta dinâmica)

**Color Philosophy**:
- Paleta extraída de fotos do Pantanal: verdes naturais, azuis de água, tons de terra
- Primário: Verde do Pantanal (variável por imagem)
- Secundário: Tons quentes (fogo, urgência)
- Terciário: Azul água
- Overlay: Gradiente semi-transparente (preto 40% a transparente)

**Layout Paradigm**:
- Full-width hero images (100vh sections)
- Texto em overlay com shadow para legibilidade
- Seções intercaladas: imagem + conteúdo
- Imagens bleed (sem margem)

**Signature Elements**:
1. Imagens full-screen com tipografia em overlay
2. Citações visuais (texto grande sobre imagem)
3. Transições suaves entre seções com imagens

**Interaction Philosophy**:
- Hover em cards: Zoom suave na imagem (1.05x)
- Scroll: Imagens se movem em parallax
- Abas: Mudança de cor baseada em imagem de fundo
- Transições: Fade entre seções

**Animation**:
- Zoom lento em imagens ao carregar (duration: 800ms)
- Parallax ao scroll (velocidade -0.5)
- Fade-in de texto sobre imagem (600ms)
- Transição suave entre seções (300ms)

**Typography System**:
- Display: Merriweather 700 (títulos sobre imagens, 48-64px, elegante)
- Heading: Merriweather 600 (seções, 32-40px)
- Body: Lato 400 (conteúdo, 16px, legível sobre imagens)
- Accent: IBM Plex Mono 500 (dados, 14px)
- Line-height: 1.8 para body (leitura em overlay)

</text>
</response>

---

## Decisão Final

**Escolhida: Abordagem 2 - Modernismo Dinâmico com Gradientes Naturais**

Esta abordagem equilibra:
- **Seriedade científica** com **dinamismo visual** (não é árido, mas é credível)
- **Urgência ambiental** através de cores vibrantes e movimento
- **Acessibilidade** mantendo tipografia clara e hierarquia forte
- **Modernidade** sem parecer superficial
- **Storytelling de dados** integrado ao design

A paleta de cores (verde vibrante + vermelho alerta + âmbar) comunica a urgência do projeto enquanto mantém esperança. Os gradientes naturais conectam o design ao Pantanal. O movimento sutil (parallax, elevação de cards) mantém o engajamento sem ser distrativo.

