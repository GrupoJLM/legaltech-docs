---
sidebar_position: 6
title: Features Implementadas
description: Documentação completa de todas as features do LegalTech AI
---

# Features Implementadas

Documentação de todas as funcionalidades do LegalTech AI, organizadas por módulo.

---

## 1. Gestão de Casos

### Casos (CRUD)
- Criação, edição, exclusão e listagem de casos jurídicos
- Status: Aberto → Em Andamento → Fechado → Arquivado
- Vinculação de cliente (`client_user_id`)
- Campos de processo: número CNJ, tribunal, vara, comarca

### Documentos
- Upload de documentos (PDF, DOC, DOCX, JPG, PNG, ZIP)
- OCR automático via AWS Textract
- Classificação automática por IA (contrato, nota fiscal, laudo, foto/prova, etc.)
- Indexação com embeddings pgvector para busca semântica (RAG)

### Prazos
- Prazos processuais, contratuais, audiências
- Prioridade: urgente, alta, normal, baixa
- Lembretes automáticos (worker `DEADLINE_REMINDER` → email + push)
- Integração com calendário

### Andamentos Processuais
- Sincronização com tribunais (eSAJ, PJe, DataJud)
- Classificação automática por tipo (despacho, decisão, sentença, petição, audiência)
- Timeline visual de andamentos

---

## 2. Inteligência Artificial

### Chat IA (RAG)
- Conversa com documentos do caso via Claude 3.5 (Bedrock)
- Busca semântica com pgvector (Amazon Titan Embed 1024d)
- Streaming via SSE

### Geração de Minutas
- Petições, pareceres, contestações
- Templates customizáveis com preenchimento por IA
- Disclaimer obrigatório: "Revisão obrigatória por advogado"

### Score de Viabilidade (Cidadão)
- Análise de viabilidade jurídica (1-10) com pontos fortes/fracos
- RAG sobre documentos do caso + Claude

### Case Builder (Cidadão Advanced)
- Índice de provas numerado
- Cálculo de danos (material, moral, outros)
- Petição inicial rascunhada
- Exportação PDF

### Análise de Impacto Legislativo
- Compara nova legislação contra documentos do caso
- Retorna: has_impact, impact_level, summary, recommended_actions

---

## 3. Monitoramento Legislativo (Fase 6)

### Crawlers
- **Câmara dos Deputados** — API REST (`dadosabertos.camara.leg.br/api/v2`)
- **Senado Federal** — API REST (`legis.senado.leg.br/dadosabertos`)
- Embeddings gerados para matching semântico

### Monitores
- Usuário configura: áreas jurídicas, palavras-chave, fontes, tipos de proposição
- CRUD completo de monitores

### Alertas
- Two-phase alerting: keyword/legal_area (rápido) + semantic similarity (worker)
- Notificações push quando legislação relevante é publicada
- Análise de impacto por IA vinculada a casos ativos

---

## 4. Marketplace Advogado-Cidadão (Fase 5)

### Perfil do Advogado
- OAB, especialidades, regiões, bio, avaliação média
- Toggle ativo/inativo no marketplace

### Matching por IA
- Claude analisa caso do cidadão + perfis de advogados
- Ranking por relevância, especialidade e região

### Leads e Mensagens
- Cidadão envia solicitação → Advogado aceita/recusa
- Sistema de mensagens entre cidadão e advogado
- Status: pendente → aceito → concluído

### Avaliações
- Cidadão avalia advogado após conclusão (1-5 estrelas + comentário)

---

## 5. Histórico de Consultas

### Prontuário Jurídico
- Registro de todas as consultas/atendimentos com o cliente
- Campos: data, título, notas, resultado/encaminhamento
- CRUD completo (LAWYER/ADMIN cria, CLIENT visualiza)
- Acessível via case detail → "Histórico de Consultas"

**Tabela:** `client_consultations` (migration 023)

---

## 6. Notificações Automáticas ao Cliente

### Configuração por Caso
- Ativar/desativar notificações automáticas
- Frequência: 7, 15 ou 30 dias
- Canais: email (SES), WhatsApp (Meta API), push (FCM)

### Worker Job
- `SEND_CLIENT_UPDATE` — verifica configs ativas, busca andamentos recentes, envia resumo
- Cria Notification in-app + enfileira canais configurados

**Tabela:** `case_notification_configs` (migration 023)

---

## 7. Assinatura Digital com Certificado A3

### Lacuna Web PKI
- SDK JavaScript (`web-pki` npm) para acesso a certificados ICP-Brasil
- Suporte a tokens USB e cartões inteligentes (A3)
- Detecção automática de certificados instalados

### Fluxo de Assinatura
1. Advogado clica "Assinar com Certificado" no documento
2. Web PKI lista certificados do token A3
3. Backend gera hash SHA-256 do documento (S3)
4. Web PKI assina hash localmente (PIN do token)
5. Signature + certificate enviados ao backend
6. Armazenado com dados X.509 (subject, issuer, serial, validade)

