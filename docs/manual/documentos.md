---
title: Gestão de Documentos
description: Como fazer upload, organizar e classificar documentos no AltaJuris
sidebar_position: 6
---

# Gestão de Documentos

O AltaJuris permite gerenciar todos os documentos dos seus casos em um só lugar, com classificação automática por inteligência artificial e organização intuitiva.

## Upload de documentos

### Formatos suportados

| Formato | Extensão | Observação |
|---|---|---|
| PDF | `.pdf` | Formato mais comum para documentos jurídicos |
| Word | `.docx`, `.doc` | Petições, minutas, contratos |
| Imagens | `.jpg`, `.jpeg`, `.png` | Fotos de documentos, comprovantes |
| Planilhas | `.xlsx`, `.xls` | Cálculos, demonstrativos financeiros |

:::info Limite de tamanho
Cada arquivo pode ter no máximo **100 MB**. Para arquivos maiores, considere dividir o documento ou compactá-lo.
:::

### Como fazer upload

1. Acesse o caso desejado
2. Vá até a aba **Documentos**
3. Clique em **Enviar Documento** ou arraste o arquivo para a área de upload
4. Selecione um ou mais arquivos
5. Aguarde o envio e processamento
6. O documento aparecerá na lista com a classificação automática

### Upload múltiplo

Você pode enviar vários documentos de uma vez:

1. Na área de upload, selecione múltiplos arquivos (segure Ctrl/Cmd ao clicar)
2. Ou arraste vários arquivos de uma vez para a área de upload
3. Todos os arquivos serão enviados e processados em paralelo

## Classificação automática por IA

Ao fazer upload de um documento, a inteligência artificial do AltaJuris analisa o conteúdo e classifica automaticamente em categorias:

| Classificação | Descrição |
|---|---|
| **Petição** | Petições iniciais, contestações, réplicas |
| **Decisão** | Sentenças, acórdãos, decisões interlocutórias |
| **Contrato** | Contratos, aditivos, distratos |
| **Procuração** | Procurações e substabelecimentos |
| **Comprovante** | Comprovantes de pagamento, recibos |
| **Certidão** | Certidões e atestados |
| **Laudo** | Laudos periciais, pareceres técnicos |
| **Correspondência** | E-mails, ofícios, notificações |
| **Outro** | Documentos não classificados |

A classificação é exibida como um **badge colorido** ao lado do nome do arquivo.

:::tip Dica
A classificação automática tem alta precisão, mas pode ser editada manualmente. Clique no badge de classificação para alterá-lo.
:::

## Download de documentos do tribunal

Para tribunais com integração eSAJ, documentos podem ser baixados diretamente:

1. Na aba **Andamentos** do caso, localize o andamento com documento anexo
2. Clique no ícone de **download** ao lado do andamento
3. O documento será baixado e salvo automaticamente na aba Documentos do caso

:::warning Certificado digital necessário
O download de documentos de tribunais requer um **certificado digital** configurado. Veja [Certificados Digitais](./certificados) para instruções de configuração.
:::

## Visualização e organização

### Visualizar documento

1. Na lista de documentos, clique no nome do arquivo
2. O documento será aberto no visualizador integrado (para PDFs e imagens)
3. Para outros formatos, o download será iniciado automaticamente

### Organizar documentos

Os documentos podem ser organizados por:

- **Classificação** — Agrupa por tipo (petição, decisão, contrato, etc.)
- **Data de envio** — Ordena pela data de upload
- **Nome** — Ordena alfabeticamente
- **Tamanho** — Ordena por tamanho do arquivo

### Renomear documento

1. Clique no ícone de **editar** (lápis) ao lado do documento
2. Digite o novo nome
3. Pressione Enter ou clique fora para confirmar

### Excluir documento

1. Clique no ícone de **excluir** (lixeira) ao lado do documento
2. Confirme a exclusão no diálogo

:::danger Atenção
A exclusão de documentos é **permanente** e não pode ser desfeita. Certifique-se de que o documento não é mais necessário antes de excluí-lo.
:::

## Upload de conversas do WhatsApp

O AltaJuris permite importar conversas do WhatsApp como evidências:

1. No WhatsApp, exporte a conversa desejada (Configurações da conversa > Exportar conversa > Incluir mídia)
2. O WhatsApp gerará um arquivo **ZIP** contendo o chat e as mídias
3. No caso do AltaJuris, acesse **Upload WhatsApp**
4. Faça upload do arquivo ZIP
5. O sistema processará automaticamente:
   - Mensagens de texto (com data, hora e remetente)
   - Fotos e imagens
   - Áudios (com transcrição quando disponível)
   - Vídeos
6. As mensagens estarão disponíveis no **Visualizador de WhatsApp** do caso

:::info Formatos suportados
O parser de WhatsApp suporta tanto o formato de exportação do **iOS** quanto do **Android**.
:::

## Próximos passos

- [Recursos de IA](./ia) — Use a IA para analisar seus documentos
- [Gestão de Casos](./casos) — Vincule documentos aos seus casos
- [Certificados Digitais](./certificados) — Habilite o download de documentos dos tribunais
