import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Arquitetura',
      items: [
        'architecture/overview',
        'architecture/backend',
        'architecture/frontend',
        'architecture/mobile',
        'architecture/infrastructure',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api-reference/api-core',
        'api-reference/doc-service',
        'api-reference/ai-service',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deployment/local-setup',
        'deployment/staging',
        'deployment/production',
      ],
    },
    {
      type: 'category',
      label: 'Database',
      items: [
        'database/schema',
        'database/migrations',
      ],
    },
    {
      type: 'category',
      label: 'Contribuição',
      items: [
        'contributing/getting-started',
        'contributing/code-style',
        'contributing/testing',
      ],
    },
  ],
};

export default sidebars;
