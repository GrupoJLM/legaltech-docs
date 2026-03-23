---
title: Controle de Prazos
description: Como gerenciar prazos processuais no AltaJuris com detecção automática e alertas
sidebar_position: 5
---

# Controle de Prazos

O controle de prazos é um dos recursos mais críticos do AltaJuris. A plataforma detecta automaticamente prazos a partir dos andamentos processuais e envia alertas escalonados para que você nunca perca um prazo.

:::danger Nunca perca um prazo!
Perder um prazo processual pode causar danos irreparáveis ao seu cliente. O AltaJuris monitora prazos 24 horas por dia e envia múltiplos alertas antes do vencimento.
:::

## Criar prazo manualmente

1. Acesse o caso desejado
2. Vá até a aba **Prazos**
3. Clique em **+ Novo Prazo**
4. Preencha as informações:
   - **Descrição** — O que precisa ser feito (ex: "Apresentar contestação")
   - **Data de vencimento** — Data limite
   - **Prioridade** — Urgente, Alta ou Normal
   - **Observações** — Notas adicionais (opcional)
5. Clique em **Salvar**

## Prazos automáticos

O AltaJuris detecta automaticamente prazos a partir dos andamentos processuais sincronizados com os tribunais. Este recurso funciona sem nenhuma configuração adicional.

### Como a detecção funciona

Quando um novo andamento é sincronizado, o sistema analisa o texto e identifica:

- **Intimações** — Prazo de 15 dias úteis para manifestação
- **Citações** — Prazo de 15 dias úteis para contestação
- **Sentenças** — Prazo de 15 dias úteis para recurso de apelação
- **Decisões interlocutórias** — Prazo de 15 dias úteis para agravo
- **Audiências designadas** — Prazo até a data da audiência
- **Publicações no DJE** — Prazo contado a partir da publicação

### Cálculo em dias úteis

Os prazos são calculados em **dias úteis**, conforme a legislação processual brasileira:

- Fins de semana (sábados e domingos) são excluídos
- Feriados nacionais são considerados
- O dia do vencimento é incluído na contagem
- Quando o vencimento cai em dia não útil, é prorrogado para o próximo dia útil

:::info Cálculo de prazos
O AltaJuris segue as regras do Código de Processo Civil (art. 219) para contagem de prazos. Recomendamos sempre conferir o prazo calculado, especialmente para feriados locais que podem não estar cadastrados.
:::

### Prioridade automática

A prioridade do prazo é definida automaticamente com base no tipo de andamento que o originou:

| Andamento de origem | Prioridade atribuída |
|---|---|
| **Sentença** | Urgente |
| **Decisão interlocutória** | Alta |
| **Intimação** | Alta |
| **Citação** | Alta |
| **Audiência** | Alta |
| **Despacho** | Normal |
| **Publicação** | Normal |
| **Outros** | Normal |

## Visualização no calendário

O AltaJuris oferece uma visão de calendário para facilitar o planejamento:

1. Acesse **Prazos** na sidebar
2. Alterne entre as visualizações:
   - **Lista** — Todos os prazos em ordem cronológica
   - **Calendário** — Visão mensal com prazos marcados
3. No calendário, os prazos são exibidos com cores conforme a prioridade:
   - **Vermelho** — Urgente
   - **Laranja** — Alta
   - **Azul** — Normal
4. Clique em um prazo no calendário para ver os detalhes

## Notificações e alertas de vencimento

O sistema de alertas é escalonado para garantir que você seja notificado com antecedência:

### Alertas por prioridade

| Prioridade | Quando é notificado |
|---|---|
| **Urgente** | 7 dias, 3 dias, 1 dia e no dia do vencimento |
| **Alta** | 5 dias, 2 dias e 1 dia antes |
| **Normal** | 3 dias e 1 dia antes |

### Banner de urgência no dashboard

Quando há prazos vencendo em até **3 dias**, um banner vermelho aparece no topo do dashboard com:

- Nome do caso e descrição do prazo
- **Countdown visual** mostrando dias, horas e minutos restantes
- Link direto para o caso

### Notificações em tempo real

O sistema verifica novas notificações a cada **15 segundos**. Você recebe alertas para:

- Novos prazos detectados automaticamente
- Prazos próximos do vencimento
- Prazos vencidos não cumpridos

## Status dos prazos

Cada prazo possui um status que indica sua situação:

| Status | Descrição | Ação |
|---|---|---|
| **Pendente** | Prazo ainda não venceu e não foi cumprido | Cumprir antes do vencimento |
| **Cumprido** | Prazo foi marcado como cumprido pelo usuário | Nenhuma ação necessária |
| **Expirado** | Prazo venceu sem ser cumprido | Avaliar consequências e tomar medidas |

### Marcar prazo como cumprido

1. Acesse o caso ou a lista de prazos
2. Localize o prazo desejado
3. Clique em **Marcar como cumprido** (ícone de check)
4. O prazo será atualizado para o status "Cumprido"

:::tip Dica
Marque os prazos como cumpridos assim que a providência for tomada. Isso mantém seu painel limpo e facilita identificar o que ainda precisa de atenção.
:::

### Prazos expirados

Prazos que vencem sem serem marcados como cumpridos ficam com destaque vermelho na lista. Recomendamos revisar regularmente para:

- Verificar se a providência foi tomada e o prazo apenas não foi marcado
- Avaliar as consequências da perda do prazo
- Tomar medidas corretivas quando possível

## Filtros e ordenação

Na página de prazos, utilize os filtros para encontrar rapidamente o que precisa:

- **Por status** — Pendente, Cumprido, Expirado
- **Por prioridade** — Urgente, Alta, Normal
- **Por caso** — Filtrar prazos de um caso específico
- **Por período** — Filtrar por intervalo de datas
- **Ordenação** — Por data de vencimento (mais próximo primeiro) ou por prioridade

## Próximos passos

- [Documentos](./documentos) — Organize os documentos relacionados aos prazos
- [Notificações](./notificacoes) — Configure como receber alertas de prazos
- [Sincronização com Tribunais](./sincronizacao) — Entenda como os prazos são detectados automaticamente
