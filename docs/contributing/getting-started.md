---
sidebar_position: 1
---

# Getting Started

## Workflow

1. Clone o repositório relevante
2. Crie uma branch: `git checkout -b feature/nome-da-feature`
3. Implemente a mudança com testes
4. Abra um Pull Request para `main`
5. CI deve passar (lint + testes)
6. Code review + merge

## Branches

- `main` — Produção (deploy automático)
- `develop` — Desenvolvimento (CI roda)
- `feature/*` — Features em desenvolvimento
- `fix/*` — Correções de bugs
