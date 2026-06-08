# Blog — Notas de Template para Artigos Futuros

Ficheiro de referência interna. Não publicar.
Lê isto antes de criar qualquer post novo no blog do Payoff Marketing.

## Estrutura base

Cada artigo segue o template de `landing-pages-campanhas-trafego-pago.html` /
`google-ads-vs-meta-ads-qual-escolher-2026.html`:

- GTM Consent Mode v2 + GTM-WSST
- SEO completo: title, description, keywords, canonical, OG, Twitter Card
- Structured Data: Article + BreadcrumbList em JSON-LD
- Hero com breadcrumb, meta tags (categoria, data, tempo de leitura), H1 e intro
- Body em prose (max ~2 000 palavras) com sidebar sticky em desktop
- TOC sticky + Service CTA cards na sidebar
- Author box + Related articles + Footer standard

## Imagem placeholder

Enquanto não houver imagens reais, usar sempre:
`img/hero-lp.webp`

Marcar TODAS as imagens placeholder com comentário HTML
`<!-- STOCK IMAGE: Substituir... -->` para serem fáceis de encontrar
e trocar mais tarde.

Dimensões padrão:
- Hero: 1200×480
- Inline: 800×450 ou 800×500
- Related card: 400×160
- Avatar autor: 56×56

## Updates obrigatórios depois de criar um post

1. `blog/index.html`:
   - Substituir card "Em breve" pelo card ativo (com `<a>` em vez de `<div class="card--soon">`)
   - Adicionar entry ao array `blogPost` do schema JSON-LD
2. `sitemap.xml`:
   - Adicionar `<url>` na secção `<!-- ── Blog ── -->`, priority 0.8
3. Posts anteriores:
   - Atualizar related cards que apontavam para `index.html` (em breve) para o novo URL

## ⚠ SIDEBAR MOBILE — Regra obrigatória

A sidebar tem `position: sticky` no desktop. Em mobile deve:
1. Colapsar para coluna única (`grid-template-columns: 1fr`)
2. Aparecer **abaixo** do artigo (comportamento natural do grid — sidebar é o segundo filho)
3. **NÃO usar `order: -1`** — isso força a sidebar para cima do conteúdo, tapando o artigo

CSS correto no bloco mobile:

```css
@media (max-width: 900px) {
  .article-layout { grid-template-columns: 1fr; }
  .article-sidebar {
    /* sidebar aparece abaixo do artigo em mobile — não usar order: -1 */
    position: static;
    top: auto;
  }
}
```

**Erro conhecido:** `order: -1` foi usado por engano em versões anteriores e fazia a
sidebar aparecer em cima do artigo no mobile. Nunca usar `order: -1` aqui.

## Tom editorial

- PT-pt, sem jargão corporativo
- Resposta direta primeiro (idealmente caixa "Veredito em 30 segundos")
- Números reais do mercado português (não benchmarks americanos)
- Exemplos específicos por setor, não hipotéticos
- Opinionado, sem hedging
- CTA inline a meio + CTA final para auditoria/contactos
- Links internos para páginas de serviço relevantes (google-ads, meta-ads, landing-pages, auditoria)

## Categorias / tags em uso

Google Ads · Meta Ads · Conversão · Estratégia · Landing Pages · Otimização · Budget

## Naming convention dos ficheiros

`blog/<slug-em-kebab-case>.html` — slug igual ao usado no canonical, OG e sitemap.
Sem extensão no canonical (`/blog/slug`), com `.html` no filename real.
