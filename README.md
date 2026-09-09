# Barão Ambiental — Barão de Melgaço, MT

Plataforma aberta de análise ambiental e estatística para o município de **Barão de Melgaço–MT (IBGE 5101605)**, no Pantanal.

## Dados já incorporados

- Focos de calor INPE: 2003–2024.
- Desastres e impactos: 1991–2024.
- Tipologias de desastres COBRADE.
- Série climática municipal carregada dinamicamente do repositório `ernandes-sobreira/clima-pantanal`: precipitação, temperatura média, mínima e máxima, umidade relativa e índice de calor.

## Análises implementadas

- Mann–Kendall para tendência temporal.
- Inclinação de Sen.
- Regressão linear e R².
- Correlação de Pearson.
- Correlação de Spearman.
- Matriz de correlações.
- Regressão múltipla exploratória para `log(1 + focos)` com precipitação, temperatura máxima e umidade padronizadas.
- PCA com variáveis ambientais padronizadas.

Todos os resultados climáticos e multivariados são recalculados no navegador a partir das séries carregadas.

## Próximos módulos

A estrutura já prevê a incorporação de:

- MapBiomas Água e hidroperíodo JRC;
- uso e cobertura da terra MapBiomas;
- área queimada e frequência de fogo MapBiomas Fogo;
- CHIRPS: precipitação diária, CDD e dias secos;
- ERA5-Land: VPD e temperatura;
- NDVI/EVI Landsat;
- vegetação secundária;
- carbono orgânico do solo.

## Arquivos

- `index.html` — interface principal.
- `styles.css` — identidade visual responsiva.
- `app.js` — carregamento dos dados, gráficos e estatística.
- `data/focos_barao_2003_2024.csv` — focos anuais.
- `data/desastres_barao_1991_2024.csv` — eventos e impactos anuais.
- `data/tipologias_barao.csv` — síntese COBRADE.

## Uso

O projeto é estático e pode ser servido diretamente pelo GitHub Pages a partir da branch `main` e pasta `/ (root)`.

Projeto voltado à pesquisa, ensino e comunicação científica. Correlações são exploratórias e não devem ser interpretadas isoladamente como causalidade.
