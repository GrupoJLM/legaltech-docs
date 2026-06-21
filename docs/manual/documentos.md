---
title: Gestão de Documentos
description: Como fazer upload, organizar e extrair texto de documentos no AltaJuris
sidebar_position: 6
---

# Gestão de Documentos

O AltaJuris permite gerenciar todos os documentos dos seus casos em um só lugar, com extração de texto por OCR, classificação automática por IA e assinatura digital integrada.

## Duas seções na página do caso

Cada caso possui **dois cards** separados para documentos:

### Processo na Íntegra

Contém **somente as peças oficiais sincronizadas do tribunal** (eSAJ, PJe, DataJud).

- Peças vêm automaticamente da sincronização com os tribunais
- Não é possível fazer upload manual nesta seção
- Ícone do martelo (⚖️) dourado identifica visualmente peças do tribunal

### Documentos e Anexos

Contém **todos os uploads manuais**: provas, contratos, procurações, áudios do WhatsApp, fotos e demais anexos.

- Upload via drag-and-drop ou botão (até 100MB por arquivo)
- OCR automático para extração de texto
- Classificação automática por IA
- Solicitação de assinatura digital por e-mail

## Upload de documentos

### Formatos suportados

| Formato | Extensão |
|---|---|
| PDF | `.pdf` |
| Word | `.docx`, `.doc` |
| Imagens | `.jpg`, `.jpeg`, `.png`, `.tiff` |
| Áudio | `.ogg`, `.mp3`, `.wav` |
| Texto | `.txt`, `.csv` |
| ZIP | `.zip` |

### Como fazer upload

1. Acesse o caso desejado → clique em **Documentos e Anexos**
2. Arraste o arquivo para a área de upload ou clique em **selecione**
3. Aguarde a barra de progresso completar
4. O documento aparece na lista com status **Aguardando**

### Status do documento

| Status | Significado |
|---|---|
| ⏳ Aguardando | Recebido, aguardando processamento |
| 🔄 Processando | OCR em execução (spinner animado) |
| ✅ Pronto | Texto extraído e indexado com sucesso |
| ❌ Erro | Falha no processamento — clique em Reprocessar |

:::tip
O badge **Processando** mostra um spinner animado enquanto o sistema trabalha. O processamento leva entre 15 e 60 segundos dependendo do tamanho e tipo do arquivo.
:::

## Ações disponíveis por documento

Cada linha da tabela possui os seguintes botões (com tooltip ao passar o mouse):

| Ícone | Ação | Descrição |
|---|---|---|
| ⬇️ | **Baixar** | Download do arquivo original do S3 |
| 👁️ | **Ver texto extraído** | Abre o texto obtido pelo OCR em um dialog |
| ✒️ | **Solicitar assinatura** | Envia e-mail de assinatura para um signatário |
| 🔄 | **Reprocessar** | Reenfileira o OCR (visível apenas em status Erro) |

:::info
O botão **Reprocessar** tem cooldown de 30 segundos após cada clique para evitar sobrecarga.
:::

## OCR — Extração de texto

### Como funciona

Ao fazer upload, o AltaJuris extrai automaticamente o texto de cada arquivo:

1. **PDF digital** (com texto embutido) → extração instantânea via pypdf
2. **Imagem** (JPG, PNG, TIFF) → OCR via AWS Textract
3. **PDF escaneado** (foto de documento) → Textract assíncrono com OCR página por página

### Ver texto extraído

1. Clique no ícone 👁️ ao lado do documento com status **Pronto**
2. O botão mostrará um spinner enquanto carrega
3. O texto aparece em um dialog com scroll

:::note
Se o documento for uma imagem sem texto legível (baixa resolução, foto borrada) ou um PDF com apenas imagens, o dialog exibirá a mensagem *"Nenhum texto foi identificado neste documento"*.
:::

## Assinatura digital

### Solicitar assinatura por e-mail

1. Clique no ícone ✒️ ao lado do documento
2. Informe o **e-mail do signatário** no dialog
3. Clique em **Enviar Solicitação**
4. O signatário receberá um e-mail AltaJuris com botão **Assinar Documento** (válido por 7 dias)

### Acompanhar status de assinatura

Cada linha mostra um badge colorido com o status das assinaturas:

| Badge | Significado |
|---|---|
| 🕐 `1 pendente` (amarelo) | Signatário ainda não assinou |
| ✅ `Assinado` (verde) | Todas as assinaturas concluídas |
| ✒️ `Assinaturas` (neutro) | Detalhes disponíveis (clique para expandir) |

Clique no badge ou no chevron ▼ para expandir o painel de assinaturas com detalhe de cada signatário (e-mail, data de assinatura, status).

## Tipo do arquivo

A coluna **Tipo** mostra um badge colorido por formato:

| Badge | Formato |
|---|---|
| 🔴 PDF | Documentos PDF |
| 🔵 Imagem | JPG, PNG, TIFF |
| 🟣 Áudio | MP3, OGG, WAV |
| 🟠 Vídeo | MP4, AVI |
| 🔵 Word | DOCX, DOC |
| ⬜ ZIP | Arquivos compactados |
| ⬜ Texto | TXT, CSV |

## Upload de conversas do WhatsApp

1. No WhatsApp, exporte a conversa (Configurações > Exportar conversa > Incluir mídia)
2. Faça upload do arquivo **ZIP** gerado na seção **Documentos e Anexos**
3. O sistema processará automaticamente mensagens, fotos, áudios e vídeos
4. As mensagens ficarão disponíveis na aba **WhatsApp** do caso

## Próximos passos

- [Recursos de IA](./ia) — Análise inteligente de documentos
- [Gestão de Casos](./casos) — Vincule documentos aos seus casos
- [Certificados Digitais](./certificados) — Habilite o download de peças dos tribunais
