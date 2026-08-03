# Atualização de conteúdo

O conteúdo profissional do portfólio é editado diretamente em `src/data`. Os componentes apenas apresentam esses dados e não precisam ser alterados quando um projeto, experiência ou tecnologia é atualizado.

## Onde editar cada informação

| Conteúdo | Arquivo |
| --- | --- |
| Nome, apresentação, sobre, localização, contatos e SEO | `src/data/personal-info.ts` |
| Formação acadêmica | `src/data/education.ts` |
| Projetos e repositórios | `src/data/projects.ts` |
| Experiências profissionais e acadêmicas | `src/data/experiences.ts` |
| Tecnologias e categorias | `src/data/skills.ts` |
| Montagem dos links sociais | `src/data/social-links.ts` |
| Rótulos e textos da interface | `messages/pt-BR.json` e `messages/en.json` |

Os tipos estão centralizados em `src/types/portfolio.ts`. O TypeScript valida status, formatos de URL, campos bilíngues, categorias e elementos visuais.

A assinatura tecnológica também é alterada em um único lugar, em `src/data/personal-info.ts`:

```ts
visualSignature: "BrauleFernandes",
compactSignature: "BF",
```

`visualSignature` gera visualmente `<BrauleFernandes />` no Header, Hero, Footer e compartilhamento social. `compactSignature` é reservada para ícones muito pequenos. Informe apenas o texto interno, sem digitar `<`, `/` ou `>`.

## Como adicionar um projeto

Adicione um objeto ao array `projects` em `src/data/projects.ts`:

```ts
{
  id: "meu-projeto",
  title: "Meu Projeto",
  status: "WIP",
  category: {
    pt: "Full Stack",
    en: "Full Stack",
  },
  description: {
    pt: "Descrição profissional em português.",
    en: "Professional description in English.",
  },
  problem: {
    pt: "Problema que o projeto resolve.",
    en: "The problem addressed by the project.",
  },
  technologies: ["Next.js", "TypeScript"],
  repositories: [
    { label: "GitHub", url: "https://github.com/usuario/repositorio" },
  ],
  visual: "tasks",
},
```

O `id` deve ser único. As opções visuais atuais são `route`, `tasks`, `network` e `detection`. Para um visual completamente novo, será necessário implementar seu desenho no componente visual.

## Como alterar o status

No projeto correspondente, use somente:

```ts
status: "WIP"  // Em desenvolvimento / In progress
status: "DONE" // Concluído / Completed
```

Qualquer outro valor gera erro de TypeScript.

## Como editar uma experiência

Edite o objeto em `src/data/experiences.ts`. Todo campo textual possui versões `pt` e `en`. O campo `kind` aceita `professional` ou `academic`.

`period`, `type` e `location` são opcionais. Portanto, uma experiência sem data confirmada pode simplesmente omitir `period`.

## Como adicionar uma tecnologia

Edite `src/data/skills.ts`:

- `featuredSkills` controla os destaques do Hero;
- `skillCategories` controla as listas da seção de tecnologias;
- adicione a tecnologia ao array `skills` da categoria adequada.

Não são usados níveis, porcentagens ou barras de progresso.

## Como trocar e-mail, LinkedIn e GitHub

Altere somente `personalInfo.contacts` em `src/data/personal-info.ts`:

```ts
contacts: {
  email: "nome@exemplo.com",
  github: "https://github.com/usuario",
  linkedin: "https://www.linkedin.com/in/usuario/",
},
```

Os links sociais, contato, Footer, SEO e JSON-LD reutilizam esses valores automaticamente.

## Como atualizar português e inglês

Conteúdo profissional bilíngue usa objetos com as chaves `pt` e `en` nos arquivos de `src/data`:

```ts
description: {
  pt: "Texto em português.",
  en: "Text in English.",
},
```

Rótulos de interface, botões, títulos de seção e textos de acessibilidade ficam em:

```text
messages/pt-BR.json
messages/en.json
```

Mantenha a mesma chave nos dois catálogos. A ausência de um idioma nos dados gera erro de TypeScript.

## Como substituir o currículo

Adicione o PDF real com este nome exato:

```text
public/curriculum/braule-fernandes-curriculo.pdf
```

Quando o arquivo existe, o botão de download é habilitado automaticamente. Quando não existe, a interface informa que o currículo estará disponível em breve. Não publique o ZIP de certificados.

## Como validar as alterações

Execute:

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

Para conferir visualmente:

```bash
npm run dev
```

Revise `http://localhost:3000/pt` e `http://localhost:3000/en`, incluindo os temas claro e escuro.

## Como publicar a atualização na Vercel

1. Valide lint, tipos e build localmente.
2. Revise as alterações com `git diff` e `git status`.
3. Crie seu commit e envie-o para a branch conectada à Vercel.
4. A Vercel iniciará um novo deployment automaticamente.
5. Abra o deployment e confira `/pt`, `/en`, o currículo e os links externos.

Se o projeto ainda não estiver conectado, importe o repositório em **Add New → Project**, mantenha o preset Next.js e use `npm run build`. Configure `NEXT_PUBLIC_SITE_URL` com a URL final de produção e faça um novo deployment.
