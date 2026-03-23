---
title: Notificações
description: Como funcionam as notificações de andamentos e prazos no AltaJuris
sidebar_position: 9
---

# Notificações

O sistema de notificações do AltaJuris mantém você informado sobre todas as movimentações importantes dos seus casos, com alertas em tempo real para novos andamentos e prazos.

## Tipos de notificação

### Novos andamentos

Quando a sincronização com os tribunais detecta um novo andamento processual, você recebe uma notificação contendo:

- Nome do caso
- Descrição do andamento
- Data e hora da movimentação
- Link direto para o caso

### Alertas de prazos

Notificações escalonadas para prazos processuais:

| Prioridade do prazo | Alertas enviados |
|---|---|
| **Urgente** | 7 dias, 3 dias, 1 dia e no dia do vencimento |
| **Alta** | 5 dias, 2 dias e 1 dia antes |
| **Normal** | 3 dias e 1 dia antes |

### Prazos vencidos

Quando um prazo vence sem ser marcado como cumprido, uma notificação de alerta é enviada destacando a urgência da situação.

### Sincronização concluída

Após a sincronização diária automática (06:00 BRT), um resumo é enviado informando:

- Quantidade de casos sincronizados
- Novos andamentos encontrados
- Novos prazos detectados

## Central de notificações

Acesse todas as suas notificações na **Central de Notificações**:

1. Clique no ícone de **sino** no canto superior direito da tela
2. As notificações não lidas aparecem com destaque
3. O badge no ícone mostra a **quantidade de notificações não lidas**

### Ações na central

- **Clicar em uma notificação** — Abre o caso ou recurso relacionado
- **Marcar como lida** — Remove o destaque de não lida
- **Marcar todas como lidas** — Limpa todas as notificações pendentes

## Polling em tempo real

O AltaJuris verifica automaticamente se há novas notificações a cada **15 segundos**. Isso significa que:

- Não é necessário recarregar a página para ver novas notificações
- O badge do sino é atualizado automaticamente
- Novos alertas aparecem sem nenhuma ação do usuário

:::info Tempo real
O intervalo de 15 segundos garante um bom equilíbrio entre atualização rápida e economia de recursos. Para andamentos processuais, que dependem da sincronização com tribunais, a atualização ocorre após cada sincronização (manual ou automática).
:::

## Configuração de notificações

### Por caso

Você pode configurar as notificações individualmente para cada caso:

1. Acesse o caso desejado
2. Clique em **Configurações do caso** (ícone de engrenagem)
3. Na seção **Notificações**, configure:
   - **Novos andamentos** — Ativar/desativar
   - **Alertas de prazos** — Ativar/desativar
   - **Sincronização** — Ativar/desativar

### Configurações gerais

Em **Configurações > Notificações**, defina preferências globais:

- **Notificações na plataforma** — Ativar/desativar notificações no sino
- **Notificações por e-mail** — Receber cópias por e-mail (quando disponível)
- **Som de notificação** — Ativar/desativar alerta sonoro

## Banner de urgência

Quando há prazos vencendo em até 3 dias, um **banner vermelho** é exibido no topo de todas as páginas com:

- Descrição do prazo
- Countdown visual (dias:horas:minutos)
- Link direto para o caso
- Botão para marcar como cumprido

O banner permanece visível até que o prazo seja cumprido ou expire.

:::danger Não ignore o banner!
O banner de urgência indica prazos críticos que requerem ação imediata. Dê atenção especial a esses alertas para evitar perder prazos processuais.
:::

## Próximos passos

- [Controle de Prazos](./prazos) — Entenda como os prazos são gerenciados
- [Sincronização com Tribunais](./sincronizacao) — Saiba quando novos andamentos são detectados
- [Configurações](./configuracoes) — Ajuste suas preferências de notificação
