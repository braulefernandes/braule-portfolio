# Braule Portfolio

Portfólio profissional bilíngue de Braule Fernandes. Apresenta sua formação em Ciência da Computação, tecnologias, experiências profissionais e acadêmicas, projetos e canais de contato.

## Tecnologias

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- `next-intl` para português e inglês
- `next-themes` para temas claro, escuro e sistema
- Motion para animações e suporte a movimento reduzido
- Montserrat via `next/font`
- ESLint

## Instalação

Requer Node.js 20.9 ou superior e npm.

```bash
npm install
```

## Execução

```bash
npm run dev
```

Acesse `http://localhost:3000`. A rota inicial negocia o idioma e direciona para `/pt` ou `/en`, usando português como fallback.

## Validação e build

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Estrutura de pastas

```text
messages/                   # catálogos pt-BR e en
public/
  brand/                    # arquivos da identidade visual
  curriculum/               # currículo público
  icons/                    # ícones estáticos adicionais
  projects/                 # mídias futuras dos projetos
src/
  app/
    [locale]/               # layout, página e SEO por idioma
    manifest.ts             # Web App Manifest
    opengraph-image.tsx     # imagem social gerada pelo Next.js
    robots.ts               # diretivas para rastreadores
    sitemap.ts              # URLs localizadas
  components/               # layout, seções e UI reutilizável
  data/                     # todo o conteúdo profissional tipado e bilíngue
  i18n/                     # roteamento e carregamento das traduções
  lib/                      # configuração pública do site e currículo
  providers/                # tema e preferências de movimento
  types/portfolio.ts        # contratos TypeScript centralizados
  proxy.ts                  # detecção e persistência do idioma
```

## Internacionalização

Os conteúdos profissionais bilíngues ficam em `src/data`, usando campos `pt` e `en`. Rótulos de interface e acessibilidade ficam em `messages/pt-BR.json` e `messages/en.json`.

Para adicionar outro idioma, atualize `src/i18n/routing.ts`, associe o catálogo em `src/i18n/request.ts` e crie o JSON correspondente.

## Temas

O site oferece modos claro, escuro e sistema. A preferência é persistida no navegador por `next-themes`; cores são definidas por variáveis semânticas em `src/app/globals.css`.

## Conteúdo dos projetos

Os projetos são cadastrados em `src/data/projects.ts` e validados por `src/types/portfolio.ts`. Títulos, traduções, tecnologias, status e repositórios permanecem juntos no cadastro. O guia completo está em `docs/ATUALIZACAO_CONTEUDO.md`.

## Currículo

Adicione o arquivo real exatamente em:

```text
public/curriculum/braule-fernandes-curriculo.pdf
```

Enquanto o arquivo não existir, a interface mostra um controle desabilitado com indicação de disponibilidade futura. Não adicione o ZIP de certificados em `public`.

## Deploy na Vercel

1. Envie o repositório para um provedor Git compatível.
2. Na Vercel, selecione **Add New → Project** e importe o repositório.
3. Confirme o framework **Next.js** e o gerenciador npm.
4. Mantenha `npm run build` como Build Command e `.next` como saída detectada automaticamente.
5. Publique o projeto.

A aplicação usa `VERCEL_PROJECT_PRODUCTION_URL` ou `VERCEL_URL`, fornecidas pela Vercel, para canonical, sitemap, robots e Open Graph. Se quiser fixar uma URL específica, configure `NEXT_PUBLIC_SITE_URL` com a URL completa do deployment de produção e faça um novo deploy.

## Integração futura com Supabase

Não existe integração com Supabase nesta versão. Uma evolução futura poderá mover projetos, experiências e outros conteúdos para o banco, preservando os tipos e componentes atuais. Chaves privadas deverão permanecer apenas em variáveis de ambiente do servidor; nenhuma credencial deve ser enviada ao repositório.
