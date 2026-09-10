# BARÃO-PANTANAL — Barão de Melgaço, MT

Plataforma aberta de análise ambiental e estatística dedicada ao município de **Barão de Melgaço–MT (IBGE 5101605)**, no Pantanal.

## Dados incorporados

- Clima mensal do projeto `ernandes-sobreira/clima-pantanal`, filtrado para Barão de Melgaço.
- Focos de calor: 2003–2024.
- Desastres e impactos: 1991–2024.
- Tipologias COBRADE.

### Agregação climática anual

A base climática é mensal. Antes das análises anuais, a plataforma aplica:

- `precip_sum_mm`: **soma dos meses** de cada ano;
- `tmean_c`, `tmin_c`, `tmax_c`, `rh_mean_pct`, `hi_mean_c`: **média dos meses** de cada ano;
- `hi_max_c`: **máximo mensal observado no ano**.

Somente anos com pelo menos 10 meses disponíveis entram na série anual. Valores ausentes não são transformados em zero.

## Análises implementadas

- séries temporais e linha de tendência;
- estatística descritiva;
- Mann–Kendall;
- inclinação de Sen;
- regressão linear e R²;
- correlação de Pearson e Spearman;
- ranking das relações entre fogo e clima;
- matriz de correlação;
- regressão múltipla exploratória de `log(1 + focos)` em função de precipitação, temperatura máxima média e umidade relativa, com preditores padronizados;
- PCA com variáveis padronizadas, scores anuais, variância explicada e cargas;
- bloco automático de principais achados.

## Próximas camadas

Ainda não são apresentadas como dados incorporados:

- superfície hídrica e hidroperíodo;
- uso e cobertura da terra;
- área queimada e frequência de fogo;
- CDD / dias secos;
- VPD;
- NDVI/EVI;
- vegetação secundária;
- carbono orgânico do solo.

Esses módulos serão adicionados apenas quando as respectivas séries municipais estiverem efetivamente disponíveis.

## Nota de interpretação

Correlação não implica causalidade. Focos de calor também não equivalem a área queimada. A regressão múltipla e a PCA são tratadas como análises exploratórias no painel.

Projeto para pesquisa, ensino e comunicação científica da UNEMAT.