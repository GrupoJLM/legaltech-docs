---
title: Certificados Digitais
description: Como configurar certificados digitais A1 e A3 para integração com tribunais no AltaJuris
sidebar_position: 7
---

# Certificados Digitais

O AltaJuris suporta autenticação com certificados digitais ICP-Brasil para acesso automatizado aos sistemas dos tribunais (eSAJ, PJe, eProc). Os certificados são necessários para download de documentos e acesso a informações restritas.

## Tipos de certificado

### Certificado A1 — Arquivo digital

- Armazenado em arquivo (`.pfx` ou `.p12`)
- Chave privada protegida por senha
- Validade de **1 ano**
- Ideal para **automação completa** (sincronizações em segundo plano)
- Pode ser instalado em múltiplos dispositivos

### Certificado A3 — Token USB / Smartcard

- Armazenado em dispositivo físico (token USB ou smartcard)
- Chave privada **nunca sai do dispositivo**
- Validade de **3 anos**
- Mais seguro, pois requer o dispositivo presente
- Necessário para **peticionamento** em alguns tribunais (ex: PJe)

:::tip Qual escolher?
Para automação completa de sincronizações e downloads, o **certificado A1** é mais prático. Para peticionamento no PJe, o **certificado A3** pode ser obrigatório. Você pode configurar ambos simultaneamente.
:::

## Configurar certificado A1

1. Acesse **Configurações** na sidebar
2. Vá para a seção **Integrações**
3. Clique em **Nova Credencial de Tribunal**
4. Selecione o **Sistema** (eSAJ ou PJe)
5. Selecione os **Tribunais** desejados
6. Escolha o modo **Certificado Digital A1**
7. Faça upload do arquivo `.pfx` ou `.p12`
8. Digite a **senha do certificado**
9. Clique em **Salvar**

Após o upload, o sistema exibe automaticamente:

- **Nome do titular** (CN do certificado)
- **CPF** (extraído de certificados ICP-Brasil)
- **Emissor** (Autoridade Certificadora)
- **Data de validade**

## Configurar certificado A3

### Pré-requisitos

- Token USB ou smartcard com certificado ICP-Brasil válido
- Driver do token instalado no computador
- **Lacuna Web PKI** instalado no navegador

### Passo a passo

1. Conecte o **token USB** ao computador
2. Acesse **Configurações > Integrações**
3. Clique em **Nova Credencial de Tribunal**
4. Selecione o **Sistema** e **Tribunais**
5. Escolha o modo **Certificado Digital A3 (Token USB)**
6. Salve a credencial
7. Na credencial criada, clique em **Conectar Token A3**
8. O sistema detectará os certificados disponíveis no token
9. Selecione o certificado desejado
10. Digite o **PIN do token** quando solicitado
11. Após verificação, os dados públicos serão registrados

:::info Lacuna Web PKI
Se o Web PKI não estiver instalado, o sistema exibirá um link para download. A instalação é rápida e gratuita. O Web PKI é necessário apenas para certificados A3.
:::

## Gerenciamento de certificados

### Indicadores visuais de validade

Os certificados exibem indicadores de cor conforme a validade:

| Indicador | Significado |
|---|---|
| **Verde** | Válido por mais de 30 dias |
| **Amarelo** | Vence em menos de 30 dias — providencie a renovação |
| **Vermelho** | Expirado — renove imediatamente |

### Remover certificado

1. Em **Configurações > Integrações**, localize a credencial
2. Clique em **Remover Certificado**
3. Confirme a remoção

### Atualizar certificado

- **A1:** Faça novo upload do arquivo atualizado
- **A3:** Clique em **Reconectar Token** para atualizar os dados

## Segurança

O AltaJuris trata certificados digitais com o máximo de segurança:

- Certificados A1 são **encriptados em repouso** (Fernet encryption)
- Senhas são armazenadas separadamente, também encriptadas
- Dados sensíveis **nunca são retornados pela API**
- Apenas **administradores** podem gerenciar certificados
- Para A3, a chave privada **nunca sai do token USB**

## Uso nos tribunais

Após configurar o certificado, o sistema utiliza-o automaticamente para:

- **Sincronização de andamentos** — busca movimentações processuais
- **Download de documentos** — acesso a peças processuais e anexos
- **Autenticação no eSAJ** — tribunais estaduais
- **Autenticação no PJe** — Processo Judicial Eletrônico

## Certificados por tribunal

| Tribunal | Sistema | Certificado recomendado |
|---|---|---|
| TJSP | eSAJ | A1 ou A3 |
| TJRJ | eSAJ | A1 ou A3 |
| TJMG | PJe | A3 (obrigatório para peticionamento) |
| TRFs | PJe | A3 (obrigatório para peticionamento) |
| Demais TJs | PJe ou eSAJ | Conforme o tribunal |

## Solução de problemas

| Problema | Solução |
|---|---|
| "Certificado inválido ou senha incorreta" | Verifique se o arquivo `.pfx`/`.p12` não está corrompido e se a senha está correta |
| "Nenhum certificado detectado" | Verifique se o token USB está conectado e o driver instalado |
| "Web PKI não instalado" | Clique no link para instalar o Lacuna Web PKI no navegador |
| "Certificado expirado" | Renove o certificado com sua Autoridade Certificadora |
| Badge amarelo na validade | O certificado vence em menos de 30 dias — providencie a renovação |

## Próximos passos

- [Sincronização com Tribunais](./sincronizacao) — Use o certificado para sincronizar andamentos
- [Documentos](./documentos) — Baixe documentos dos tribunais automaticamente
- [Configurações](./configuracoes) — Outras opções de configuração
