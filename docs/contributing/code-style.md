---
sidebar_position: 2
---

# Code Style

## Backend (Python)

- **Linter**: ruff
- **Formatter**: ruff format
- **Type hints**: Usar `str | None` (Python 3.10+)
- **Async**: Preferir `async def` para endpoints e queries
- **Models**: SQLAlchemy 2.0 style (Mapped, mapped_column)

## Frontend (TypeScript)

- **Linter**: ESLint
- **Componentes**: Functional components + hooks
- **State**: React Query para server state, Zustand para client state
- **Styling**: Tailwind CSS classes (não CSS modules)
- **Testes**: Vitest + @testing-library/react

## Mobile (Dart)

- **Linter**: flutter analyze
- **State**: Riverpod providers
- **Navigation**: GoRouter declarativo
- **HTTP**: Dio com interceptors
