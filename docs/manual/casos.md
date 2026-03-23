---
title: Gestão de Casos
description: Como criar, importar e gerenciar casos e processos judiciais no AltaJuris
sidebar_position: 3
---

# Gestão de Casos

A gestão de casos é o coração do AltaJuris. Cada processo judicial é representado como um "caso" na plataforma, reunindo todas as informações, documentos, andamentos e prazos em um só lugar.

## Criar novo caso manualmente

1. Acesse **Casos** na sidebar
2. Clique em **+ Novo Caso**
3. Preencha as informações obrigatórias:
   - **Número do processo** (formato CNJ: NNNNNNN-DD.AAAA.J.TR.OOOO)
   - **Título** — Nome identificador do caso
   - **Tipo** — Cível, Trabalhista, Criminal, Tributário, etc.
4. Preencha as informações opcionais:
   - **Comarca** — Localidade do processo
   - **Vara** — Vara responsável
   - **Juiz** — Nome do juiz
   - **Parte autora** — Nome da parte autora
   - **Parte ré** — Nome da parte ré
   - **Descrição** — Resumo do caso
5. Clique em **Salvar**

:::tip Dica
Ao digitar o número do processo no formato CNJ, o sistema automaticamente identifica o tribunal e pode buscar informações adicionais via DataJud.
:::

## Importar processos por OAB

A importação por OAB permite trazer todos os seus processos de uma vez:

1. Acesse **Casos** na sidebar
2. Clique em **Importar por OAB**
3. Digite o **número da OAB** e selecione a **seccional**
4. Selecione as **fontes de busca**:
   - **DataJud/CNJ** — Todos os tribunais do país
   - **eSAJ** — Tribunais estaduais com sistema eSAJ
5. Clique em **Buscar Processos**
6. Aguarde a busca — o progresso é exibido em tempo real
7. Os processos encontrados são importados automaticamente

:::info Fontes de dados
O **DataJud** é a base de dados do CNJ e cobre todos os tribunais do Brasil. O **eSAJ** é o sistema utilizado por tribunais estaduais como TJSP e TJRJ, oferecendo dados mais detalhados para esses tribunais.
:::

## Detalhes do caso

Ao clicar em um caso, você acessa a página de detalhes com várias seções:

### Cards de resumo

No topo da página, cards mostram informações rápidas:

- **Número do processo** e tribunal
- **Status atual** do caso
- **Quantidade de documentos** associados
- **Próximo prazo** com countdown visual
- **Data da última sincronização** com o tribunal

### Aba Andamentos

Lista cronológica de todas as movimentações processuais, com **badges coloridos** por tipo:

| Badge | Cor | Tipo de andamento |
|---|---|---|
| Sentença | Vermelho | Decisões finais, sentenças |
| Decisão | Laranja | Decisões interlocutórias |
| Despacho | Azul | Despachos do juiz |
| Petição | Verde | Petições e juntadas |
| Audiência | Roxo | Audiências designadas |
| Publicação | Amarelo | Publicações no DJE |
| Outros | Cinza | Demais movimentações |

Cada andamento exibe:
- Data e hora da movimentação
- Descrição do andamento
- Badge colorido do tipo
- Documentos anexos (quando disponíveis)

### Aba Documentos

Lista de todos os documentos associados ao caso:
- Documentos enviados pelo usuário
- Documentos baixados do tribunal
- Classificação automática por IA (petição, decisão, contrato, etc.)

### Aba Prazos

Lista de prazos vinculados ao caso, com:
- Descrição do prazo
- Data de vencimento
- Status (pendente, cumprido, expirado)
- Prioridade (urgente, alta, normal)
- Countdown visual para prazos próximos

### Aba WhatsApp

Quando há mensagens de WhatsApp importadas para o caso:
- Visualizador de conversas com layout estilo WhatsApp
- Filtros por data e remetente
- Mídia anexada (fotos, áudios, vídeos)

## Status do caso

Cada caso possui um status que indica sua situação atual:

| Status | Descrição |
|---|---|
| **Aberto** | Caso recém-criado ou importado, aguardando análise |
| **Em andamento** | Caso ativo com processos judiciais em curso |
| **Encerrado** | Caso finalizado (sentença transitada em julgado) |
| **Arquivado** | Caso arquivado pelo usuário |

### Alterar o status

1. Abra o caso desejado
2. Clique no badge de status no topo da página
3. Selecione o novo status
4. Confirme a alteração

## Editar caso

1. Abra o caso desejado
2. Clique em **Editar** (ícone de lápis)
3. Altere as informações necessárias
4. Clique em **Salvar**

## Excluir caso

1. Abra o caso desejado
2. Clique em **Excluir** (ícone de lixeira)
3. Confirme a exclusão no diálogo

:::danger Atenção
A exclusão de um caso é **permanente** e remove todos os documentos, andamentos e prazos associados. Esta ação não pode ser desfeita.
:::

## Busca e filtros

Na lista de casos, utilize os recursos de busca e filtro:

- **Busca por texto** — Pesquise por número do processo, título ou partes
- **Filtro por status** — Filtre por aberto, em andamento, encerrado ou arquivado
- **Filtro por tipo** — Filtre por área do direito (cível, trabalhista, etc.)
- **Ordenação** — Ordene por data de criação, último andamento ou próximo prazo

## Próximos passos

- [Sincronização com Tribunais](./sincronizacao) — Mantenha os andamentos atualizados
- [Controle de Prazos](./prazos) — Gerencie os prazos do caso
- [Documentos](./documentos) — Organize os documentos do caso
