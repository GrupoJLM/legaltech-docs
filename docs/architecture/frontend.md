---
sidebar_position: 3
---

# Frontend

## Tech Stack

- **Next.js 14** — App Router, static export (`output: "export"`)
- **React 18** + **TypeScript 5.4**
- **TailwindCSS 3.4** + **shadcn/ui** (Radix UI)
- **React Query v5** — Data fetching + cache
- **Zustand** — State management (auth, sidebar, theme)
- **Zod** — Validation
- **Recharts** — Charts (bar, area, donut)
- **@dnd-kit** — Drag and drop (kanban, calendário)
- **react-markdown** — Renderização de markdown
- **next-intl** — i18n (pt-BR, en, es)

## Rotas (36)

| Rota | Descrição |
|------|-----------|
| `/dashboard` | Overview com widgets |
| `/cases` | Lista de casos |
| `/cases/[id]` | Detalhe do caso |
| `/cases/new` | Criar caso |
| `/calendar` | Calendário de prazos |
| `/documents` | Gestor de documentos |
| `/chat` | Chat IA |
| `/chat/[id]` | Conversa específica |
| `/analytics` | Dashboard analytics equipe |
| `/analytics/personal` | Métricas pessoais |
| `/templates` | Modelos de documentos |
| `/notifications` | Central de notificações |
| `/settings` | Configurações |
| `/settings/security` | Segurança + 2FA |
| `/billing` | Planos e faturamento |
| `/admin` | Administração |
| `/portal` | Portal do cliente |
| `/search` | Busca global |

## Componentes

- **27 Storybook stories** (17 UI primitivos + 10 shared)
- **shadcn/ui** para todos os componentes base
- **Dark mode** com CSS variables + Zustand store

## Testes

- **229 testes unitários** (Vitest)
- **20 testes E2E** (Playwright)
- **27 stories** (Storybook)
