---
title: Recursos de IA
description: Como utilizar a inteligência artificial do AltaJuris para análise de documentos, geração de minutas e relatórios
sidebar_position: 8
---

# Recursos de IA

O AltaJuris utiliza inteligência artificial avançada (Claude, da Anthropic) para automatizar tarefas jurídicas complexas. Os recursos de IA estão integrados em diversas funcionalidades da plataforma.

## Chat IA — Conversar com documentos

O Chat IA permite que você faça perguntas sobre os documentos de um caso e receba respostas contextualizadas.

### Como usar

1. Acesse o caso desejado
2. Clique em **Chat IA** na aba ou na sidebar
3. Digite sua pergunta na caixa de texto
4. A IA analisará os documentos do caso e responderá

### Exemplos de perguntas

- "Quais são os principais argumentos da contestação?"
- "Resuma os pontos-chave da sentença"
- "Quais provas foram apresentadas pela parte autora?"
- "Há contradições entre os depoimentos das testemunhas?"
- "Quais são os prazos mencionados na intimação?"

:::tip Dica
Quanto mais documentos estiverem vinculados ao caso, mais completas serão as respostas da IA. Faça upload de todas as peças relevantes antes de iniciar o chat.
:::

### Como funciona

O Chat IA utiliza **RAG** (Retrieval-Augmented Generation):

1. Seus documentos são processados e indexados em chunks
2. Ao fazer uma pergunta, os trechos mais relevantes são recuperados
3. A IA gera a resposta com base nos trechos encontrados
4. As referências aos documentos de origem são incluídas na resposta

:::info Privacidade
Seus documentos são processados de forma segura e nunca são compartilhados com outros usuários. A IA acessa apenas os documentos do caso que você está consultando.
:::

## Geração de minutas

A IA pode gerar minutas de documentos jurídicos com base no contexto do caso.

### Tipos de minutas disponíveis

| Tipo | Descrição |
|---|---|
| **Petição inicial** | Petição com fundamentação jurídica e pedidos |
| **Contestação** | Defesa com análise dos pontos da petição |
| **Recurso de apelação** | Recurso contra sentença de primeiro grau |
| **Agravo de instrumento** | Recurso contra decisão interlocutória |
| **Manifestação** | Manifestação genérica sobre andamentos |
| **Parecer** | Análise jurídica sobre o caso |

### Como gerar uma minuta

1. Acesse o caso desejado
2. Vá para **IA > Gerar Minuta**
3. Selecione o **tipo de documento**
4. Preencha instruções adicionais (opcional):
   - Argumentos específicos a incluir
   - Legislação a fundamentar
   - Tom desejado (formal, técnico, persuasivo)
5. Clique em **Gerar**
6. Aguarde o processamento (pode levar de 30 segundos a 2 minutos)
7. Revise a minuta gerada
8. Clique em **Baixar PDF** ou **Copiar texto**

:::warning Revisão obrigatória
As minutas geradas pela IA são um **ponto de partida** e devem sempre ser revisadas por um advogado antes de uso. A IA pode cometer erros factuais ou jurídicos. O profissional é responsável pelo conteúdo final.
:::

## Relatório PDF do caso

O AltaJuris gera relatórios completos em PDF sobre o andamento e situação de um caso.

### O que contém o relatório

- **Resumo executivo** — Visão geral do caso em linguagem clara
- **Cronologia** — Linha do tempo dos principais andamentos
- **Análise de documentos** — Resumo dos documentos mais relevantes
- **Situação processual** — Status atual e próximos passos previstos
- **Prazos pendentes** — Lista de prazos em aberto
- **Evidências do WhatsApp** — Quando disponível, cruzamento com mensagens importadas

### Como gerar

1. Acesse o caso desejado
2. Clique em **Gerar Relatório PDF** no dashboard do caso
3. Aguarde o processamento
4. O PDF será gerado e o download iniciará automaticamente

:::tip Utilidade
O relatório PDF é ideal para apresentar a situação do caso ao cliente, reuniões internas do escritório ou para registro no arquivo físico.
:::

## Análise de viabilidade (Cidadãos)

Para usuários do perfil Cidadão, a IA analisa os documentos enviados e avalia a viabilidade de uma ação judicial.

### O que a análise avalia

- **Score de viabilidade** — Nota de 1 a 10
- **Justificativa** — Explicação detalhada da nota
- **Pontos fortes** — Argumentos e evidências favoráveis
- **Pontos fracos** — Riscos e lacunas identificadas
- **Recomendação** — Sugestão de próximos passos

### Como usar

1. Faça upload dos documentos relacionados ao seu caso
2. No dashboard, clique em **Análise de Viabilidade**
3. Aguarde a análise (pode levar até 1 minuto)
4. O resultado será exibido no card de viabilidade do dashboard

O score é apresentado visualmente:

| Score | Indicador | Significado |
|---|---|---|
| 8–10 | Verde | Alta viabilidade — caso com boas chances de êxito |
| 5–7 | Amarelo | Viabilidade média — avaliar com advogado |
| 1–4 | Vermelho | Baixa viabilidade — risco alto de insucesso |

## Case Builder — Construtor de caso (Cidadãos)

O Case Builder é um assistente passo a passo para construir um caso jurídico completo:

### Etapa 1 — Índice de provas

A IA organiza todos os documentos em um índice de provas, classificando cada documento por relevância e tipo.

### Etapa 2 — Estimativa de danos

Com base nos documentos e na descrição do caso, a IA estima os possíveis danos (morais e materiais) com fundamentação jurídica.

### Etapa 3 — Minuta da petição

A IA gera uma petição completa com:
- Qualificação das partes
- Fatos
- Fundamentação jurídica
- Pedidos
- Valor da causa

### Etapa 4 — Exportação

Exporte o caso completo como PDF, incluindo a petição, o índice de provas e a estimativa de danos.

## Próximos passos

- [Gestão de Documentos](./documentos) — Faça upload de documentos para a IA analisar
- [Gestão de Casos](./casos) — Vincule documentos e use a IA no contexto do caso
- [Configurações](./configuracoes) — Gerencie seu plano para acessar recursos avançados de IA
