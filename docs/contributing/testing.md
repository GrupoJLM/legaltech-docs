---
sidebar_position: 3
---

# Testes

## Totais

| Componente | Testes | Framework |
|------------|--------|-----------|
| Backend (shared) | 420 | pytest |
| Frontend | 229 | Vitest |
| Frontend E2E | 20 | Playwright |
| Mobile | 189 | Flutter test |
| **Total** | **858** | — |

## Backend

```bash
cd legaltech-backend

# Todos os testes shared
python -m pytest shared/tests/ -v

# Testes específicos
python -m pytest shared/tests/test_deadlines.py -v

# Com coverage
python -m pytest shared/tests/ --cov=shared --cov-report=html
```

## Frontend

```bash
cd legaltech-web

# Unit tests
npx vitest run

# E2E tests
npx playwright test

# Storybook
npx storybook dev
```

## Mobile

```bash
cd legaltech-mobile

# Todos os testes
flutter test

# Com coverage
flutter test --coverage
```
