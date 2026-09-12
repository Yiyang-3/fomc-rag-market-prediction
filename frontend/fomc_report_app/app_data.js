window.FOMC_REPORT_DATA = {
  "metadata": {
    "title": "FOMC Multi-Asset Forecast Workbench",
    "model_family": "hgbdt",
    "feature_set": "fusion",
    "model_label": "hgbdt/fusion",
    "parameter_source": "baseline_tuning_20260525_221743/baseline_best_params.csv",
    "experiment_name": "experiment_20260525_230248_hgbdt",
    "experiment_created_at": "2026-05-25T23:26:44",
    "generated_from": "frontend/fomc_report_app/demo_data"
  },
  "default_user_question": "What are the short-term return directions and risks for SPY, QQQ, GLD, and UUP after this FOMC event?",
  "current_fomc_event": {
    "event_id": "FOMC_0002",
    "date": "2026-03-18",
    "meeting_type": "Statement",
    "statement_excerpt": "Available indicators suggest that economic activity has been expanding at a solid pace. Job gains have remained low, and the unemployment rate has been little changed in recent months. Inflation remains somewhat elevated. The Committee seeks to achieve maximum employment and inflation at the rate of 2 percent over the longer run. Uncertainty about the economic outlook remains elevated. The implications of developments in the Middle East for the U.S. economy are uncertain. The Committee is attentive to the risks to both sides of its dual mandate. In support of its goals, the Committee decided to maintain the target range for the federal funds rate at 3-1/2 to 3-3/4 percent. In considering the extent and timing of additional adjustments to the target range for the federal...",
    "statement_text": "Available indicators suggest that economic activity has been expanding at a solid pace. Job gains have remained low, and the unemployment rate has been little changed in recent months. Inflation remains somewhat elevated. The Committee seeks to achieve maximum employment and inflation at the rate of 2 percent over the longer run. Uncertainty about the economic outlook remains elevated. The implications of developments in the Middle East for the U.S. economy are uncertain. The Committee is attentive to the risks to both sides of its dual mandate. In support of its goals, the Committee decided to maintain the target range for the federal funds rate at 3-1/2 to 3-3/4 percent. In considering the extent and timing of additional adjustments to the target range for the federal funds rate, the Committee will carefully assess incoming data, the evolving outlook, and the balance of risks. The Committee is strongly committed to supporting maximum employment and returning inflation to its 2 percent objective. In assessing the appropriate stance of monetary policy, the Committee will continue to monitor the implications of incoming information for the economic outlook. The Committee would be prepared to adjust the stance of monetary policy as appropriate if risks emerge that could impede the attainment of the Committee's goals. The Committee's assessments will take into account a wide range of information, including readings on labor market conditions, inflation pressures and inflation expectations, and financial and international developments. Voting for the monetary policy action were Jerome H. Powell, Chair; John C. Williams, Vice Chair; Michael S. Barr; Michelle W. Bowman; Lisa D. Cook; Beth M. Hammack; Philip N. Jefferson; Neel Kashkari; Lorie K. Logan; Anna Paulson; and Christopher J. Waller. Voting against this action was Stephen I. Miran, who preferred to lower the target range for the federal funds rate by 1/4 percentage point at this meeting. For media inquiries, please email [email protected] or call 202-452-2955. Implementation Note issued March 18, 2026",
    "previous_statement_text": "Available indicators suggest that economic activity has been expanding at a solid pace. Job gains have remained low, and the unemployment rate has shown some signs of stabilization. Inflation remains somewhat elevated. The Committee seeks to achieve maximum employment and inflation at the rate of 2 percent over the longer run. Uncertainty about the economic outlook remains elevated. The Committee is attentive to the risks to both sides of its dual mandate. In support of its goals, the Committee decided to maintain the target range for the federal funds rate at 3-1/2 to 3-3/4 percent. In considering the extent and timing of additional adjustments to the target range for the federal funds rate, the Committee will carefully assess incoming data, the evolving outlook, and the balance of risks. The Committee is strongly committed to supporting maximum employment and returning inflation to its 2 percent objective. In assessing the appropriate stance of monetary policy, the Committee will continue to monitor the implications of incoming information for the economic outlook. The Committee would be prepared to adjust the stance of monetary policy as appropriate if risks emerge that could impede the attainment of the Committee's goals. The Committee's assessments will take into account a wide range of information, including readings on labor market conditions, inflation pressures and inflation expectations, and financial and international developments. Voting for the monetary policy action were Jerome H. Powell, Chair; John C. Williams, Vice Chair; Michael S. Barr; Michelle W. Bowman; Lisa D. Cook; Beth M. Hammack; Philip N. Jefferson; Neel Kashkari; Lorie K. Logan; and Anna Paulson. Voting against this action were Stephen I. Miran and Christopher J. Waller, who preferred to lower the target range for the federal funds rate by 1/4 percentage point at this meeting. For media inquiries, please email [email protected] or call 202-452-2955. Implementation Note issued January 28, 2026",
    "market_state": {
      "DX-Y.NYB": 112.17,
      "^VIX": 25.09,
      "DGS2": 3.76,
      "DGS10": 4.26,
      "CPIAUCSL": 330.293,
      "UNRATE": 4.3,
      "PAYEMS": 158637.0,
      "T10Y2Y": 0.5,
      "BAA10Y": 1.81,
      "UUP_volume": 4280000.0,
      "SPY_volume": 82060000.0,
      "GLD_volume": 18375600.0,
      "QQQ_volume": 56130000.0
    }
  },
  "policy_shock_vector": [
    {
      "key": "interest_rate_path",
      "label": "Interest Rate Path",
      "direction": "dovish",
      "strength": 2.0,
      "confidence": "medium",
      "evidence": "Voting against this action was Stephen I. Miran (vs. previous: Voting against this action were Stephen I. Miran and Christopher J. Waller)"
    },
    {
      "key": "inflation_concern",
      "label": "Inflation Concern",
      "direction": "neutral",
      "strength": 1.0,
      "confidence": "high",
      "evidence": "Inflation remains somewhat elevated (identical in both statements)"
    },
    {
      "key": "growth_concern",
      "label": "Growth Concern",
      "direction": "dovish",
      "strength": 2.0,
      "confidence": "medium",
      "evidence": "The implications of developments in the Middle East for the U.S. economy are uncertain (added in current statement)"
    },
    {
      "key": "labor_market",
      "label": "Labor Market",
      "direction": "dovish",
      "strength": 1.0,
      "confidence": "medium",
      "evidence": "the unemployment rate has been little changed in recent months (vs. previous: the unemployment rate has shown some signs of stabilization)"
    },
    {
      "key": "financial_stability",
      "label": "Financial Stability",
      "direction": "neutral",
      "strength": 1.0,
      "confidence": "high",
      "evidence": "No material change in financial conditions language"
    }
  ],
  "historical_similar_cases": [
    {
      "rank": 1,
      "event_id": "FOMC_0013",
      "date": "2025-06-18",
      "similarity": 0.9257,
      "shock_cosine": 0.6667,
      "evidence_cosine": 0.1172,
      "semantic_similarity": 0.9257,
      "macro_mean_abs_z_diff": 0.14,
      "statement_excerpt": "Although swings in net exports have affected the data, recent indicators suggest that economic activity has continued to expand at a solid pace. The unemployment rate remains low, and labor market conditions remain solid. Inflation remains somewhat elevated. The Committee seeks to achieve maximum employment and inflation at the rate of 2 percent over the longer run. Uncertainty about the economic outlook has diminished but remains elevated. The Committee is attentive to the risks to both sides of its dual mandate. In support of its goals, the Committee decided to maintain the target range for the federal funds rate at 4-1/4 to 4-1/2 percent. In considering the extent and timing of additional adjustments to the target range for the federal funds rate, the Committee will carefully assess incoming data, the evolving outlook, and the balance of risks. The Committee will continue reducing its holdings of Treasury securities and agency debt and agency mortgage-backed securities. The Committee is strongly committed to supporting maximum employment and returning inflation to its 2 percent objective. In assessing the appropriate stance of monetary policy, the Committee will continue to monitor the implications of incoming information for the economic outlook. The Committee would be prepar...",
      "previous_statement_excerpt": "Although swings in net exports have affected the data, recent indicators suggest that economic activity has continued to expand at a solid pace. The unemployment rate has stabilized at a low level in recent months, and labor market conditions remain solid. Inflation remains somewhat elevated. The Committee seeks to achieve maximum employment and inflation at the rate of 2 percent over the longer run. Uncertainty about the economic outlook has increased further. The Committee is attentive to the risks to both sides of its dual mandate and judges that the risks of higher unemployment and higher inflation have risen. In support of its goals, the Committee decided to maintain the target range for the federal funds rate at 4-1/4 to 4-1/2 percent. In considering the extent and timing of additional adjustments to the target range for the federal funds rate, the Committee will carefully assess i...",
      "shock_evidence": {
        "interest_rate_path": {
          "direction": "neutral",
          "strength": 1.0,
          "confidence": "high",
          "evidence": "The Committee decided to maintain the target range for the federal funds rate at 4-1/4 to 4-1/2 percent."
        },
        "inflation_concern": {
          "direction": "neutral",
          "strength": 1.0,
          "confidence": "high",
          "evidence": "Inflation remains somewhat elevated."
        },
        "growth_concern": {
          "direction": "dovish",
          "strength": 2.0,
          "confidence": "medium",
          "evidence": "Uncertainty about the economic outlook has diminished but remains elevated."
        },
        "labor_market": {
          "direction": "neutral",
          "strength": 1.0,
          "confidence": "high",
          "evidence": "The unemployment rate remains low, and labor market conditions remain solid."
        },
        "financial_stability": {
          "direction": "neutral",
          "strength": 1.0,
          "confidence": "medium",
          "evidence": "No material change in language regarding financial conditions or developments."
        }
      },
      "returns_pct": {
        "SPY": -0.02,
        "QQQ": -0.02,
        "GLD": -0.54,
        "UUP": 0.18
      }
    },
    {
      "rank": 2,
      "event_id": "FOMC_0027",
      "date": "2024-07-31",
      "similarity": 0.9225,
      "shock_cosine": 0.5659,
      "evidence_cosine": 0.0937,
      "semantic_similarity": 0.9225,
      "macro_mean_abs_z_diff": 0.3495,
      "statement_excerpt": "Recent indicators suggest that economic activity has continued to expand at a solid pace. Job gains have moderated, and the unemployment rate has moved up but remains low. Inflation has eased over the past year but remains somewhat elevated. In recent months, there has been some further progress toward the Committee's 2 percent inflation objective. The Committee seeks to achieve maximum employment and inflation at the rate of 2 percent over the longer run. The Committee judges that the risks to achieving its employment and inflation goals continue to move into better balance. The economic outlook is uncertain, and the Committee is attentive to the risks to both sides of its dual mandate. In support of its goals, the Committee decided to maintain the target range for the federal funds rate at 5-1/4 to 5-1/2 percent. In considering any adjustments to the target range for the federal funds rate, the Committee will carefully assess incoming data, the evolving outlook, and the balance of risks. The Committee does not expect it will be appropriate to reduce the target range until it has gained greater confidence that inflation is moving sustainably toward 2 percent. In addition, the Committee will continue reducing its holdings of Treasury securities and agency debt and agency mortgage...",
      "previous_statement_excerpt": "Recent indicators suggest that economic activity has continued to expand at a solid pace. Job gains have remained strong, and the unemployment rate has remained low. Inflation has eased over the past year but remains elevated. In recent months, there has been modest further progress toward the Committee's 2 percent inflation objective. The Committee seeks to achieve maximum employment and inflation at the rate of 2 percent over the longer run. The Committee judges that the risks to achieving its employment and inflation goals have moved toward better balance over the past year. The economic outlook is uncertain, and the Committee remains highly attentive to inflation risks. In support of its goals, the Committee decided to maintain the target range for the federal funds rate at 5-1/4 to 5-1/2 percent. In considering any adjustments to the target range for the federal funds rate, the Comm...",
      "shock_evidence": {
        "interest_rate_path": {
          "direction": "neutral",
          "strength": 1.0,
          "confidence": "high",
          "evidence": "The Committee decided to maintain the target range for the federal funds rate at 5-1/4 to 5-1/2 percent. The Committee does not expect it will be appropriate to reduce the target range until it has gained greater confidence that inflation is moving sustainably toward 2 percent."
        },
        "inflation_concern": {
          "direction": "dovish",
          "strength": 2.0,
          "confidence": "high",
          "evidence": "Previous: 'Inflation has eased over the past year but remains elevated.' Current: 'Inflation has eased over the past year but remains somewhat elevated.'"
        },
        "growth_concern": {
          "direction": "dovish",
          "strength": 2.0,
          "confidence": "high",
          "evidence": "Previous: 'The economic outlook is uncertain, and the Committee remains highly attentive to inflation risks.' Current: 'The economic outlook is uncertain, and the Committee is attentive to the risks to both sides of its dual mandate.'"
        },
        "labor_market": {
          "direction": "dovish",
          "strength": 3.0,
          "confidence": "high",
          "evidence": "Previous: 'Job gains have remained strong, and the unemployment rate has remained low.' Current: 'Job gains have moderated, and the unemployment rate has moved up but remains low.'"
        },
        "financial_stability": {
          "direction": "neutral",
          "strength": 1.0,
          "confidence": "high",
          "evidence": "No material change in language regarding financial conditions, credit, or banking stress. The Committee's assessments continue to take into account 'financial and international developments'."
        }
      },
      "returns_pct": {
        "SPY": 1.63,
        "QQQ": 2.96,
        "GLD": 1.81,
        "UUP": -0.55
      }
    },
    {
      "rank": 3,
      "event_id": "FOMC_0011",
      "date": "2025-07-30",
      "similarity": 0.9211,
      "shock_cosine": 0.9245,
      "evidence_cosine": 0.1076,
      "semantic_similarity": 0.9211,
      "macro_mean_abs_z_diff": 0.1921,
      "statement_excerpt": "Although swings in net exports continue to affect the data, recent indicators suggest that growth of economic activity moderated in the first half of the year. The unemployment rate remains low, and labor market conditions remain solid. Inflation remains somewhat elevated. The Committee seeks to achieve maximum employment and inflation at the rate of 2 percent over the longer run. Uncertainty about the economic outlook remains elevated. The Committee is attentive to the risks to both sides of its dual mandate. In support of its goals, the Committee decided to maintain the target range for the federal funds rate at 4-1/4 to 4-1/2 percent. In considering the extent and timing of additional adjustments to the target range for the federal funds rate, the Committee will carefully assess incoming data, the evolving outlook, and the balance of risks. The Committee will continue reducing its holdings of Treasury securities and agency debt and agency mortgage-backed securities. The Committee is strongly committed to supporting maximum employment and returning inflation to its 2 percent objective. In assessing the appropriate stance of monetary policy, the Committee will continue to monitor the implications of incoming information for the economic outlook. The Committee would be prepared t...",
      "previous_statement_excerpt": "Although swings in net exports have affected the data, recent indicators suggest that economic activity has continued to expand at a solid pace. The unemployment rate remains low, and labor market conditions remain solid. Inflation remains somewhat elevated. The Committee seeks to achieve maximum employment and inflation at the rate of 2 percent over the longer run. Uncertainty about the economic outlook has diminished but remains elevated. The Committee is attentive to the risks to both sides of its dual mandate. In support of its goals, the Committee decided to maintain the target range for the federal funds rate at 4-1/4 to 4-1/2 percent. In considering the extent and timing of additional adjustments to the target range for the federal funds rate, the Committee will carefully assess incoming data, the evolving outlook, and the balance of risks. The Committee will continue reducing its...",
      "shock_evidence": {
        "interest_rate_path": {
          "direction": "dovish",
          "strength": 2.0,
          "confidence": "medium",
          "evidence": "Two dissenters 'preferred to lower the target range for the federal funds rate'"
        },
        "inflation_concern": {
          "direction": "neutral",
          "strength": 1.0,
          "confidence": "high",
          "evidence": "Inflation remains somewhat elevated (identical phrasing)"
        },
        "growth_concern": {
          "direction": "dovish",
          "strength": 3.0,
          "confidence": "high",
          "evidence": "Previous: 'economic activity has continued to expand at a solid pace'; Current: 'growth of economic activity moderated in the first half of the year'"
        },
        "labor_market": {
          "direction": "neutral",
          "strength": 1.0,
          "confidence": "high",
          "evidence": "The unemployment rate remains low, and labor market conditions remain solid (identical phrasing)"
        },
        "financial_stability": {
          "direction": "neutral",
          "strength": 1.0,
          "confidence": "high",
          "evidence": "No change in language regarding financial conditions or developments"
        }
      },
      "returns_pct": {
        "SPY": -0.13,
        "QQQ": 0.13,
        "GLD": -1.73,
        "UUP": 0.98
      }
    }
  ],
  "rag_retrieval_logic": {
    "title": "RAG Historical-Case Retrieval Logic",
    "method_summary": "The event is represented by a policy-shock vector, shock-evidence text, a statement embedding, and macro-market state. Retrieval finds historical meetings that are jointly similar and converts their asset-return distributions into numeric case-memory features.",
    "retrieval_signals": [
      {
        "name": "shock_cosine",
        "meaning": "Cosine similarity between the current and historical five-dimensional policy-shock vectors."
      },
      {
        "name": "evidence_cosine",
        "meaning": "Semantic similarity between current and historical shock-evidence text."
      },
      {
        "name": "embedding_cosine_semantic",
        "meaning": "Semantic similarity between complete FOMC statements."
      },
      {
        "name": "macro_mean_abs_z_diff",
        "meaning": "Mean standardized macro-state distance; lower values indicate closer conditions."
      },
      {
        "name": "similarity_for_baseline",
        "meaning": "Composite similarity used for ranking and return weighting."
      }
    ],
    "case_memory_features": [
      "case_pred_{asset}_ret: similarity-weighted historical return",
      "case_up_prob_{asset}: weighted probability of a positive historical return",
      "case_std_{asset}: dispersion of historical case returns",
      "case_direction_agreement_{asset}: historical direction agreement",
      "case_avg_similarity / case_max_similarity / case_similarity_std: similarity structure of the case set"
    ],
    "fusion_usage": "HGBDT/fusion combines numeric case-memory features with macro variables, shock main effects, and shock interactions to estimate direction, return magnitude, and 90% prediction intervals.",
    "current_case_reading": [
      "Top 1, FOMC_0013: overall similarity 0.9257, shock similarity 0.6667, evidence similarity 0.1172, macro distance 0.1400.",
      "Top 2, FOMC_0027: overall similarity 0.9225, shock similarity 0.5659, evidence similarity 0.0937, macro distance 0.3495.",
      "Top 3, FOMC_0011: overall similarity 0.9211, shock similarity 0.9245, evidence similarity 0.1076, macro distance 0.1921."
    ],
    "interpretation_boundary": "Retrieval already uses shock information. RAG case memory therefore describes how markets reacted after events with similar shocks and macro states; it is not an independent text-only control."
  },
  "llm_logic_chain_report": {
    "status": "generated",
    "content": "# RAG Historical-Case Logic-Chain Report\n\n**Current event:** FOMC_0002 — 18 March 2026  \n**Model:** HGBDT / fusion\n\n## 1. Core predictions\n\n| Asset | Direction | Predicted return | 90% interval |\n|---|---|---:|---:|\n| SPY | Down | −0.35% | [−2.76%, 2.05%] |\n| QQQ | Up | 0.09% | [−3.83%, 4.02%] |\n| GLD | Up | 0.05% | [−2.60%, 2.70%] |\n| UUP | Up | 0.04% | [−1.03%, 1.12%] |\n\nAll four intervals include zero, so the point directions should be treated as low-confidence signals rather than strong market calls.\n\n## 2. Policy shocks and transmission\n\nThe statement keeps the policy rate unchanged. Relative to the preceding statement, softer labor-market wording and additional uncertainty around the growth outlook create a mildly dovish signal. Inflation language is broadly unchanged and continues to constrain the scope for easing.\n\n- **SPY:** the growth-risk signal offsets some support from a softer rate path, producing a small negative point forecast.\n- **QQQ:** greater rate sensitivity provides modest support, but uncertainty keeps the point estimate near zero.\n- **GLD:** softer rate expectations and uncertainty are consistent with a small safe-haven effect.\n- **UUP:** the rate-path signal and safe-haven demand point in opposite directions; the model produces a near-zero positive estimate.\n\n## 3. Retrieved historical cases\n\nRetrieval combines statement semantics, structured shock similarity, evidence similarity, and distance in macro-market state.\n\n| Rank | Event | Overall similarity | Shock similarity | Macro distance | SPY | QQQ | GLD | UUP |\n|---:|---|---:|---:|---:|---:|---:|---:|---:|\n| 1 | FOMC_0013, 18 Jun 2025 | 0.9257 | 0.6667 | 0.1400 | −0.02% | −0.02% | −0.54% | 0.18% |\n| 2 | FOMC_0027, 31 Jul 2024 | 0.9225 | 0.5659 | 0.3495 | 1.63% | 2.96% | 1.81% | −0.55% |\n| 3 | FOMC_0011, 30 Jul 2025 | 0.9211 | 0.9245 | 0.1921 | −0.13% | 0.13% | −1.73% | 0.98% |\n\nThe cases agree more clearly on modest SPY weakness and UUP strength than on QQQ or GLD. Conflicting historical reactions help explain the wide intervals and small point forecasts.\n\n## 4. Evidence and uncertainty\n\nThe current event's best overall semantic match is FOMC_0013, while FOMC_0011 has the strongest shock-vector match. FOMC_0027 provides a more strongly dovish comparison but is farther away in macro state. No retrieved event reproduces the current combination of language and conditions exactly.\n\nBacktest direction accuracy for HGBDT/fusion is 55.94%, balanced accuracy is 54.21%, and overall 90% interval coverage is 91.77%. These figures indicate modest predictive information with substantial remaining error.\n\n## 5. Model boundary\n\nHistorical similarity does not imply causal repetition. Case memory is constructed from shock-aware retrieval, so it is not independent of the shock features. Point forecasts and intervals depend on the archived sample, feature definitions, model selection, and calibration window. This report is a research demonstration and does not constitute investment advice.\n\n## Appendix: model path\n\nThe HGBDT/fusion model combines macro-market variables, derived market states, policy-shock main effects, shock interactions, and numeric RAG case-memory features. Case-memory inputs include similarity-weighted returns, upside probabilities, dispersion, direction agreement, and similarity summaries. Raw case narratives do not enter the supervised model directly.\n",
    "source_file": "frontend/fomc_report_app/llm_logic_chain_report.md",
    "message": "Loaded the archived English RAG logic-chain report."
  },
  "multi_asset_predictions": [
    {
      "asset": "SPY",
      "target": "SPY_ret",
      "label": "S&P 500 ETF",
      "predicted_return": -0.003531,
      "predicted_return_pct": -0.35,
      "direction": "down",
      "direction_label": "Down",
      "prob_up": 0.371,
      "prob_up_pct": 37.1,
      "confidence": 1.0,
      "confidence_pct": 100.0,
      "interval_90_low": -0.027583,
      "interval_90_high": 0.02052,
      "interval_90_low_pct": -2.76,
      "interval_90_high_pct": 2.05,
      "interval_width_pct": 4.81,
      "case_avg_similarity": 0.9231,
      "case_neighbor_count": 3.0
    },
    {
      "asset": "QQQ",
      "target": "QQQ_ret",
      "label": "Nasdaq 100 ETF",
      "predicted_return": 0.000927,
      "predicted_return_pct": 0.09,
      "direction": "up",
      "direction_label": "Up",
      "prob_up": 0.4772,
      "prob_up_pct": 47.7,
      "confidence": 1.0,
      "confidence_pct": 100.0,
      "interval_90_low": -0.038321,
      "interval_90_high": 0.040175,
      "interval_90_low_pct": -3.83,
      "interval_90_high_pct": 4.02,
      "interval_width_pct": 7.85,
      "case_avg_similarity": 0.9231,
      "case_neighbor_count": 3.0
    },
    {
      "asset": "GLD",
      "target": "GLD_ret",
      "label": "Gold ETF",
      "predicted_return": 0.000526,
      "predicted_return_pct": 0.05,
      "direction": "up",
      "direction_label": "Up",
      "prob_up": 0.3737,
      "prob_up_pct": 37.4,
      "confidence": 1.0,
      "confidence_pct": 100.0,
      "interval_90_low": -0.025968,
      "interval_90_high": 0.02702,
      "interval_90_low_pct": -2.6,
      "interval_90_high_pct": 2.7,
      "interval_width_pct": 5.3,
      "case_avg_similarity": 0.9231,
      "case_neighbor_count": 3.0
    },
    {
      "asset": "UUP",
      "target": "UUP_ret",
      "label": "US Dollar Index ETF",
      "predicted_return": 0.000441,
      "predicted_return_pct": 0.04,
      "direction": "up",
      "direction_label": "Up",
      "prob_up": 0.6854,
      "prob_up_pct": 68.5,
      "confidence": 1.0,
      "confidence_pct": 100.0,
      "interval_90_low": -0.01033,
      "interval_90_high": 0.011212,
      "interval_90_low_pct": -1.03,
      "interval_90_high_pct": 1.12,
      "interval_width_pct": 2.15,
      "case_avg_similarity": 0.9231,
      "case_neighbor_count": 3.0
    }
  ],
  "model_evaluation": {
    "summary": {
      "model": "hgbdt/fusion",
      "direction_accuracy": 0.5594,
      "balanced_direction_accuracy": 0.5421,
      "MAE": 0.01027,
      "RMSE": 0.0151,
      "coverage_90": 0.9177,
      "avg_interval_width": 0.0558
    },
    "by_asset": [
      {
        "asset": "GLD",
        "n_test": 120,
        "direction_accuracy": 0.5333,
        "balanced_direction_accuracy": 0.5219,
        "MAE": 0.01143,
        "RMSE": 0.01485,
        "coverage_90": 0.9,
        "avg_interval_width": 0.05614
      },
      {
        "asset": "QQQ",
        "n_test": 148,
        "direction_accuracy": 0.6081,
        "balanced_direction_accuracy": 0.5705,
        "MAE": 0.01333,
        "RMSE": 0.02116,
        "coverage_90": 0.9122,
        "avg_interval_width": 0.07851
      },
      {
        "asset": "SPY",
        "n_test": 148,
        "direction_accuracy": 0.5541,
        "balanced_direction_accuracy": 0.5498,
        "MAE": 0.01109,
        "RMSE": 0.01725,
        "coverage_90": 0.9054,
        "avg_interval_width": 0.06347
      },
      {
        "asset": "UUP",
        "n_test": 107,
        "direction_accuracy": 0.5421,
        "balanced_direction_accuracy": 0.5262,
        "MAE": 0.00522,
        "RMSE": 0.00713,
        "coverage_90": 0.9533,
        "avg_interval_width": 0.02508
      }
    ],
    "segments": [
      {
        "segment": "2008_2015",
        "asset": "GLD",
        "n_test": 35,
        "direction_accuracy": 0.4857,
        "MAE": 0.0127,
        "coverage_90": 0.8857
      },
      {
        "segment": "2008_2015",
        "asset": "QQQ",
        "n_test": 63,
        "direction_accuracy": 0.619,
        "MAE": 0.01336,
        "coverage_90": 0.9524
      },
      {
        "segment": "2008_2015",
        "asset": "SPY",
        "n_test": 63,
        "direction_accuracy": 0.5397,
        "MAE": 0.01287,
        "coverage_90": 0.9048
      },
      {
        "segment": "2008_2015",
        "asset": "UUP",
        "n_test": 22,
        "direction_accuracy": 0.4091,
        "MAE": 0.00659,
        "coverage_90": 0.9091
      },
      {
        "segment": "2016_2019",
        "asset": "GLD",
        "n_test": 33,
        "direction_accuracy": 0.5455,
        "MAE": 0.00904,
        "coverage_90": 0.9697
      },
      {
        "segment": "2016_2019",
        "asset": "QQQ",
        "n_test": 33,
        "direction_accuracy": 0.5152,
        "MAE": 0.00885,
        "coverage_90": 0.9697
      },
      {
        "segment": "2016_2019",
        "asset": "SPY",
        "n_test": 33,
        "direction_accuracy": 0.5152,
        "MAE": 0.00618,
        "coverage_90": 0.9394
      },
      {
        "segment": "2016_2019",
        "asset": "UUP",
        "n_test": 33,
        "direction_accuracy": 0.7273,
        "MAE": 0.00409,
        "coverage_90": 1.0
      },
      {
        "segment": "2020_2021",
        "asset": "GLD",
        "n_test": 18,
        "direction_accuracy": 0.6667,
        "MAE": 0.01197,
        "coverage_90": 0.9444
      },
      {
        "segment": "2020_2021",
        "asset": "QQQ",
        "n_test": 18,
        "direction_accuracy": 0.8333,
        "MAE": 0.01612,
        "coverage_90": 0.8333
      },
      {
        "segment": "2020_2021",
        "asset": "SPY",
        "n_test": 18,
        "direction_accuracy": 0.6111,
        "MAE": 0.01675,
        "coverage_90": 0.8889
      },
      {
        "segment": "2020_2021",
        "asset": "UUP",
        "n_test": 18,
        "direction_accuracy": 0.6111,
        "MAE": 0.00502,
        "coverage_90": 0.9444
      },
      {
        "segment": "2022_2026",
        "asset": "GLD",
        "n_test": 34,
        "direction_accuracy": 0.5,
        "MAE": 0.01216,
        "coverage_90": 0.8235
      },
      {
        "segment": "2022_2026",
        "asset": "QQQ",
        "n_test": 34,
        "direction_accuracy": 0.5588,
        "MAE": 0.01616,
        "coverage_90": 0.8235
      },
      {
        "segment": "2022_2026",
        "asset": "SPY",
        "n_test": 34,
        "direction_accuracy": 0.5882,
        "MAE": 0.00955,
        "coverage_90": 0.8824
      },
      {
        "segment": "2022_2026",
        "asset": "UUP",
        "n_test": 34,
        "direction_accuracy": 0.4118,
        "MAE": 0.00553,
        "coverage_90": 0.9412
      }
    ]
  },
  "tuned_parameters": {
    "GLD_ret": {
      "regression": {
        "selection_metric": "MAE",
        "params": {
          "model__l2_regularization": 1.0,
          "model__learning_rate": 0.06,
          "model__max_iter": 100,
          "model__max_leaf_nodes": 4,
          "model__min_samples_leaf": 10
        }
      },
      "classification": {
        "selection_metric": "balanced_accuracy",
        "params": {
          "model__l2_regularization": 0.0,
          "model__learning_rate": 0.06,
          "model__max_iter": 40,
          "model__max_leaf_nodes": 8,
          "model__min_samples_leaf": 5
        }
      }
    },
    "QQQ_ret": {
      "regression": {
        "selection_metric": "MAE",
        "params": {
          "model__l2_regularization": 1.0,
          "model__learning_rate": 0.03,
          "model__max_iter": 100,
          "model__max_leaf_nodes": 4,
          "model__min_samples_leaf": 5
        }
      },
      "classification": {
        "selection_metric": "balanced_accuracy",
        "params": {
          "model__l2_regularization": 0.0,
          "model__learning_rate": 0.03,
          "model__max_iter": 40,
          "model__max_leaf_nodes": 4,
          "model__min_samples_leaf": 5
        }
      }
    },
    "SPY_ret": {
      "regression": {
        "selection_metric": "MAE",
        "params": {
          "model__l2_regularization": 1.0,
          "model__learning_rate": 0.06,
          "model__max_iter": 60,
          "model__max_leaf_nodes": 8,
          "model__min_samples_leaf": 5
        }
      },
      "classification": {
        "selection_metric": "balanced_accuracy",
        "params": {
          "model__l2_regularization": 1.0,
          "model__learning_rate": 0.06,
          "model__max_iter": 100,
          "model__max_leaf_nodes": 4,
          "model__min_samples_leaf": 10
        }
      }
    },
    "UUP_ret": {
      "regression": {
        "selection_metric": "MAE",
        "params": {
          "model__l2_regularization": 0.0,
          "model__learning_rate": 0.03,
          "model__max_iter": 40,
          "model__max_leaf_nodes": 4,
          "model__min_samples_leaf": 20
        }
      },
      "classification": {
        "selection_metric": "balanced_accuracy",
        "params": {
          "model__l2_regularization": 0.0,
          "model__learning_rate": 0.06,
          "model__max_iter": 40,
          "model__max_leaf_nodes": 8,
          "model__min_samples_leaf": 5
        }
      }
    }
  },
  "risk_disclosures": [
    "Research demonstration only; not investment advice.",
    "HGBDT/fusion is trained on historical FOMC events and cannot ensure future events follow the same distribution.",
    "Rolling conformal 90% intervals may understate tail risk in extreme market states.",
    "RAG case memory uses shock-aware retrieval and is not independent of the policy-shock representation."
  ],
  "report_contract": {
    "required_inputs": [
      "user_question",
      "current_fomc_event",
      "policy_shock_vector",
      "historical_similar_cases",
      "rag_retrieval_logic",
      "llm_logic_chain_report",
      "multi_asset_predictions",
      "quantitative_metrics",
      "model_evaluation",
      "risk_disclosures"
    ],
    "report_sections": [
      "Question",
      "Core predictions",
      "Multi-asset forecast",
      "Policy-shock decomposition",
      "Prediction logic chain",
      "Historical case evidence",
      "Uncertainty, risks, and model boundaries"
    ],
    "generation_rules": [
      "Use only structured inputs, model outputs, case excerpts, and evidence sentences.",
      "Do not invent FOMC language, returns, macro data, cases, or metrics.",
      "State explicitly when evidence is insufficient.",
      "Keep every direction, magnitude, interval, and confidence value consistent with multi_asset_predictions.",
      "Include model limitations and do not provide investment advice."
    ]
  },
  "materials": {
    "research_report_md": "docs/experiment_report_2.md",
    "research_report_pdf": "docs/experiment_report_latest_ablation.pdf",
    "prompt_template": "docs/prompts/fomc_user_report_prompt.md",
    "frontend_readme": "frontend/fomc_report_app/README.md"
  }
};
