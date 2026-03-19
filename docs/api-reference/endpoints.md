---
sidebar_position: 1
title: API Endpoints
description: Referência completa de todos os endpoints da API
---

# API Endpoints

Base URL: `https://legaltech-api.tecnoepec.com.br/api`

Autenticação: Bearer token JWT (Cognito) em todas as rotas exceto as públicas.

---

## Casos

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| GET | `/cases` | Listar casos | all |
| POST | `/cases` | Criar caso | lawyer, admin |
| GET | `/cases/{id}` | Detalhe do caso | all |
| PUT | `/cases/{id}` | Atualizar caso | lawyer, admin |
| DELETE | `/cases/{id}` | Excluir caso | admin |

## Documentos

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| POST | `/docs/documents/upload` | Upload de documento | lawyer, admin |
| GET | `/docs/documents/{id}/download` | Download (presigned URL) | all |

## Prazos

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| GET | `/deadlines` | Listar prazos | all |
| POST | `/deadlines` | Criar prazo | lawyer, admin |
| PUT | `/deadlines/{id}` | Atualizar prazo | lawyer, admin |
| DELETE | `/deadlines/{id}` | Excluir prazo | admin |

## Andamentos Processuais

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| GET | `/cases/{id}/movements` | Listar andamentos | lawyer, admin |
| POST | `/cases/{id}/sync` | Sincronizar tribunal | lawyer, admin |

## Importação por OAB

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| POST | `/tribunals/search-oab` | Buscar processos por OAB (nacional) | lawyer, admin |
| POST | `/tribunals/import-processes` | Importar processos selecionados | lawyer, admin |

## Consultas (Prontuário)

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| GET | `/consultations?case_id=X` | Listar consultas | all (CLIENT read-only) |
| POST | `/consultations` | Registrar consulta | lawyer, admin |
| GET | `/consultations/{id}` | Detalhe | all |
| PUT | `/consultations/{id}` | Atualizar | lawyer, admin |
| DELETE | `/consultations/{id}` | Excluir | lawyer, admin |

## Notificações Automáticas (Config)

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| GET | `/cases/{id}/notification-config` | Obter config (ou default) | lawyer, admin |
| PUT | `/cases/{id}/notification-config` | Criar/atualizar config | lawyer, admin |

## Assinaturas Digitais

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| POST | `/signatures` | Solicitar assinatura | lawyer, admin |
| GET | `/signatures?document_id=X` | Listar assinaturas | all |
| GET | `/signatures/document-hash/{id}` | Hash SHA-256 do documento | lawyer, admin |
| POST | `/signatures/certificate-sign` | Assinar com certificado A3 | lawyer, admin |
| GET | `/sign/{token}` | Info pública da assinatura | público |
| POST | `/sign/{token}` | Assinar (simples) | público |

## Financeiro (Cobranças)

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| POST | `/lawyer-billing/charges` | Criar cobrança (Asaas) | lawyer, admin |
| GET | `/lawyer-billing/charges` | Listar cobranças + summary | lawyer, admin |
| GET | `/lawyer-billing/charges/{id}` | Detalhe da cobrança | lawyer, admin |
| DELETE | `/lawyer-billing/charges/{id}` | Cancelar cobrança | lawyer, admin |
| POST | `/lawyer-billing/charges/{id}/resend` | Reenviar notificação | lawyer, admin |
| POST | `/lawyer-billing/webhook-charges` | Webhook Asaas | público |

## Subconta Asaas

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| POST | `/settings/asaas-onboarding` | Criar subconta Asaas | admin |
| GET | `/settings/asaas-status` | Status da subconta | lawyer, admin |

## IA

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| POST | `/ai/generate/report` | Gerar relatório | all |
| POST | `/ai/generate/draft` | Gerar minuta | all |
| POST | `/ai/generate/viability-score` | Score de viabilidade | all |
| POST | `/ai/generate/damages-estimate` | Cálculo de danos | all |
| POST | `/ai/generate/proof-index` | Índice de provas | all |
| POST | `/ai/generate/petition-draft` | Petição inicial | all |
| POST | `/ai/generate/lawyer-match` | Match advogado-cidadão | all |
| POST | `/ai/generate/legislation-impact` | Impacto legislativo | all |
| POST | `/ai/chat` | Chat com documentos | all |
| POST | `/ai/chat/stream` | Chat streaming (SSE) | all |
| POST | `/ai/embed` | Gerar embedding | all |
| POST | `/ai/search` | Busca semântica | all |

