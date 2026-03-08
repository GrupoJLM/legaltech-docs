import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Gestão de Casos',
    icon: '⚖️',
    description: 'CRUD completo com timeline, movimentações, kanban e busca global. Multi-tenant com isolamento por escritório.',
  },
  {
    title: 'Prazos Processuais',
    icon: '📅',
    description: 'Calendário com drag-and-drop, visão semanal/mensal, cálculo de dias úteis BR e notificações automáticas.',
  },
  {
    title: 'Chat com IA',
    icon: '🤖',
    description: 'RAG (Retrieval-Augmented Generation) por caso com streaming SSE. Powered by AWS Bedrock (Claude).',
  },
  {
    title: 'WhatsApp Bidirecional',
    icon: '💬',
    description: 'Envio e recebimento de mensagens, status de entrega/leitura, seletor de telefones por caso.',
  },
  {
    title: 'Analytics Avançado',
    icon: '📊',
    description: 'Dashboard por equipe e pessoal, trend charts, comparação com média da equipe, métricas de produtividade.',
  },
  {
    title: 'Portal do Cliente',
    icon: '👤',
    description: 'Acesso limitado para clientes acompanharem seus casos, documentos e prazos em tempo real.',
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md" style={{marginBottom: '2rem'}}>
        <div style={{fontSize: '3rem', marginBottom: '0.5rem'}}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs">
            Documentação →
          </Link>
        </div>
        <div style={{marginTop: '1.5rem', display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <img alt="Python" src="https://img.shields.io/badge/Python-3.13-blue?logo=python&logoColor=white" />
          <img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-0.115-009688?logo=fastapi&logoColor=white" />
          <img alt="Next.js" src="https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white" />
          <img alt="Flutter" src="https://img.shields.io/badge/Flutter-3.24-02569B?logo=flutter&logoColor=white" />
          <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql&logoColor=white" />
          <img alt="AWS" src="https://img.shields.io/badge/AWS-ECS%20%7C%20Bedrock-FF9900?logo=amazonwebservices&logoColor=white" />
          <img alt="Tests" src="https://img.shields.io/badge/Tests-858-green?logo=checkmarx&logoColor=white" />
        </div>
      </div>
    </header>
  );
}

function TechSection() {
  return (
    <section style={{padding: '2rem 0', background: 'var(--ifm-color-emphasis-100)'}}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <Heading as="h3">Backend</Heading>
            <ul>
              <li>4 microservices FastAPI</li>
              <li>PostgreSQL 16 (pgvector)</li>
              <li>Redis 7 (cache + pub/sub)</li>
              <li>420 testes (pytest)</li>
            </ul>
          </div>
          <div className="col col--4">
            <Heading as="h3">Frontend</Heading>
            <ul>
              <li>Next.js 14 (static export)</li>
              <li>shadcn/ui + TailwindCSS</li>
              <li>36 rotas, dark mode, i18n</li>
              <li>229 testes + 20 E2E</li>
            </ul>
          </div>
          <div className="col col--4">
            <Heading as="h3">Mobile</Heading>
            <ul>
              <li>Flutter (Android + iOS)</li>
              <li>Cognito PKCE auth</li>
              <li>Offline mode + Push</li>
              <li>189 testes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Plataforma inteligente para escritórios de advocacia com IA integrada">
      <HomepageHeader />
      <main>
        <section style={{padding: '2rem 0'}}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <TechSection />
      </main>
    </Layout>
  );
}