### Endpoints
- `GET /signatures/document-hash/{id}` — hash SHA-256 do documento
- `POST /signatures/certificate-sign` — assinar com certificado digital

**Campos adicionais:** migration 024 (certificate_subject, issuer, serial, thumbprint, signature_value, certificate_pem)

---

## 8. Importação de Processos por OAB

### Busca Nacional
- **DataJud (CNJ)** — API pública, busca por número OAB em 10 tribunais
- **eSAJ** — Scraping de consulta pública em 10 TJs (TJSP, TJRJ, TJMG, etc.)
- Deduplicação automática entre fontes

### Fluxo
1. Advogado informa OAB + estado
2. Sistema busca em todo o Brasil (DataJud + eSAJ)
3. Lista processos encontrados com checkbox de seleção
4. Advogado seleciona → Cases criados automaticamente
5. `SYNC_TRIBUNAL` enfileirado para buscar andamentos

### Endpoints
- `POST /tribunals/search-oab` — busca nacional por OAB
- `POST /tribunals/import-processes` — importa selecionados como Cases

**Migration 025:** enums DATAJUD/EPROC + Case.imported_from

---

## 9. Faturamento para Clientes do Advogado

### Cobranças via Asaas
- Criação de cobranças (boleto, PIX, cartão de crédito)
- Parcelamento (1-12x)
- Links de pagamento gerados automaticamente
- PIX QR Code + copia e cola

### Dashboard Financeiro
- Summary: total faturado, recebido, em aberto, vencido
- Filtros por status
- Detalhe da cobrança com links de pagamento

### Webhook
- `PAYMENT_CONFIRMED` → status "pago" + paid_at
- `PAYMENT_OVERDUE` → status "vencido"
- `PAYMENT_REFUNDED` → status "reembolsado"

### Subcontas Asaas
- Cada escritório tem subconta própria no Asaas
- Dinheiro cai **direto na conta do escritório**
- API key da subconta encriptada (Fernet) no Tenant
- Configuração via `/settings/financeiro`

**Tabelas:** `client_charges` (migration 026), campos subconta no `tenants` (migration 027)

---

## 10. Sistema de Ajuda

### Tour Guiado
- **driver.js** (~5KB) — tour automático no primeiro acesso
- Steps para dashboard e case detail
- Salva em localStorage (`tour_completed_{key}`)

### Tooltips Contextuais
- Ícone `?` com explicação via Radix Tooltip
- Adicionado em: Gerar Minuta, Chat IA, Histórico de Consultas

---

## 11. Email (SES)

### Configuração
- AWS SES (fora do sandbox) via task role IAM
- Sender: `noreply@legaltech.tecnoepec.com.br`
- Domínio `tecnoepec.com.br` verificado

### Templates
- deadline_reminder, document_ready, case_assignment, generic
- HTML responsivo com header LegalTech AI + footer

---

## 12. WhatsApp

### Parser de Conversas
- Upload de ZIP exportado do WhatsApp
- Parse de `_chat.txt` (iOS/Android)
- Detecção de mídia (fotos, áudios, vídeos)
- Relatório detalhado com evidências cruzadas

### Envio de Mensagens
- Meta WhatsApp Cloud API
- Status tracking (queued → sent → delivered → read)

---

## Infraestrutura AWS

| Serviço | Recurso |
|---------|---------|
| CloudFront | Web distribution → S3 (static export) |
| API Gateway | REST → VPC Link → NLB → ECS |
| ECS Fargate | 4 serviços (api-core, doc-service, ai-service, worker) |
| Aurora PostgreSQL | 16 + pgvector (33 tabelas, 27 migrations) |
| ElastiCache | Redis 7 (pub/sub SSE, rate limit) |
| SQS FIFO | 20 job types |
| S3 | 4 buckets (inbox, docs, exports, transcripts) |
| Cognito | User Pool + JWT/SRP/PKCE |
| Bedrock | Claude 3.5 Sonnet + Titan Embed |
| SES | Email transacional |
| Textract | OCR de documentos |
| Transcribe | Transcrição de áudio |

---

## Stack Tecnológico

### Backend
- Python 3.13, FastAPI, SQLAlchemy 2.0 (async), Pydantic v2
- 30+ routers, 33 models, 27 migrations (Alembic)
- 658 testes (53 api-core + 48 worker + 557 shared)

### Frontend
- Next.js 15 (App Router, static export), React 18, TypeScript
- TailwindCSS, shadcn/ui (Radix), TanStack Query, Zustand
- 250 testes (32 files, Vitest + Playwright E2E)
- 29 itens de navegação, i18n em pt-BR/en/es

### Mobile
- Flutter 3.29, Dart, Riverpod 3, GoRouter 17
- Cognito PKCE, Firebase push, biometrics
- 171 testes

### CI/CD
- GitHub Actions → ECR → ECS Deploy (backend)
- GitHub Actions → S3 + CloudFront (frontend)
- Trivy security scan
