# Zoho - Landing Page

Landing page responsiva desenvolvida para a entrevista técnica da Zoho. O projeto foi implementado com HTML5, CSS3 e JavaScript, seguindo as especificações de design fornecidas.

## Características

- Design responsivo de 320px até desktop
- Fonte customizada Zoho Puvi
- Sprite de ícones para otimização de imagens
- Animações com CSS e JavaScript
- Abas interativas com conteúdo dinâmico
- Sem uso de frameworks CSS ou plugins JS

## Estrutura do Projeto

```
zoho/
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # JavaScript
├── images/             # Assets
│   ├── Group 24685.svg
│   ├── Group.png
│   ├── analytics-512.png
│   ├── Redshift-Logo.svg.png
│   ├── Layer1.png
│   ├── Layer2.png
│   ├── graphic.png
│   └── sprite.png
├── font.txt            # Configuração da fonte
├── guia_tecnica.md     # Especificações técnicas
└── README.md
```

## Tecnologias

- HTML5
- CSS3
- JavaScript com jQuery 3.6.0

## Como Rodar

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd zoho
   ```

2. Abra `index.html` no navegador ou rode um servidor local:
   ```bash
   # Python
   python3 -m http.server 8000

   # Node.js
   npx http-server
   ```

3. Acesse `http://localhost:8000`

## Notas

- Responsividade: Mobile (320px), Tablet (768px), Desktop (1170px)
- Conteúdo centralizado com max-width de 1170px
- Todas as imagens estão otimizadas
- Sem dependências externas além do jQuery via CDN
