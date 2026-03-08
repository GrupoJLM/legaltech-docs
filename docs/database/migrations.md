---
sidebar_position: 2
---

# Migrations

## Alembic

As migrations ficam em `shared/alembic/versions/`.

### Comandos

```bash
# Aplicar todas as migrations
cd legaltech-backend
make migrate

# Criar nova migration
cd shared && python -m alembic -c alembic.ini revision --autogenerate -m "add_new_table"

# Downgrade
cd shared && python -m alembic -c alembic.ini downgrade -1
```

### CI/CD

Migrations são executadas automaticamente no deploy quando `shared/` tem mudanças.
