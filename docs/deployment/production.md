---
sidebar_position: 3
---

# Deploy Produção

## Checklist

- [ ] Todos os testes passando no CI
- [ ] Review de código aprovado
- [ ] Migrations testadas em staging
- [ ] Secrets de produção configurados
- [ ] Monitoring ativo (Sentry, CloudWatch)

## Infraestrutura

Gerenciada via Terraform em:
```
infrastructure/aws/account/tecnoepec/legaltech/
```

## Rollback

Em caso de problema:
1. Reverter o commit no GitHub
2. CI/CD automaticamente faz deploy da versão anterior
3. Ou manualmente: `aws ecs update-service --force-new-deployment`
