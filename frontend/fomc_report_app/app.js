const data = window.FOMC_REPORT_DATA;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const formatPct = (value, signed = false) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "NA";
  const sign = signed && Number(value) > 0 ? "+" : "";
  return `${sign}${Number(value).toFixed(2)}%`;
};

const formatNum = (value, digits = 4) => {
  if (value === null || value === undefined || Number.isNaN(Number(value))) return "NA";
  return Number(value).toFixed(digits);
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const activeInput = () => ({
  user_question: $("#question-input").value.trim(),
  current_fomc_event: {
    ...data.current_fomc_event,
    statement_text: $("#current-statement-input").value.trim(),
    previous_statement_text: $("#previous-statement-input").value.trim(),
    market_state: collectMarketState(),
  },
  policy_shock_vector: data.policy_shock_vector,
  historical_similar_cases: data.historical_similar_cases,
  rag_retrieval_logic: data.rag_retrieval_logic,
  llm_logic_chain_report: data.llm_logic_chain_report,
  multi_asset_predictions: data.multi_asset_predictions,
  quantitative_metrics: data.multi_asset_predictions.map((item) => ({
    asset: item.asset,
    predicted_return_pct: item.predicted_return_pct,
    interval_90_pct: [item.interval_90_low_pct, item.interval_90_high_pct],
  })),
  model_evaluation: data.model_evaluation,
  risk_disclosures: data.risk_disclosures,
});

function collectMarketState() {
  const currentState = data.current_fomc_event?.market_state || {};
  const out = {};
  Object.keys(currentState).forEach((key) => {
    const input = document.querySelector(`[data-market-key="${key}"]`);
    const raw = input ? input.value.trim() : "";
    out[key] = raw === "" ? currentState[key] : Number(raw);
  });
  return out;
}

function markdownLite(markdown) {
  const lines = String(markdown || "").replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let list = [];

  const inline = (text) =>
    escapeHtml(text)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
    list = [];
  };

  const isTableSeparator = (line) => /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
  const isTableRow = (line) => /^\s*\|.+\|\s*$/.test(line);

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line === "---" || line === "***") {
      flushParagraph();
      flushList();
      html.push("<hr>");
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      html.push(`<h4>${inline(line.slice(4))}</h4>`);
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      html.push(`<h3>${inline(line.slice(3))}</h3>`);
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      html.push(`<h2>${inline(line.slice(2))}</h2>`);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      list.push(line.replace(/^[-*]\s+/, ""));
      continue;
    }

    if (isTableRow(line)) {
      flushParagraph();
      flushList();
      const tableRows = [];

      while (i < lines.length && isTableRow(lines[i].trim())) {
        tableRows.push(lines[i].trim());
        i += 1;
      }
      i -= 1;

      const normalizedRows = tableRows.filter((row) => !isTableSeparator(row));
      const cells = normalizedRows.map((row) =>
        row
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map((cell) => cell.trim())
      );

      if (cells.length) {
        const [head, ...body] = cells;
        html.push(`
          <div class="markdown-table-wrap">
            <table class="markdown-table">
              <thead><tr>${head.map((cell) => `<th>${inline(cell)}</th>`).join("")}</tr></thead>
              <tbody>${body
                .map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`)
                .join("")}</tbody>
            </table>
          </div>
        `);
      }
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  return html.join("");
}

function exportLlmReportPdf() {
  const reportHtml = $("#llm-report").innerHTML;
  if (!reportHtml.trim()) {
    showToast("No report is available to export");
    return;
  }

  const title = `${data.current_fomc_event?.event_id || "FOMC"}_logic_chain_report`;
  const printWindow = window.open("", "_blank", "noopener,noreferrer,width=980,height=800");
  if (!printWindow) {
    showToast("The browser blocked the print window");
    return;
  }

  printWindow.document.write(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>${escapeHtml(title)}</title>
    <style>
      body { font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; margin: 32px; color: #17201b; line-height: 1.65; }
      h1,h2,h3,h4 { margin-top: 0; }
      h2 { font-size: 26px; margin-bottom: 18px; }
      h3 { font-size: 20px; margin: 24px 0 10px; }
      h4 { font-size: 16px; margin: 18px 0 8px; }
      p, li { font-size: 14px; }
      table { width: 100%; border-collapse: collapse; margin: 12px 0 20px; }
      th, td { border: 1px solid #d7d7d7; padding: 8px 10px; text-align: left; vertical-align: top; font-size: 13px; }
      th { background: #f5f5f5; }
      code { background: #f3f3f3; padding: 1px 4px; border-radius: 4px; }
      hr { border: none; border-top: 1px solid #ddd; margin: 22px 0; }
      .meta { color: #5f6b65; font-size: 12px; margin-bottom: 18px; }
      @page { size: A4; margin: 14mm; }
    </style>
  </head>
  <body>
    <h2>RAG Historical-Case Logic-Chain Report</h2>
    <div class="meta">${escapeHtml(data.current_fomc_event?.date || "")} ${escapeHtml(data.current_fomc_event?.event_id || "")}</div>
    ${reportHtml}
  </body>
</html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.onload = () => {
    printWindow.print();
  };
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1700);
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch {
    showToast("Clipboard access is unavailable");
  }
}

function renderOverview() {
  const event = data.current_fomc_event;
  $("#question-input").value = data.default_user_question;
  $("#current-statement-input").value = event.statement_text || event.statement_excerpt || "";
  $("#previous-statement-input").value = event.previous_statement_text || "";
  $("#event-title").textContent = `${event.date} ${event.event_id}`;
  $("#model-chip").textContent = data.metadata.model_label;
  $("#experiment-chip").textContent = data.metadata.experiment_name;

  $("#event-list").innerHTML = `
    <dt>Event ID</dt><dd>${escapeHtml(event.event_id)}</dd>
    <dt>Date</dt><dd>${escapeHtml(event.date)}</dd>
    <dt>Meeting type</dt><dd>${escapeHtml(event.meeting_type)}</dd>
    <dt>Parameter source</dt><dd>${escapeHtml(data.metadata.parameter_source)}</dd>
  `;
  $("#statement-excerpt").textContent = event.statement_excerpt;

  $("#market-state").innerHTML = Object.entries(event.market_state)
    .map(([key, value]) => `
      <div class="state-item">
        <span>${escapeHtml(key)}</span>
        <input
          class="state-input"
          type="number"
          step="0.001"
          data-market-key="${escapeHtml(key)}"
          value="${value ?? ""}"
        >
      </div>
    `)
    .join("");

  const evalSummary = data.model_evaluation.summary;
  const metrics = [
    ["Direction accuracy", `${formatNum(evalSummary.direction_accuracy * 100, 2)}%`],
    ["Balanced direction accuracy", `${formatNum(evalSummary.balanced_direction_accuracy * 100, 2)}%`],
    ["MAE", formatNum(evalSummary.MAE, 5)],
    ["RMSE", formatNum(evalSummary.RMSE, 5)],
    ["90% coverage", `${formatNum(evalSummary.coverage_90 * 100, 2)}%`],
    ["Mean interval width", `${formatNum(evalSummary.avg_interval_width * 100, 2)}%`],
  ];

  $("#metric-grid").innerHTML = metrics
    .map(([label, value]) => `
      <div class="metric">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `)
    .join("");
}

function replaceData(nextData) {
  Object.keys(data).forEach((key) => {
    delete data[key];
  });
  Object.assign(data, nextData);
}

function renderPredictions() {
  $("#asset-grid").innerHTML = data.multi_asset_predictions
    .map((item) => {
      const barWidth = Math.max(6, Math.min(100, Math.abs(item.predicted_return_pct) * 18));
      return `
        <article class="asset-card">
          <header>
            <div>
              <h3>${escapeHtml(item.asset)}</h3>
              <span>${escapeHtml(item.label)}</span>
            </div>
            <em class="direction ${item.direction}">${item.direction_label}</em>
          </header>
          <div class="return-value">${formatPct(item.predicted_return_pct, true)}</div>
          <div class="spark"><i style="width:${barWidth}%"></i></div>
          <span>90% interval ${formatPct(item.interval_90_low_pct, true)} to ${formatPct(item.interval_90_high_pct, true)}</span>
        </article>
      `;
    })
    .join("");

  $("#prediction-table").innerHTML = data.multi_asset_predictions
    .map((item) => `
      <tr>
        <td><strong>${escapeHtml(item.asset)}</strong><br><span>${escapeHtml(item.label)}</span></td>
        <td><em class="direction ${item.direction}">${item.direction_label}</em></td>
        <td>${formatPct(item.predicted_return_pct, true)}</td>
        <td>${formatPct(item.interval_90_low_pct, true)} to ${formatPct(item.interval_90_high_pct, true)}</td>
      </tr>
    `)
    .join("");

  const fields = [
    ["Model", data.model_evaluation.summary.model],
    ["Direction accuracy", `${formatNum(data.model_evaluation.summary.direction_accuracy * 100, 2)}%`],
    ["MAE", formatNum(data.model_evaluation.summary.MAE, 5)],
    ["RMSE", formatNum(data.model_evaluation.summary.RMSE, 5)],
    ["90% coverage", `${formatNum(data.model_evaluation.summary.coverage_90 * 100, 2)}%`],
    ["Mean interval width", `${formatNum(data.model_evaluation.summary.avg_interval_width * 100, 2)}%`],
  ];

  $("#evaluation-grid").innerHTML = fields
    .map(([label, value]) => `
      <div class="eval-item">
        <span>${label}</span>
        <strong>${value}</strong>
      </div>
    `)
    .join("");
}

function renderEvidence() {
  $("#shock-list").innerHTML = data.policy_shock_vector
    .map((item) => `
      <article class="shock-item">
        <div class="shock-top">
          <div>
            <strong>${escapeHtml(item.label)}</strong>
            <p class="evidence">${escapeHtml(item.evidence)}</p>
          </div>
          <span class="badge">${escapeHtml(item.direction)} · ${escapeHtml(item.confidence)}</span>
        </div>
        <span>Strength ${formatNum(item.strength, 1)}</span>
      </article>
    `)
    .join("");

  $("#case-list").innerHTML = data.historical_similar_cases
    .map((item) => `
      <article class="case-item">
        <div class="case-top">
          <div>
            <strong>#${item.rank} ${escapeHtml(item.event_id)}</strong>
            <p class="evidence">${escapeHtml(item.date)}</p>
          </div>
          <span class="badge">sim ${formatNum(item.similarity, 3)}</span>
        </div>
        <div class="case-metrics">
          <span>shock cosine ${formatNum(item.shock_cosine, 3)}</span>
          <span>evidence cosine ${formatNum(item.evidence_cosine, 3)}</span>
          <span>SPY ${formatPct(item.returns_pct.SPY, true)}</span>
          <span>QQQ ${formatPct(item.returns_pct.QQQ, true)}</span>
          <span>GLD ${formatPct(item.returns_pct.GLD, true)}</span>
          <span>UUP ${formatPct(item.returns_pct.UUP, true)}</span>
        </div>
      </article>
    `)
    .join("");

  const llm = data.llm_logic_chain_report;

  if (llm?.status === "generated" && llm.content) {
    $("#llm-report").innerHTML = `<div class="markdown-report">${markdownLite(llm.content)}</div>`;
  } else {
    $("#llm-report").innerHTML = `
      <div class="empty-report">
        <strong>No LLM logic-chain report has been generated</strong>
        <p>${escapeHtml(llm?.message || "Run the LLM report generator first.")}</p>
        <pre>export SJTU_API_KEY="YOUR_API_KEY"
python src/app/generate_logic_chain_report.py --model &lt;MODEL_NAME&gt;
python src/app/build_frontend_data.py</pre>
      </div>
    `;
  }

}

function renderLlmReport(content, status = "generated") {
  data.llm_logic_chain_report = {
    status,
    content,
    source_file: "frontend/fomc_report_app/llm_logic_chain_report.md",
    message: status === "generated" ? "Generated from a frontend request." : "",
  };
  $("#llm-report").innerHTML = `<div class="markdown-report">${markdownLite(content)}</div>`;
}

async function generateLlmReport() {
  const button = $("#generate-llm-report");
  const status = $("#generation-status");
  const userQuestion = $("#question-input").value.trim();
  const currentStatement = $("#current-statement-input").value.trim();
  const previousStatement = $("#previous-statement-input").value.trim();
  const marketState = collectMarketState();

  if (!userQuestion) {
    showToast("Enter a user question first");
    return;
  }

  if (!currentStatement) {
    showToast("Provide the current statement first");
    return;
  }

  button.disabled = true;
  button.textContent = "Generating...";
  status.textContent = "Running online retrieval, HGBDT/fusion prediction, and LLM generation...";

  try {
    const response = await fetch("/api/generate-logic-chain", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        user_question: userQuestion,
        current_statement_text: currentStatement,
        previous_statement_text: previousStatement,
        market_state: marketState,
        base_event_id: data.current_fomc_event.event_id,
        top_k_cases: 3,
        timeout: 600,
        retries: 1,
        max_tokens: 5000,
        model_family: "hgbdt",
      }),
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || `HTTP ${response.status}`);
    }

    if (result.frontend_data) {
      replaceData(result.frontend_data);
      renderOverview();
      renderPredictions();
      renderEvidence();
    }
    renderLlmReport(result.report);
    status.textContent = `Generated: ${result.model}; prompt ${result.prompt_chars} characters`;
    showToast("LLM logic-chain report generated");
  } catch (error) {
    status.textContent = `Generation failed: ${error.message}`;
    showToast("Generation failed; check the server and API key");
  } finally {
    button.disabled = false;
    button.textContent = "Retrieve cases, predict, and generate report";
  }
}

function reportTemplate() {
  const input = activeInput();

  if (input.llm_logic_chain_report?.status === "generated" && input.llm_logic_chain_report.content) {
    return input.llm_logic_chain_report.content;
  }

  const strongest = [...input.multi_asset_predictions].sort(
    (a, b) => Math.abs(b.predicted_return_pct) - Math.abs(a.predicted_return_pct)
  )[0];
  const rows = input.multi_asset_predictions
    .map(
      (item) =>
        `| ${item.asset} | ${item.direction_label} | ${formatPct(item.predicted_return_pct, true)} | ${formatPct(item.interval_90_low_pct, true)} to ${formatPct(item.interval_90_high_pct, true)} |`
    )
    .join("\n");

  const shockRows = input.policy_shock_vector
    .map(
      (item) =>
        `| ${item.label} | ${item.direction} | ${formatNum(item.strength, 1)} | ${item.confidence} | ${item.evidence} | Based on the evidence, this dimension is ${item.direction} with strength ${formatNum(item.strength, 1)}。 |`
    )
    .join("\n");

  const caseRows = input.historical_similar_cases
    .map(
      (item) =>
        `- ${item.event_id} (${item.date})：overall similarity ${formatNum(item.similarity, 3)}; shock cosine ${formatNum(item.shock_cosine, 3)}; historical returns: SPY ${formatPct(item.returns_pct.SPY, true)}; QQQ ${formatPct(item.returns_pct.QQQ, true)}; GLD ${formatPct(item.returns_pct.GLD, true)}; UUP ${formatPct(item.returns_pct.UUP, true)}。`
    )
    .join("\n");
  const ragLogic = input.rag_retrieval_logic;
  const ragSignals = ragLogic.retrieval_signals
    .map((item) => `- ${item.name}：${item.meaning}`)
    .join("\n");
  const ragCaseReading = ragLogic.current_case_reading
    .map((item) => `- ${item}`)
    .join("\n");
  const caseFeatureList = ragLogic.case_memory_features
    .map((item) => `- ${item}`)
    .join("\n");

  return `# FOMC Multi-Asset Forecast Report

## 1. Question

User question: ${input.user_question}

This report uses ${input.current_fomc_event.date} / ${input.current_fomc_event.event_id} and the HGBDT/fusion model to explain short-horizon event returns for SPY, QQQ, GLD, and UUP.

## 2. Core predictions

- The largest absolute point forecast is ${strongest.asset}, with a predicted return of ${formatPct(strongest.predicted_return_pct, true)} and a 90% interval of ${formatPct(strongest.interval_90_low_pct, true)} to ${formatPct(strongest.interval_90_high_pct, true)}.
- Historical cross-asset direction accuracy for HGBDT/fusion is ${formatNum(input.model_evaluation.summary.direction_accuracy * 100, 2)}%; MAE is ${formatNum(input.model_evaluation.summary.MAE, 5)}.
- Mean 90% interval coverage is ${formatNum(input.model_evaluation.summary.coverage_90 * 100, 2)}%, measuring the share of historical backtest outcomes inside the interval.

## 3. Multi-asset forecast

| Asset | Direction | Predicted return | 90% interval |
| --- | --- | ---: | ---: |
${rows}

## 4. Policy-shock decomposition

| Shock dimension | Direction | Strength | Confidence | Evidence | Forecast interpretation |
| --- | --- | ---: | --- | --- | --- |
${shockRows}

## 5. Prediction logic chain

The current statement is decomposed into five policy-shock dimensions. HGBDT/fusion then combines macro variables, derived market states, shock main effects, shock interactions, and RAG case-memory features. Directions, magnitudes, intervals, and confidence values come directly from model output.

### Historical-case retrieval

${ragLogic.method_summary}

Retrieval ranking uses:

${ragSignals}

Similar cases enter the fusion model as numeric case-memory features rather than raw long text:

${caseFeatureList}

${ragLogic.fusion_usage}

${ragLogic.interpretation_boundary}

## 6. Historical case evidence

${caseRows}

Current top-case interpretation:

${ragCaseReading}

## 7. Uncertainty, risks, and model boundaries

The 90% prediction interval is calibrated from rolling historical residuals. It is not a guaranteed return bound and may not cover future events.

${input.risk_disclosures.map((item) => `- ${item}`).join("\n")}
`;
}

function bindInteractions() {
  $("#question-input").addEventListener("input", () => {
  });
  $("#current-statement-input").addEventListener("input", () => {
  });
  $("#previous-statement-input").addEventListener("input", () => {
  });
  $("#market-state").addEventListener("input", (event) => {
    if (!event.target.matches(".state-input")) return;
  });
  $("#copy-report").addEventListener("click", () =>
    copyText(reportTemplate(), "Report copied")
  );
  $("#copy-llm-report").addEventListener("click", () =>
    copyText(
      data.llm_logic_chain_report?.content || reportTemplate(),
      "LLM report copied"
    )
  );
  $("#export-llm-pdf").addEventListener("click", exportLlmReportPdf);
  $("#generate-llm-report").addEventListener("click", generateLlmReport);

  const sections = $$(".section");
  const navItems = $$(".side-nav a");
  window.addEventListener("scroll", () => {
    const current = sections
      .map((section) => [section.id, section.getBoundingClientRect().top])
      .filter(([, top]) => top < 140)
      .pop();
    if (!current) return;
    navItems.forEach((item) => item.classList.toggle("active", item.hash === `#${current[0]}`));
  });
}

function init() {
  renderOverview();
  renderPredictions();
  renderEvidence();
  bindInteractions();
}

init();
