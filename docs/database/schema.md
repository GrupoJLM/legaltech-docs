---
sidebar_position: 1
---

# Schema do Banco

## Modelos (26 tabelas)

### Core
| Tabela | Descrição |
|--------|-----------|
| `tenants` | Multi-tenancy |
| `users` | Usuários (roles: PLATFORM_ADMIN, ADMIN, LAWYER, CLIENT) |
| `cases` | Casos jurídicos |
| `documents` | Documentos uploaded |
| `document_chunks` | Chunks vetorizados (pgvector) |
| `document_texts` | Texto extraído (OCR) |

### Prazos & Timeline
| Tabela | Descrição |
|--------|-----------|
| `deadlines` | Prazos processuais |
| `case_movements` | Movimentações do caso |

### IA & Chat
| Tabela | Descrição |
|--------|-----------|
| `chats` | Sessões de chat |
| `templates` | Modelos de documentos |

### Comunicação
| Tabela | Descrição |
|--------|-----------|
| `notifications` | Notificações in-app |
| `device_tokens` | Tokens Firebase (push) |
| `whatsapp_messages` | Mensagens WhatsApp |
| `whatsapp_phones` | Telefones mapeados |

### Billing
| Tabela | Descrição |
|--------|-----------|
| `billing_plans` | Planos (FREE/PRO/FIRM/ENTERPRISE) |
| `tenant_subscriptions` | Assinaturas ativas |
| `usage_events` | Eventos de uso |
| `usage_counters` | Contadores de quota |

### Segurança
| Tabela | Descrição |
|--------|-----------|
| `audit_logs` | Audit trail |
| `document_signatures` | Assinaturas digitais |
| `transcriptions` | Metadata de transcrições |

## Relações Principais

```
Tenant 1──N User
Tenant 1──N Case
Case   1──N Document
Case   1──N Deadline
Case   1──N Chat
Case   1──N CaseMovement
Case   1──N WhatsAppMessage
User   1──N Notification
User   1──N DeviceToken
Tenant 1──1 TenantSubscription
```
