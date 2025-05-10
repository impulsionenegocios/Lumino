module.exports = {
    plugins: ['prettier-plugin-astro'],
  
    printWidth: 100,         // quebra linha com 100 colunas (ideal pra legibilidade)
    tabWidth: 2,             // 2 espaços por tab (mais comum)
    useTabs: false,          // usa espaços ao invés de tabs
    semi: true,              // ponto e vírgula no final das linhas
    singleQuote: true,       // aspas simples por padrão
    quoteProps: 'as-needed', // só coloca aspas em propriedades quando necessário
    jsxSingleQuote: false,   // aspas duplas no JSX
    trailingComma: 'all',    // vírgula no final de objetos/arrays/múltiplas linhas
    bracketSpacing: true,    // espaços dentro de chaves
    bracketSameLine: false,  // fecha JSX em nova linha
    arrowParens: 'always',   // sempre usa parênteses em funções arrow
  
    proseWrap: 'preserve',   // mantém quebras em textos (markdown, etc)
    endOfLine: 'lf',         // quebra de linha padrão UNIX
    embeddedLanguageFormatting: 'auto', // formata linguagens embutidas (ex: CSS em Vue)
  
    overrides: [
      {
        files: '*.astro',
        options: { parser: 'astro' },
      },
      {
        files: '*.json',
        options: { printWidth: 120 }, // JSONs costumam ter linhas longas
      },
    ],
  };
  