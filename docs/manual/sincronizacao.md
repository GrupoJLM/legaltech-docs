---
title: Sincronização com Tribunais
description: Como funciona a integração do AltaJuris com os tribunais brasileiros via eSAJ e DataJud
sidebar_position: 4
---

# Sincronização com Tribunais

O AltaJuris mantém seus processos atualizados automaticamente através da integração direta com os sistemas dos tribunais brasileiros. Este é um dos recursos mais importantes da plataforma.

## Como funciona

A sincronização busca novos **andamentos processuais** (movimentações) diretamente nos sistemas dos tribunais e os importa para o AltaJuris. Quando um novo andamento é detectado, o sistema:

1. Registra o andamento no caso correspondente
2. Classifica o tipo do andamento (sentença, decisão, despacho, etc.)
3. Verifica se há prazo a ser criado automaticamente
4. Envia uma notificação ao responsável pelo caso

## Fontes de dados

### eSAJ — Justiça Estadual

O **eSAJ** (Sistema de Automação da Justiça) é o sistema eletrônico utilizado por diversos tribunais estaduais. A integração com o eSAJ oferece:

- Consulta detalhada de andamentos processuais
- Download de documentos (com certificado digital)
- Dados mais granulares para tribunais estaduais

### DataJud/CNJ — Cobertura nacional

O **DataJud** é a base de dados nacional do Conselho Nacional de Justiça (CNJ). Oferece:

- Cobertura de **todos os tribunais** do Brasil
- Dados padronizados conforme as tabelas unificadas do CNJ
- Atualização periódica a partir dos sistemas de cada tribunal

:::info Prioridade de fontes
Quando ambas as fontes estão disponíveis para um tribunal, o AltaJuris combina os dados para oferecer a visão mais completa possível. O eSAJ é priorizado para tribunais estaduais por oferecer dados mais detalhados.
:::

## Tribunais suportados

### Via DataJud/CNJ (cobertura nacional)

| Categoria | Tribunais |
|---|---|
| **Supremo Tribunal Federal** | STF |
| **Tribunais Superiores** | STJ, TST, TSE, STM |
| **Tribunais Regionais Federais** | TRF1, TRF2, TRF3, TRF4, TRF5, TRF6 |
| **Tribunais de Justiça** | Todos os 27 TJs estaduais |
| **Tribunais Regionais do Trabalho** | Todos os 24 TRTs |
| **Tribunais Regionais Eleitorais** | Todos os 27 TREs |

### Via eSAJ (dados detalhados)

| Tribunal | Sistema | Observação |
|---|---|---|
| TJSP | eSAJ | Tribunal de Justiça de São Paulo |
| TJRJ | eSAJ | Tribunal de Justiça do Rio de Janeiro |
| TJSC | eSAJ | Tribunal de Justiça de Santa Catarina |
| TJMS | eSAJ | Tribunal de Justiça de Mato Grosso do Sul |
| TJAM | eSAJ | Tribunal de Justiça do Amazonas |
| TJCE | eSAJ | Tribunal de Justiça do Ceará |

:::tip Dica
Mesmo para tribunais que não possuem integração eSAJ, o DataJud garante cobertura nacional. A diferença está no nível de detalhe dos andamentos e na possibilidade de download de documentos.
:::

## Sincronização manual

Você pode forçar uma sincronização a qualquer momento:

1. Abra o caso desejado
2. Clique no botão **Sincronizar** (ícone de atualização)
3. O botão exibirá um indicador de carregamento durante o processo
4. Ao concluir, os novos andamentos aparecerão na lista

O feedback visual indica o estado:
- **Girando** — Sincronização em andamento
- **Check verde** — Sincronização concluída com sucesso
- **X vermelho** — Erro na sincronização (passe o mouse para ver o motivo)

:::info Sincronização de todos os casos
Na página de casos, o botão **Sincronizar Todos** executa a sincronização de todos os seus casos de uma vez. Este processo é executado em segundo plano e pode levar alguns minutos.
:::

## Sincronização automática diária

O AltaJuris sincroniza automaticamente todos os casos ativos:

- **Horário:** 06:00 BRT (horário de Brasília), todos os dias
- **Escopo:** Todos os casos com status "Aberto" ou "Em andamento"
- **Notificações:** Você recebe uma notificação para cada novo andamento detectado

A sincronização automática acontece em segundo plano e não requer nenhuma ação do usuário.

## O que é sincronizado

### Andamentos processuais

Cada andamento sincronizado contém:

- **Data e hora** da movimentação
- **Descrição** do andamento
- **Tipo/classificação** (sentença, decisão, despacho, petição, audiência, publicação)
- **Complementos** quando disponíveis

### Badges coloridos dos andamentos

Os andamentos são automaticamente classificados e exibidos com badges coloridos para facilitar a identificação:

| Badge | Cor | Exemplos |
|---|---|---|
| **Sentença** | Vermelho | Sentença proferida, julgamento, acórdão |
| **Decisão** | Laranja | Decisão interlocutória, tutela antecipada, liminar |
| **Despacho** | Azul | Despacho de mero expediente, despacho ordinatório |
| **Petição** | Verde | Petição inicial, contestação, réplica, juntada de documentos |
| **Audiência** | Roxo | Audiência de conciliação, instrução, julgamento |
| **Publicação** | Amarelo | Publicação no DJE, intimação eletrônica |
| **Outros** | Cinza | Demais movimentações não classificadas |

:::warning Sentenças e decisões
Andamentos classificados como **Sentença** (vermelho) ou **Decisão** (laranja) merecem atenção especial, pois geralmente geram prazos processuais importantes.
:::

## Download de documentos

Para tribunais com integração eSAJ, é possível baixar documentos processuais diretamente:

1. No andamento, clique no ícone de **download** (quando disponível)
2. O documento será baixado e associado automaticamente ao caso

:::warning Certificado digital necessário
O download de documentos dos tribunais requer um **certificado digital** (A1 ou A3) configurado. Veja [Certificados Digitais](./certificados) para saber como configurar.
:::

## Solução de problemas

| Problema | Possível causa | Solução |
|---|---|---|
| Sincronização não retorna novos andamentos | Processo sem movimentação recente | Verifique a data do último andamento no tribunal |
| Erro de conexão | Tribunal fora do ar | Aguarde e tente novamente mais tarde |
| Andamentos incompletos | Limitação da fonte de dados | Configure credenciais eSAJ para mais detalhes |
| Download de documento falha | Certificado não configurado | Configure um certificado digital em Configurações |
| Processo não encontrado | Número incorreto ou tribunal não indexado | Verifique o número do processo e tente DataJud |

## Próximos passos

- [Controle de Prazos](./prazos) — Prazos são criados automaticamente a partir dos andamentos
- [Documentos](./documentos) — Gerencie os documentos baixados dos tribunais
- [Certificados Digitais](./certificados) — Configure certificados para download de documentos
