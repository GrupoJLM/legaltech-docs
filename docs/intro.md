---
sidebar_position: 1
slug: /
---

# AltaJuris

Plataforma inteligente para gestão de escritórios de advocacia, com inteligência artificial integrada.

## Visão Geral

O AltaJuris é uma plataforma SaaS multi-tenant que combina:

- **Gestão de Casos** — CRUD completo com timeline, movimentações e status
- **Prazos Processuais** — Calendário com drag-and-drop, visão semanal/mensal, dias úteis BR
- **Chat com IA** — RAG (Retrieval-Augmented Generation) por caso, streaming SSE
- **Documentos** — Upload, OCR (Textract), transcrição de áudio, assinatura digital
- **WhatsApp** — Envio/recebimento bidirecional, status delivery/read
- **Analytics** — Dashboard por equipe e pessoal, trend charts
- **Portal do Cliente** — Acesso limitado para clientes acompanharem seus casos
- **Templates** — Modelos de documentos com preenchimento AI (RAG)
- **Notificações** — Real-time (SSE), email (SES), push mobile (Firebase)
- **Billing** — Stripe com 4 planos (Free/Pro/Firm/Enterprise) em BRL

## Repositórios

| Repo | Descrição | Tech |
|------|-----------|------|
| [legaltech-backend](https://github.com/GrupoJLM/legaltech-backend) | 4 microservices Python | FastAPI + PostgreSQL + Redis |
| [legaltech-web](https://github.com/GrupoJLM/legaltech-web) | Frontend web | Next.js 14 + shadcn/ui |
| [legaltech-mobile](https://github.com/GrupoJLM/legaltech-mobile) | App mobile | Flutter |
| [legaltech-docs](https://github.com/GrupoJLM/legaltech-docs) | Documentação | Docusaurus |

## Testes

| Componente | Testes | Framework |
|------------|--------|-----------|
| Backend | 420 | pytest |
| Frontend | 229 | Vitest |
| Frontend E2E | 20 | Playwright |
| Mobile | 189 | Flutter test |
| **Total** | **858** | — |
