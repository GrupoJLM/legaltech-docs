---
title: Primeiros Passos
description: Como criar sua conta, configurar o escritório e começar a usar o AltaJuris
sidebar_position: 2
---

# Primeiros Passos

Este guia irá ajudá-lo a configurar sua conta e começar a usar o AltaJuris em poucos minutos.

## Registro

### Registro de escritório de advocacia

1. Acesse [desenvolvimento.altajuris.com.br](https://desenvolvimento.altajuris.com.br)
2. Clique em **Criar conta**
3. Preencha os dados do escritório:
   - Nome do escritório
   - CNPJ (opcional)
   - E-mail do administrador
   - Senha (mínimo 8 caracteres, com letras maiúsculas, minúsculas e números)
4. Confirme o e-mail recebido na sua caixa de entrada
5. Faça login com suas credenciais

### Registro de cidadão

1. Acesse [desenvolvimento.altajuris.com.br](https://desenvolvimento.altajuris.com.br)
2. Clique em **Sou Cidadão**
3. Preencha nome, e-mail e senha
4. Escolha seu plano (Básico, Pro ou Avançado)
5. Após o registro, você será direcionado automaticamente ao onboarding

:::tip Dica
O plano Básico permite experimentar as funcionalidades essenciais. Você pode fazer upgrade a qualquer momento em Configurações > Planos.
:::

## Login

1. Acesse [desenvolvimento.altajuris.com.br](https://desenvolvimento.altajuris.com.br)
2. Digite seu **e-mail** e **senha**
3. Clique em **Entrar**

:::info Segurança
O AltaJuris utiliza autenticação segura com tokens JWT. Sua sessão expira automaticamente após um período de inatividade.
:::

## Onboarding do escritório

Ao fazer login pela primeira vez, o assistente de configuração irá guiá-lo pelos passos essenciais:

### Passo 1 — Boas-vindas

Apresentação das funcionalidades principais da plataforma.

### Passo 2 — Importação de processos por OAB

Este é o recurso mais poderoso para começar rapidamente:

1. Digite seu **número da OAB** (ex: 123456) e selecione a **seccional** (ex: SP)
2. Escolha as **fontes de busca**:
   - **DataJud/CNJ** — Cobertura nacional, todos os tribunais
   - **eSAJ** — Justiça Estadual (SP, RJ e outros estados com eSAJ)
3. Clique em **Importar Processos**
4. O sistema buscará automaticamente todos os processos vinculados à sua OAB
5. Aguarde o processamento — uma barra de progresso mostrará o andamento
6. Os processos encontrados serão importados como casos na plataforma

:::warning Tempo de importação
A importação pode levar alguns minutos dependendo da quantidade de processos. O eSAJ é consultado em paralelo para maior velocidade. Não feche a página durante o processamento.
:::

### Passo 3 — Configuração de credenciais

Configure suas credenciais de acesso aos tribunais para habilitar a sincronização automática. Veja [Certificados Digitais](./certificados) para detalhes.

### Passo 4 — Conclusão

Você será direcionado ao dashboard principal com seus processos já importados.

## Visão geral do dashboard

O dashboard é a tela principal do AltaJuris e apresenta uma visão consolidada do seu escritório:

### Cards de resumo

Na parte superior, cards coloridos mostram:

- **Total de casos** — Quantidade total de processos ativos
- **Prazos próximos** — Prazos que vencem nos próximos 7 dias
- **Novos andamentos** — Andamentos recebidos nas últimas 24 horas
- **Documentos** — Total de documentos cadastrados

### Banner de urgência

Quando há prazos que vencem em até 3 dias, um banner vermelho é exibido no topo do dashboard com:

- Nome do caso e prazo
- Countdown visual (dias, horas, minutos)
- Link direto para o caso

:::danger Nunca perca um prazo!
O AltaJuris detecta automaticamente prazos a partir dos andamentos processuais e envia alertas escalonados. Configure suas notificações para receber avisos com antecedência.
:::

### Lista de casos recentes

Abaixo dos cards, uma lista dos casos mais recentes com:

- Número do processo
- Parte(s) envolvida(s)
- Último andamento
- Próximo prazo
- Status do caso

### Sidebar de navegação

A barra lateral esquerda dá acesso a todas as seções:

- **Dashboard** — Visão geral
- **Casos** — Lista completa de processos
- **Prazos** — Calendário e lista de prazos
- **Documentos** — Gerenciador de documentos
- **IA** — Chat e geração de documentos
- **Marketplace** — Conexão com advogados (cidadãos)
- **Legislação** — Monitoramento legislativo
- **Notificações** — Central de notificações
- **Configurações** — Configurações da conta e escritório

## Próximos passos

- [Gestão de Casos](./casos) — Crie e gerencie seus processos
- [Sincronização com Tribunais](./sincronizacao) — Mantenha seus processos atualizados
- [Controle de Prazos](./prazos) — Nunca perca um prazo
