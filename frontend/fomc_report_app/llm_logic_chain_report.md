# RAG Historical-Case Logic-Chain Report

**Current event:** FOMC_0002 — 18 March 2026  
**Model:** HGBDT / fusion

## 1. Core predictions

| Asset | Direction | Predicted return | 90% interval |
|---|---|---:|---:|
| SPY | Down | −0.35% | [−2.76%, 2.05%] |
| QQQ | Up | 0.09% | [−3.83%, 4.02%] |
| GLD | Up | 0.05% | [−2.60%, 2.70%] |
| UUP | Up | 0.04% | [−1.03%, 1.12%] |

All four intervals include zero, so the point directions should be treated as low-confidence signals rather than strong market calls.

## 2. Policy shocks and transmission

The statement keeps the policy rate unchanged. Relative to the preceding statement, softer labor-market wording and additional uncertainty around the growth outlook create a mildly dovish signal. Inflation language is broadly unchanged and continues to constrain the scope for easing.

- **SPY:** the growth-risk signal offsets some support from a softer rate path, producing a small negative point forecast.
- **QQQ:** greater rate sensitivity provides modest support, but uncertainty keeps the point estimate near zero.
- **GLD:** softer rate expectations and uncertainty are consistent with a small safe-haven effect.
- **UUP:** the rate-path signal and safe-haven demand point in opposite directions; the model produces a near-zero positive estimate.

## 3. Retrieved historical cases

Retrieval combines statement semantics, structured shock similarity, evidence similarity, and distance in macro-market state.

| Rank | Event | Overall similarity | Shock similarity | Macro distance | SPY | QQQ | GLD | UUP |
|---:|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | FOMC_0013, 18 Jun 2025 | 0.9257 | 0.6667 | 0.1400 | −0.02% | −0.02% | −0.54% | 0.18% |
| 2 | FOMC_0027, 31 Jul 2024 | 0.9225 | 0.5659 | 0.3495 | 1.63% | 2.96% | 1.81% | −0.55% |
| 3 | FOMC_0011, 30 Jul 2025 | 0.9211 | 0.9245 | 0.1921 | −0.13% | 0.13% | −1.73% | 0.98% |

The cases agree more clearly on modest SPY weakness and UUP strength than on QQQ or GLD. Conflicting historical reactions help explain the wide intervals and small point forecasts.

## 4. Evidence and uncertainty

The current event's best overall semantic match is FOMC_0013, while FOMC_0011 has the strongest shock-vector match. FOMC_0027 provides a more strongly dovish comparison but is farther away in macro state. No retrieved event reproduces the current combination of language and conditions exactly.

Backtest direction accuracy for HGBDT/fusion is 55.94%, balanced accuracy is 54.21%, and overall 90% interval coverage is 91.77%. These figures indicate modest predictive information with substantial remaining error.

## 5. Model boundary

Historical similarity does not imply causal repetition. Case memory is constructed from shock-aware retrieval, so it is not independent of the shock features. Point forecasts and intervals depend on the archived sample, feature definitions, model selection, and calibration window. This report is a research demonstration and does not constitute investment advice.

## Appendix: model path

The HGBDT/fusion model combines macro-market variables, derived market states, policy-shock main effects, shock interactions, and numeric RAG case-memory features. Case-memory inputs include similarity-weighted returns, upside probabilities, dispersion, direction agreement, and similarity summaries. Raw case narratives do not enter the supervised model directly.
