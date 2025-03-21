export default {
  logo: <span>Triplex 文档</span>,
  project: {
    link: 'https://github.com/zplao/TriplexDoc'
  },
  docsRepositoryBase: 'https://github.com/zplao/TriplexDoc',
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Triplex'
    }
  },
  primaryHue: {
    dark: 204,
    light: 212
  },
  footer: {
    text: 'Triplex 文档 © 2024'
  }
} 