## Monitoramento Legislativo

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| POST | `/legislative/monitors` | Criar monitor | all |
| GET | `/legislative/monitors` | Listar monitores | all |
| PUT | `/legislative/monitors/{id}` | Atualizar | all |
| DELETE | `/legislative/monitors/{id}` | Excluir | all |
| GET | `/legislative/alerts` | Listar alertas | all |
| GET | `/legislative/alerts/unread-count` | Contagem não lidos | all |
| PATCH | `/legislative/alerts/{id}/read` | Marcar como lido | all |
| PATCH | `/legislative/alerts/read-all` | Marcar todos como lidos | all |
| GET | `/legislative/items` | Buscar legislação | all |
| GET | `/legislative/items/{id}` | Detalhe | all |
| POST | `/legislative/crawl` | Trigger manual crawl | admin |

## Marketplace

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| POST | `/marketplace/profiles` | Criar perfil advogado | lawyer |
| GET | `/marketplace/profiles` | Listar advogados | all |
| POST | `/marketplace/leads` | Criar lead | citizen |
| PATCH | `/marketplace/leads/{id}/accept` | Aceitar lead | lawyer |
| GET | `/marketplace/leads/{id}/messages` | Listar mensagens | all |
| POST | `/marketplace/reviews` | Avaliar advogado | citizen |

## Billing (Plataforma)

| Método | Endpoint | Descrição | Roles |
|--------|----------|-----------|-------|
| POST | `/billing/checkout` | Criar assinatura Asaas | admin |
| POST | `/billing/portal` | Link de pagamento | admin |
| GET | `/billing/status` | Status do plano | all |
| GET | `/billing/usage` | Uso mensal | all |
| POST | `/billing/webhook` | Webhook Asaas | público |

## Worker Jobs (SQS)

| Job Type | Descrição |
|----------|-----------|
| `PROCESS_DOC_EXTRACT` | OCR via Textract |
| `CLASSIFY_DOCUMENT` | Classificação por IA |
| `INDEX_CHUNKS` | Embedding pgvector |
| `PROCESS_ZIP` | Extrair ZIP |
| `PROCESS_AUDIO_TRANSCRIBE` | Transcrição áudio |
| `EXPORT_DOCX` / `EXPORT_PDF` | Exportação |
| `DEADLINE_REMINDER` | Lembretes de prazo |
| `SEND_EMAIL` | Email via SES |
| `SEND_PUSH` | Push via FCM |
| `SEND_WHATSAPP` | WhatsApp via Meta API |
| `SYNC_TRIBUNAL` | Sincronizar andamentos |
| `PARSE_WHATSAPP_CHAT` | Parser WhatsApp ZIP |
| `CRAWL_LEGISLATION` | Crawler legislativo |
| `ANALYZE_LEGISLATION_IMPACT` | Análise de impacto |
| `SEND_CLIENT_UPDATE` | Notificação automática ao cliente |
| `SEND_SIGNATURE_REQUEST` | Solicitar assinatura |
| `HANDLE_DLQ_ALERT` | Alerta de dead-letter queue |

---

## Banco de Dados

**33 tabelas** | PostgreSQL 16 + pgvector | 27 migrations (Alembic)

### Tabelas Principais
- `tenants`, `users`, `cases`, `documents`, `document_chunks`, `document_texts`
- `deadlines`, `case_movements`, `notifications`, `device_tokens`
- `chats`, `templates`, `audit_logs`, `transcriptions`
- `billing_plans`, `tenant_subscriptions`, `usage_events`, `usage_counters`
- `document_signatures`, `tribunal_credentials`
- `whatsapp_messages`, `whatsapp_phones`, `whatsapp_chat_messages`
- `lawyer_profiles`, `marketplace_leads`, `marketplace_messages`, `lawyer_reviews`
- `legislative_items`, `legislative_monitors`, `legislative_alerts`
- `client_consultations`, `case_notification_configs`
- `client_charges`
