# Portfólio Braule

Portfólio profissional bilíngue de **Braule Fernandes**, desenvolvido para apresentar minha trajetória, formação, experiências, competências técnicas e projetos na área de tecnologia.

O projeto foi construído com foco em **desempenho, responsividade, acessibilidade e experiência do usuário**, reunindo uma identidade visual tecnológica com interações sutis, animações e suporte completo aos idiomas português e inglês.

[![Portfolio](https://img.shields.io/badge/Portfolio-Acessar-7C3AED?style=for-the-badge&logo=vercel&logoColor=white)](https://braule-portfolio.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Braule_Fernandes-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/braulefernandes/)
[![GitHub](https://img.shields.io/badge/GitHub-braulefernandes-181717?style=for-the-badge&logo=github)](https://github.com/braulefernandes)

---

## Sobre o projeto

O portfólio apresenta:

- apresentação profissional e objetivos de carreira;
- formação em Ciência da Computação;
- experiência profissional e atuação em tecnologia;
- projetos Full Stack, acadêmicos e de inteligência artificial;
- tecnologias e competências organizadas por área;
- currículo disponível para download;
- contatos profissionais;
- navegação em português e inglês;
- temas claro, escuro e automático;
- minijogo **Dev Runner** integrado ao rodapé.

O conteúdo foi estruturado de forma centralizada e tipada, facilitando futuras atualizações sem a necessidade de alterar diretamente os componentes da interface.

---

## Principais recursos

- Interface moderna, responsiva e acessível;
- navegação por seções com rolagem suave;
- indicação automática da seção ativa no cabeçalho;
- suporte a português e inglês com `next-intl`;
- troca de idioma com feedback visual de carregamento;
- temas claro, escuro e sistema;
- animações com suporte a `prefers-reduced-motion`;
- SEO localizado para português e inglês;
- Open Graph, sitemap, robots e Web App Manifest;
- download direto do currículo;
- links para GitHub, LinkedIn e e-mail;
- Dev Runner com pontuação e recorde salvo no navegador;
- deploy automático pela Vercel após atualizações na branch principal.

---

## Tecnologias

### Frontend

- [Next.js 16](https://nextjs.org/) com App Router;
- [React 19](https://react.dev/);
- [TypeScript](https://www.typescriptlang.org/);
- [Tailwind CSS 4](https://tailwindcss.com/);
- [Motion](https://motion.dev/) para animações.

### Internacionalização e preferências

- [`next-intl`](https://next-intl.dev/) para português e inglês;
- [`next-themes`](https://github.com/pacocoursey/next-themes) para os temas claro, escuro e sistema;
- persistência das preferências no navegador.

### Qualidade e desenvolvimento

- ESLint;
- tipagem centralizada;
- componentes reutilizáveis;
- fontes Geist Sans e Geist Mono via `next/font`;
- build otimizado com Turbopack;
- deploy contínuo pela Vercel.

---

## Pré-requisitos

Antes de executar o projeto, instale:

- Node.js 20.9 ou superior;
- npm;
- Git.

Verifique as versões:

```bash
node --version
npm --version
git --version
```

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/braulefernandes/braule-portfolio.git
```

Acesse a pasta do projeto:

```bash
cd braule-portfolio
```

Instale as dependências:

```bash
npm install
```

---

## Execução local

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

A rota inicial identifica o idioma e redireciona para:

```text
/pt
/en
```

O português é utilizado como idioma padrão.

---

## Scripts disponíveis

```bash
npm run dev
```

Inicia o projeto em ambiente de desenvolvimento.

```bash
npm run lint
```

Executa a análise estática do código.

```bash
npm run typecheck
```

Valida os tipos TypeScript, caso o script esteja configurado no `package.json`.

```bash
npm run build
```

Gera a versão otimizada para produção.

```bash
npm run start
```

Executa localmente a versão de produção após o build.

Antes de enviar alterações ao repositório, recomenda-se executar:

```bash
npm run lint
npm run build
```

---

## Estrutura de pastas

```text
messages/
  en.json                     # textos da interface em inglês
  pt-BR.json                  # textos da interface em português

public/
  brand/                      # identidade visual e recursos da marca
  curriculum/                 # currículo público para download
  icons/                      # ícones estáticos adicionais
  projects/                   # imagens e mídias dos projetos

src/
  app/
    [locale]/                 # layout e página principal por idioma
    globals.css               # estilos globais e variáveis visuais
    icon.svg                  # ícone da aplicação
    manifest.ts               # Web App Manifest
    opengraph-image.tsx       # imagem social gerada pelo Next.js
    robots.ts                 # regras para rastreadores
    sitemap.ts                # sitemap com rotas localizadas

  components/
    layout/                   # header, footer, containers e navegação
    sections/                 # hero, sobre, projetos, tecnologias etc.
    ui/                       # componentes reutilizáveis
    game/                     # componentes do Dev Runner

  data/                       # conteúdo profissional tipado e bilíngue
  i18n/                       # roteamento e carregamento das traduções
  lib/                        # configurações públicas e utilitários
  providers/                  # tema e preferências de movimento
  types/                      # contratos TypeScript
  proxy.ts                    # detecção e persistência do idioma
```

A estrutura pode sofrer pequenas alterações conforme a evolução do projeto.

---

## Internacionalização

Os conteúdos profissionais bilíngues ficam centralizados em `src/data`, utilizando campos em português e inglês.

Os textos da interface, acessibilidade e estados interativos estão em:

```text
messages/pt-BR.json
messages/en.json
```

Para adicionar um novo idioma:

1. atualize `src/i18n/routing.ts`;
2. configure o catálogo em `src/i18n/request.ts`;
3. crie o arquivo de traduções correspondente;
4. revise as rotas, metadados e labels de acessibilidade.

Os identificadores das seções permanecem iguais nos dois idiomas para preservar os links de navegação.

---

## Projetos apresentados

O portfólio apresenta atualmente:

- **GoTrip.AI** — plataforma web para planejamento e gerenciamento de viagens;
- **TaskFlow** — sistema Full Stack para gerenciamento de tarefas e equipes;
- **Busca em Redes P2P** — projeto acadêmico para comparação de algoritmos distribuídos;
- **Detecção de Cones com YOLOv8** — projeto de visão computacional para identificação de cones de trânsito.

Os projetos são cadastrados em:

```text
src/data/projects.ts
```

A estrutura é validada pelos contratos definidos em:

```text
src/types/portfolio.ts
```

Cada projeto pode conter:

- nome;
- categoria;
- descrição;
- problema que resolve;
- tecnologias;
- status;
- repositório principal;
- repositórios separados de frontend e backend.

---

## Atualização de conteúdo

Grande parte das informações do portfólio pode ser atualizada diretamente nos arquivos da pasta:

```text
src/data/
```

Isso inclui:

- informações pessoais;
- projetos;
- tecnologias;
- experiências;
- contatos;
- formação;
- textos profissionais.

Os componentes consomem esses dados de forma tipada, reduzindo duplicações e facilitando a manutenção.

---

## Currículo

O currículo deve ser disponibilizado em:

```text
public/curriculum/braule-fernandes-curriculo.pdf
```

O botão de download verifica a existência do arquivo público.

Caso o currículo não esteja disponível, a interface apresenta um estado desabilitado, evitando links quebrados.

Certificados não são publicados diretamente no portfólio. Eles podem ser disponibilizados mediante solicitação.

---

## Dev Runner

O **Dev Runner** é um minijogo simples integrado ao rodapé do portfólio.

Principais características:

- execução diretamente no navegador;
- personagem com movimento automático;
- bugs como obstáculos;
- controle por teclado, clique ou toque;
- pontuação progressiva;
- recorde salvo em `localStorage`;
- suporte a português e inglês;
- funcionamento sem backend;
- respeito às preferências de movimento reduzido.

O jogo foi desenvolvido com React, TypeScript e Canvas, sem bibliotecas externas de jogos.

---

## SEO e metadados

O projeto possui:

- metadados localizados;
- títulos e descrições para português e inglês;
- Open Graph;
- Twitter Cards;
- sitemap;
- robots;
- Web App Manifest;
- canonical dinâmico;
- imagem social gerada pelo Next.js.

## Autor

**Braule Fernandes**

Desenvolvedor Full Stack em formação e estudante de Ciência da Computação.

- GitHub: [github.com/braulefernandes](https://github.com/braulefernandes)
- LinkedIn: [linkedin.com/in/braulefernandes](https://www.linkedin.com/in/braulefernandes/)
- E-mail: [braulefernandesdev@gmail.com](mailto:braulefernandesdev@gmail.com)
- Localização: Fortaleza, Ceará, Brasil

---

Desenvolvido por **Braule Fernandes**.
