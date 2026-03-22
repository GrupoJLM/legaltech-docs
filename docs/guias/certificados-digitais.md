---
sidebar_position: 1
---

# Certificados Digitais

## Visão Geral

O AltaJuris suporta autenticação com certificados digitais ICP-Brasil para acesso automatizado aos sistemas dos tribunais (eSAJ, PJe, eProc). São suportados dois tipos:

- **Certificado A1** — arquivo digital (.pfx/.p12) armazenado no computador
- **Certificado A3** — certificado em token USB ou smartcard

## Certificado A1 (Arquivo Digital)

### O que é

Certificado digital armazenado em arquivo (`.pfx` ou `.p12`). A chave privada fica no arquivo protegida por senha.

### Como configurar

1. Acesse **Configurações > Integrações**
2. Clique em **Nova Credencial de Tribunal**
3. Selecione o **Sistema** (PJe ou e-SAJ)
4. Selecione os **Tribunais** desejados
5. Escolha o modo **Certificado Digital A1**
6. Faça upload do arquivo `.pfx` ou `.p12`
7. Digite a **senha do certificado**
8. Clique em **Salvar**

### Segurança

- O certificado é encriptado em repouso (Fernet encryption)
- A senha é armazenada separadamente, também encriptada
- Os dados sensíveis nunca são retornados pela API
- Apenas administradores podem gerenciar certificados

### Informações exibidas

Após o upload, o sistema exibe:

- **Nome do titular** (CN)
- **CPF** (extraído automaticamente de certificados ICP-Brasil)
- **Emissor** (Autoridade Certificadora)
- **Data de validade** (com alertas visuais quando próximo do vencimento)

## Certificado A3 (Token USB / Smartcard)

### O que é

Certificado digital armazenado em dispositivo físico (token USB ou smartcard). A chave privada nunca sai do dispositivo.

### Pré-requisitos

- Token USB ou smartcard com certificado ICP-Brasil válido
- Driver do token instalado no computador
- **Lacuna Web PKI** instalado no navegador (o sistema solicita instalação automaticamente se necessário)

### Como configurar

1. Conecte o **token USB** ao computador
2. Acesse **Configurações > Integrações**
3. Clique em **Nova Credencial de Tribunal**
4. Selecione o **Sistema** e **Tribunais**
5. Escolha o modo **Certificado Digital A3 (Token USB)**
6. Salve a credencial
7. Na credencial criada, clique em **Conectar Token A3**
8. O sistema detectará os certificados disponíveis no token
9. Selecione o certificado desejado
10. O sistema solicitará o **PIN do token** para verificação
11. Após verificação, os dados públicos do certificado serão registrados

### Segurança

- A chave privada **nunca sai do token USB**
- Apenas informações públicas são armazenadas no servidor (nome, CPF, emissor, validade)
- A verificação é feita através de assinatura de challenge criptográfico
- O token precisa estar conectado para operações que requerem assinatura

### Limitações

- O token USB precisa estar fisicamente conectado ao computador para operações de autenticação
- Sincronizações automáticas em background não são possíveis sem o token conectado
- Para automação completa, recomenda-se o uso de certificado A1

## Gerenciamento de Certificados

### Visualizar certificados configurados

Em **Configurações > Integrações**, cada credencial exibe:

- Badge verde para **A1** ou badge azul para **A3**
- Nome do titular e CPF
- Data de validade com indicadores visuais:
  - **Verde**: válido por mais de 30 dias
  - **Amarelo**: vence em menos de 30 dias
  - **Vermelho**: expirado

### Remover certificado

1. Na credencial desejada, clique em **Remover Certificado**
2. Confirme a remoção

### Atualizar certificado

Para certificados A1, faça novo upload do arquivo. Para A3, clique em **Reconectar Token**.

## Uso nos Tribunais

Após configurar o certificado, o sistema utiliza-o automaticamente para:

- **Sincronização de andamentos** — busca movimentações processuais
- **Autenticação no eSAJ** — acesso ao sistema do TJSP e outros tribunais estaduais
- **Autenticação no PJe** — acesso ao Processo Judicial Eletrônico
- **Download de documentos** — acesso a peças processuais

## Solução de Problemas

| Problema | Solução |
|----------|---------|
| "Certificado inválido ou senha incorreta" | Verifique se o arquivo .pfx/.p12 não está corrompido e se a senha está correta |
| "Nenhum certificado detectado" | Verifique se o token USB está conectado e o driver instalado |
| "Web PKI não instalado" | Clique no link para instalar o Lacuna Web PKI no navegador |
| "Certificado expirado" | Renove o certificado com sua Autoridade Certificadora |
| Badge amarelo na validade | O certificado vence em menos de 30 dias — providencie a renovação |

## Tipos de Certificado por Tribunal

| Tribunal | Sistema | Certificado Recomendado |
|----------|---------|------------------------|
| TJSP | eSAJ | A1 ou A3 |
| TJRJ | eSAJ | A1 ou A3 |
| TJMG | PJe | A3 (obrigatório para peticionamento) |
| TRFs | PJe | A3 (obrigatório para peticionamento) |
| Demais TJs | PJe ou eSAJ | Conforme o tribunal |
