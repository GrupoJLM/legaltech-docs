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
- Driver do token instalado no computador (SafeSign, SafeNet, Watchdata ou OpenSC)
- **AltaJuris Signer** instalado no computador (recomendado) **ou** Lacuna Web PKI no navegador

### AltaJuris Signer (recomendado)

O **AltaJuris Signer** é um aplicativo desktop próprio e **gratuito** que acessa o token USB com segurança via WebSocket local. É a forma recomendada de usar certificados A3 no AltaJuris.

**Download:**

- **Windows:** [AltaJuris-Signer-Setup.exe](https://altajuris-signer-downloads.s3.amazonaws.com/AltaJuris-Signer-Setup.exe)

**Como funciona:**

1. Baixe e instale o `AltaJuris Signer` (instalação em poucos cliques)
2. Após instalar, o app inicia automaticamente e fica na **bandeja do sistema** (canto inferior direito, perto do relógio)
3. O tooltip do ícone exibe o status: `Aguardando conexão` ou `Conectado`
4. Quando o AltaJuris acessar o token, o app solicitará o **PIN** numa janela segura
5. A chave privada **nunca sai do token USB** — apenas os dados públicos são enviados ao servidor

:::tip Por que AltaJuris Signer?
É um app open-source próprio, sem necessidade de licença paga de terceiros. Instale uma vez e use em todos os tribunais. Funciona com tokens SafeSign, SafeNet, Watchdata, OpenSC e outros.
:::

### Passo a passo

1. Conecte o **token USB** ao computador
2. Certifique-se de que o **AltaJuris Signer** está aberto (ícone na bandeja do sistema)
3. Acesse **Configurações > Integrações** no AltaJuris
4. Clique em **Nova Credencial de Tribunal**
5. Selecione o **Sistema** e **Tribunais**
6. Escolha o modo **Certificado Digital A3 (Token USB)**
7. Salve a credencial
8. Na credencial criada, clique em **Conectar Token A3**
9. O sistema detectará os certificados disponíveis no token
10. Selecione o certificado desejado
11. Digite o **PIN do token** quando solicitado pelo AltaJuris Signer
12. Após verificação, os dados públicos serão registrados

:::info Alternativa: Lacuna Web PKI
Se preferir, o sistema também suporta o **Lacuna Web PKI** (extensão de navegador + componente nativo). Requer licença paga da Lacuna para uso em produção. O AltaJuris detecta automaticamente qual método está disponível e usa o Signer primeiro, com fallback para o Web PKI.
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
| "Nenhum certificado detectado" | Verifique se o token USB está conectado, o driver instalado e o AltaJuris Signer aberto |
| "AltaJuris Signer não está aberto" | Baixe em [altajuris-signer-downloads.s3.amazonaws.com](https://altajuris-signer-downloads.s3.amazonaws.com/AltaJuris-Signer-Setup.exe) e verifique o ícone na bandeja do sistema |
| Ícone do Signer sem imagem na bandeja | Apenas visual — o app funciona normalmente. Passe o mouse para confirmar o status no tooltip |
| Dialog trava em "Detectando certificados..." | Clique em **Tentar detectar novamente** ou feche e reabra o dialog após instalar o Signer |
| "Certificado expirado" | Renove o certificado com sua Autoridade Certificadora |
| Badge amarelo na validade | O certificado vence em menos de 30 dias — providencie a renovação |

## Próximos passos

- [Sincronização com Tribunais](./sincronizacao) — Use o certificado para sincronizar andamentos
- [Documentos](./documentos) — Baixe documentos dos tribunais automaticamente
- [Configurações](./configuracoes) — Outras opções de configuração
