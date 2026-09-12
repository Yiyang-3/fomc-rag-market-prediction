# FOMC RAG Predicting: Experiment Report

## Abstract

This study evaluates whether LLM-extracted policy shocks, shock-aware historical case memory, and their interactions improve forecasts of one-day asset returns after FOMC events. Targets are SPY, QQQ, GLD, and UUP. Expanding-window backtests compare Ridge, Lasso, ElasticNet, HistGradientBoosting, and XGBoost. Historical case memory produces the most stable average improvement in direction prediction: mean accuracy rises from 0.5218 for the baseline to 0.5424 for `rag_memory`. HGBDT/fusion reaches the highest average direction accuracy, 0.5594, while Lasso/fusion-case records the lowest RMSE, 0.0137, and narrowest average 90% interval, 0.0489.

## Research questions

1. Do policy-shock features add information beyond macro-financial variables?
2. Does memory from similar historical FOMC events provide a stable incremental signal?
3. How do model families differ in direction, magnitude error, and uncertainty calibration?

## Targets and backtest

| Asset | Target | Interpretation |
|---|---|---|
| SPY | `SPY_ret` | Broad US equity return |
| QQQ | `QQQ_ret` | Growth and technology equity return |
| GLD | `GLD_ret` | Gold return |
| UUP | `UUP_ret` | US-dollar ETF return |

At each event date, estimation uses only prior information. The archived tests contain 523 out-of-sample predictions: 148 each for SPY and QQQ, 120 for GLD, and 107 for UUP.

## Feature sets

| Output | Definition |
|---|---|
| `baseline` | Macro-financial variables and derived market states |
| `shock_main` | Baseline plus LLM policy-shock main effects |
| `shock_interactions` | Shock main plus shock–market-state interactions |
| `rag_memory` | Baseline plus historical case-memory features |
| `shock_rag` | Baseline plus shocks and case memory |
| `fusion` | Baseline, shocks, interactions, and case memory |
| `case_model` | Similarity-weighted historical returns |
| `fusion_case` | Combined fusion and case-model forecasts |

Case memory summarizes weighted historical returns, dispersion, upside probability, direction agreement, and similarity statistics. Retrieval is shock-aware, not a text-only control independent of shock features.

## Aggregate results

| Output | Direction accuracy | Balanced accuracy | MAE | RMSE | 90% coverage | Mean width |
|---|---:|---:|---:|---:|---:|---:|
| `baseline` | 0.5218 | 0.4950 | 0.0098 | 0.0143 | 0.9119 | 0.0511 |
| `shock_main` | 0.5188 | 0.4934 | 0.0101 | 0.0146 | 0.9137 | 0.0529 |
| `shock_interactions` | 0.5193 | 0.4943 | 0.0103 | 0.0149 | 0.9111 | 0.0536 |
| `rag_memory` | 0.5424 | 0.5172 | 0.0098 | 0.0144 | 0.9113 | 0.0520 |
| `shock_rag` | 0.5360 | 0.5105 | 0.0101 | 0.0146 | 0.9096 | 0.0530 |
| `fusion` | 0.5371 | 0.5125 | 0.0103 | 0.0150 | 0.9093 | 0.0542 |
| `case_model` | 0.4772 | 0.4600 | 0.0103 | 0.0149 | 0.9155 | 0.0530 |
| `fusion_case` | 0.5278 | 0.5015 | 0.0101 | 0.0146 | 0.9127 | 0.0529 |

Case memory improves average direction accuracy but does not universally reduce magnitude error. Directly adding shocks and interactions also does not guarantee improvement in a limited event sample.

## Representative models

| Family | Output | Direction accuracy | Balanced accuracy | MAE | RMSE | Coverage | Width |
|---|---|---:|---:|---:|---:|---:|---:|
| HGBDT | `fusion` | 0.5594 | 0.5421 | 0.0103 | 0.0151 | 0.9177 | 0.0558 |
| Ridge | `rag_memory` | 0.5585 | 0.5530 | 0.0105 | 0.0154 | 0.9088 | 0.0559 |
| HGBDT | `shock_rag` | 0.5558 | 0.5365 | 0.0101 | 0.0147 | 0.9137 | 0.0537 |
| Lasso | `shock_main` | 0.5484 | 0.5112 | 0.0094 | 0.0137 | 0.9101 | 0.0492 |
| Lasso | `fusion_case` | 0.5235 | 0.4893 | 0.0094 | 0.0137 | 0.9101 | 0.0489 |

HGBDT/fusion is strongest on direction, suggesting nonlinear interactions help combine macro states, policy shocks, and case memory. Lasso is more stable on magnitude error, consistent with stronger regularization in a small sample.

## Asset-level highlights

| Asset | Representative model | Direction accuracy | MAE | RMSE | Coverage |
|---|---|---:|---:|---:|---:|
| GLD | ElasticNet/rag-memory | 0.5833 | 0.0097 | 0.0127 | 0.9250 |
| QQQ | HGBDT/fusion | 0.6081 | 0.0133 | 0.0212 | 0.9122 |
| SPY | HGBDT/shock-rag | 0.5946 | 0.0104 | 0.0159 | 0.9054 |
| UUP | HGBDT/fusion-case | 0.5888 | 0.0052 | 0.0070 | 0.9439 |

## Ablation and interpretation

Relative to baseline, `rag_memory` changes direction accuracy by +0.0225 for Ridge, −0.0047 for Lasso, +0.0043 for ElasticNet, +0.0423 for HGBDT, and +0.0386 for XGBoost. The two nonlinear families also reduce MAE and RMSE. Permutation-importance outputs indicate that case-return and similarity statistics matter in strong RAG configurations, while growth and rate-path interactions become relevant in full fusion. These are predictive dependencies, not causal effects.

## Limitations

- The FOMC event sample is small and market reactions are noisy.
- Similar language does not imply identical transmission or causality.
- Shock features depend on model-based text judgments.
- Direction gains do not necessarily imply lower magnitude error.
- Interval calibration changes across macro regimes.
- Multiple comparisons increase selection risk.

## Conclusion

Historical case memory is the most consistent incremental source of direction information in the archived experiments. Nonlinear fusion is preferable when direction is the main objective; sparse linear models are more stable for magnitude. The evidence supports a multi-signal view of FOMC event forecasting rather than a single dominant factor.
