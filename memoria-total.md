# Memória Total — Payoff Marketing / Pedro Macedo
> Criado em 2026-06-25 para migração de perfil Mac

---

## 1. Perfil do utilizador

**Nome:** Pedro Macedo  
**Email:** pedro.macedo@payoffmarketing.pt  
**Empresa:** Payoff Marketing — agência PPC lead generation, Portugal  
**Função:** Media buyer — paid traffic (Google Ads, Meta Ads)

**Preferências de comunicação com Claude:**
- Respostas sempre em PT-pt
- Direto e conciso, sem floreados
- Recomendações únicas e opiniões claras (não dar 3 opções)
- Sem bullet points excessivos
- Sem linguagem corporativa
- Conhece bem métricas: CPL, ROAS, Quality Score, etc.

---

## 2. Projeto — Website Payoff Marketing

**Repositório local:** `/Users/pedromacedo/Library/Mobile Documents/com~apple~CloudDocs/CLAUDE/Elo/Elo`  
**URL produção:** `payoffmarketing.pt`  
**URL Netlify:** `payoffmarketing-cw.netlify.app`  
**Deploy:** automático via Netlify após push para `main`

**Pasta no Cowork (workspace):** pasta "Elo" na iCloud drive

### Estrutura de ficheiros principal

```
/
├── blog/
│   ├── index.html              ← lista de artigos (actualizar sempre)
│   ├── img/hero-lp.webp        ← imagem usada em todos os artigos
│   ├── [slug].html             ← cada artigo
├── lp/                         ← landing pages
│   ├── index.html
│   ├── lp-[serviço]-[n].html
├── css/style.css               ← CSS global (não modificar)
├── img/logo.webp
├── img/Partner-RGB.webp        ← badge Google Partner (footer)
├── sitemap.xml                 ← actualizar sempre
├── llms.txt                    ← actualizar sempre
├── deploy.sh
├── BLOG-INSTRUCTIONS.md        ← instruções detalhadas de blog
└── (páginas principais: index, google-ads, meta-ads, auditoria, etc.)
```

### Deploy

```bash
bash "/Users/pedromacedo/Library/Mobile Documents/com~apple~CloudDocs/CLAUDE/Elo/Elo/deploy.sh"
```

Ou manualmente:
```bash
cd "/Users/pedromacedo/Library/Mobile Documents/com~apple~CloudDocs/CLAUDE/Elo/Elo"
git add .
git commit -m "update $(date '+%Y-%m-%d %H:%M')"
git push
```

**Repositório GitHub:**
- URL: `https://github.com/pmacedo64/payoffmarketing-site.git`
- Utilizador: `pmacedo64`
- Token: `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`
- Remote completo: `https://pmacedo64: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@github.com/pmacedo64/payoffmarketing-site.git`

Para configurar no novo perfil:
```bash
cd "/Users/[novo-utilizador]/Library/Mobile Documents/com~apple~CloudDocs/CLAUDE/Elo/Elo"
git remote set-url origin https://pmacedo64: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@github.com/pmacedo64/payoffmarketing-site.git
```

**Problema com lock files:** se o push falhar com `cannot lock ref 'HEAD'`:
```bash
cd "/Users/pedromacedo/Library/Mobile Documents/com~apple~CloudDocs/CLAUDE/Elo/Elo"
rm -f .git/HEAD.lock .git/index.lock .git/objects/maintenance.lock
git push
```

---

## 3. Convenção de Landing Pages

- Pasta: `lp/` dentro do workspace
- Naming: `lp-[tipo-de-serviço]-[número].html` (sem "v", só número)
- Exemplos criados:
  - `lp-landingpages-1.html` — abordagem performance/conversão
  - `lp-landingpages-2.html` — abordagem Alex Hormozi (Grand Slam Offer)
  - `lp-googleads-1.html`
  - `lp-metaads-1.html`
  - `lp-analise-concorrencia-1.html`
  - `lp-fraudblocker-1.html`
  - `lp-whitelabel-1.html`

---

## 4. Instruções de Blog (CRÍTICO — seguir à risca)

