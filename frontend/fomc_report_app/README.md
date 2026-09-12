# FOMC Report Interface

A local browser interface for reviewing an FOMC event, extracted policy shocks, retrieved historical cases, multi-asset predictions, model diagnostics, and an LLM-generated logic-chain report.

From the repository root, run:

```bash
python src/app/serve_frontend.py
```

Open `http://127.0.0.1:8000`. The interface loads archived demo data by default. Generating a new report requires the API configuration documented in the root README. Forecasts are for research demonstration only and are not investment advice.