Ficheiro de referência completo: `BLOG-INSTRUCTIONS.md` no workspace.

### 4.1 Ficheiro e URL

- Formato: `blog/[slug].html`
- Slug kebab-case, sem acentos, com keyword principal

### 4.2 `<head>` obrigatório

1. Consent Mode v2 ANTES do GTM
2. GTM (id: `GTM-WSST`)
3. Meta tags: charset, viewport, title, description, keywords, robots, canonical, Open Graph completo, Twitter Card
4. JSON-LD com `@graph`: `Article` + `BreadcrumbList`
5. `<link rel="stylesheet" href="../css/style.css" />`

### 4.3 Nav — classes CRÍTICAS

Usar SEMPRE `navbar__*`. NUNCA usar `nav-wrap`, `nav__menu`, `nav__logo`, `nav__toggle`.

```html
<header>
  <nav class="navbar" aria-label="Navegação principal">
    <div class="container navbar__inner">
      <a href="../index.html" class="navbar__logo"><img src="../img/logo.webp" alt="Payoff Marketing" /></a>
      <button class="navbar__toggle" ...>...</button>
      <ul class="navbar__menu" id="main-menu" role="list">
        <li><a href="../index.html">Home</a></li>
        <li class="navbar__dropdown">
          <button class="navbar__dropdown-toggle" ...>Serviços <span class="chevron">▾</span></button>
          <ul class="navbar__dropdown-menu" role="list">
            <li><a href="../servicos.html">Todos os Serviços</a></li>
            <li><a href="../google-ads.html">Google Ads</a></li>
            <li><a href="../meta-ads.html">Meta Ads</a></li>
            <li><a href="../auditoria.html">Auditoria de Campanhas</a></li>
            <li><a href="../estrategia.html">Estratégia de Tráfego</a></li>
            <li><a href="../landing-pages.html">Landing Pages</a></li>
            <li><a href="../relatorios.html">Relatórios &amp; Dashboard</a></li>
          </ul>
        </li>
        <li><a href="index.html" class="active" aria-current="page">Blog</a></li>
        <li><a href="../calculadora.html">Calculadora ROI</a></li>
        <li><a href="../contatos.html" class="navbar__cta">Falar Connosco</a></li>
      </ul>
      <div class="lang-switch" aria-label="Language switcher">
        <span class="lang-switch__btn" lang="en">EN</span>
        <span class="lang-switch__sep">|</span>
        <span class="lang-switch__btn lang-switch__btn--active" aria-current="true">PT</span>
      </div>
    </div>
  </nav>
</header>
```

### 4.4 CSS personalizado por artigo

Cada artigo tem bloco `<style>` próprio. Obrigatório:
- `.article-hero h1` com `font-size: clamp(1.5rem, 3.4vw, 2.35rem)`
- `.article-body h2` com `font-size: clamp(1.35rem, 3vw, 1.75rem)`
- `.article-layout` grid `1fr 280px`, colapsa para `1fr` abaixo de 900px
- `.article-sidebar { position: sticky; top: 5rem; }`

### 4.5 Hero do artigo

```html
<section class="article-hero">
  <div class="container">
    <nav class="breadcrumb">Home › Blog › [Título curto]</nav>
    <div class="article-hero__meta">
      <span class="article-tag article-tag--[plataforma]">[Plataforma]</span>
      <span class="article-hero__date">[D Mon AAAA]</span>
      <span class="article-hero__read">[N] min de leitura</span>
    </div>
    <h1>[Título]</h1>
    <p class="article-hero__intro">[Lead]</p>
    <div class="article-hero__img-wrap">
      <img src="img/hero-lp.webp" ... />
    </div>
  </div>
</section>
```

Tags disponíveis: `article-tag--google` (#4285f4), `article-tag--meta` (#1877f2), `article-tag--linkedin` (#0a66c2), `article-tag--ai` (#a855f7)

### 4.6 Footer — CRÍTICO

NUNCA usar `footer__inner`, `footer__links` com links simples, ou SVG inline no logo.  
Footer tem 3 colunas: brand (logo + texto + Google Partner badge) + serviços + contacto.

**Contactos do footer:**
- Email: ola@payoffmarketing.pt
- Tel: +351 914 541 365
- Morada: Rua de Lisboa 1, 2765-240 Estoril

Google Partner badge:
```html
<a href="https://www.google.com/partners/agency?id=6240939795" target="_blank" rel="noopener noreferrer">
  <img src="../img/Partner-RGB.webp" alt="Google Partner — Payoff Marketing" width="120" height="120" loading="lazy" />
</a>
```

### 4.7 Após criar artigo — actualizar SEMPRE estes 3 ficheiros

**1. `blog/index.html`** — adicionar JSON-LD BlogPosting + card na grelha (artigos mais recentes primeiro)

**2. `sitemap.xml`** — adicionar `<url>` com loc, lastmod, changefreq monthly, priority 0.8

**3. `llms.txt`** — adicionar linha na secção `## Blog — Tráfego Pago`

### 4.8 Related articles

Cada artigo tem 3 related cards. Ao criar artigo novo:
1. Escolher 3 artigos existentes tematicamente próximos
2. Actualizar 1-2 artigos existentes para apontarem ao novo

**Artigos existentes por plataforma:**

- **Google Ads:** quality-score, performance-max-2026, como-reduzir-cpa, quanto-investir-google-ads, tipos-correspondencia-palavras-chave, como-escrever-anuncios-pesquisa-google-ads-rsas, google-ads-pesquisa-ia-chatgpt
- **Meta Ads:** segmentacao-audiencias-meta-ads, quanto-investir-meta-ads, advantage-plus-shopping-vs-campanhas-manuais-meta-ads
- **LinkedIn Ads:** segmentacao-linkedin-ads, copy-anuncios-linkedin-ads, linkedin-lead-gen-forms-vs-landing-page, quanto-investir-linkedin-ads
- **Transversal:** landing-pages-campanhas-trafego-pago, google-ads-vs-meta-ads-qual-escolher-2026, como-medir-conversoes-trafego-pago

### 4.9 Checklist por artigo

- [ ] `blog/[slug].html` criado
- [ ] Nav com classes `navbar__*`
- [ ] H1 com `clamp(1.5rem, 3.4vw, 2.35rem)`
- [ ] Footer completo com 3 colunas + Google Partner badge
- [ ] Cookie consent com painel `pm-consent`
- [ ] 3 related cards
- [ ] `blog/index.html` actualizado (JSON-LD + card)
- [ ] `sitemap.xml` actualizado
- [ ] `llms.txt` actualizado
- [ ] 1-2 artigos existentes actualizados para apontar ao novo
- [ ] Deploy feito

---

## 5. Configuração do Cowork (novo perfil)

O projeto está no iCloud Drive. Para o Cowork aceder, seleccionar a pasta:  
`~/Library/Mobile Documents/com~apple~CloudDocs/CLAUDE/Elo/Elo`

**Plugins instalados (reinstalar no novo perfil):**
- Adspirer (Google Ads + Meta Ads)
- Marketing plugin (brand-review, campaign-plan, content-creation, etc.)
- Sales plugin
- 15-cowork-skills (budget-dashboard, email-drafter, etc.)

**MCPs conectados:**
- Brilliant Directories (osteopatas site)
- Google Ads MCP (`eda41615`)
- Meta Ads MCP (`ce80206e`)
- AdKit (`37366e14`)
- Google Drive (`68cfdb35`)

---

## 6. Memória de sistema (instruções para o Claude)

Estas instruções devem ser carregadas no CLAUDE.md ou memory do novo perfil:

```
Sou Pedro Macedo, media buyer na Payoff Marketing (agência PPC, PT).
- Responde sempre em PT-pt
- Sê directo e conciso
- Dá uma recomendação clara, não 3 opções
- Não uses linguagem corporativa
- Landing pages vão em lp/ com naming lp-[serviço]-[número].html
- Blog: seguir BLOG-INSTRUCTIONS.md no workspace
- Deploy: bash deploy.sh no workspace
```
