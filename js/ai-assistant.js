/* ============================================================
   Aurora Bridge — AI Assistant (三模混合)
   Mode B: Knowledge Base Search
   Mode C: Deep Consultation (→ consult.html)
   Mode D: Decision Tree Job Picker
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initAIAssistant();
});

function initAIAssistant() {
  if (document.querySelector('.ai-float-btn')) return; // already initialized

  const body = document.body;
  const currentLang = localStorage.getItem('aurora-lang') || 'zh';

  // Floating button
  const floatBtn = document.createElement('button');
  floatBtn.className = 'ai-float-btn';
  floatBtn.innerHTML = '💡';
  floatBtn.title = 'AI 助手 · AI Assistant';
  floatBtn.onclick = () => toggleDrawer();
  body.appendChild(floatBtn);

  // Drawer panel
  const drawer = document.createElement('div');
  drawer.className = 'ai-drawer';
  drawer.id = 'ai-drawer';
  drawer.innerHTML = `
    <div class="ai-drawer-header">
      <h3>AI 助手</h3>
      <button class="ai-drawer-close" onclick="toggleDrawer()">✕</button>
    </div>
    <div class="ai-drawer-tabs">
      <button class="ai-drawer-tab active" data-tab="search">🔍 知识库</button>
      <button class="ai-drawer-tab" data-tab="consult">💬 深度咨询</button>
      <button class="ai-drawer-tab" data-tab="picker">🎯 智能选岗</button>
    </div>
    <div class="ai-drawer-body" id="ai-drawer-body"></div>
  `;
  body.appendChild(drawer);

  // Tab switching
  drawer.querySelectorAll('.ai-drawer-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      drawer.querySelectorAll('.ai-drawer-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      switchTab(tab.dataset.tab);
    });
  });

  // Initialize default tab
  switchTab('search');

  // Close on overlay click
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('open') && !drawer.contains(e.target) && e.target !== floatBtn) {
      drawer.classList.remove('open');
    }
  });
}

function toggleDrawer() {
  const drawer = document.getElementById('ai-drawer');
  if (!drawer) return;
  drawer.classList.toggle('open');
}

function switchTab(tab) {
  const body = document.getElementById('ai-drawer-body');
  if (!body) return;
  const lang = localStorage.getItem('aurora-lang') || 'zh';

  if (tab === 'search') {
    body.innerHTML = `
      <input type="text" class="ai-search-input" id="ai-search-input" placeholder="${lang === 'zh' ? '搜索 ITP 相关问题...' : 'Search ITP questions...'}">
      <div class="ai-results" id="ai-results">
        <div style="text-align:center;color:var(--color-text-light);padding:20px;font-size:0.85rem;">
          ${lang === 'zh' ? '💡 试试搜索：费用 / 面签 / Sponsor / 住宿 / 工资' : '💡 Try: cost / interview / sponsor / housing / salary'}
        </div>
      </div>
    `;
    const input = document.getElementById('ai-search-input');
    if (input) {
      input.focus();
      input.addEventListener('input', debounce(() => {
        performKnowledgeSearch(input.value);
      }, 300));
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') performKnowledgeSearch(input.value);
      });
    }
  } else if (tab === 'consult') {
    body.innerHTML = `
      <div class="ai-messages">
        <div class="ai-msg bot">${lang === 'zh' ? '你好！我是 Aurora Bridge 的 AI 助手。以下是咨询 Miguel 的几种方式：' : 'Hi! I\\'m Aurora Bridge AI assistant. Here are ways to reach Miguel:'}</div>
      </div>
      <div class="ai-choices">
        <button class="ai-choice-btn" onclick="window.location.href='consult.html'">${lang === 'zh' ? '📝 填写咨询表单（24h内回复）' : '📝 Fill consultation form (24h response)'}</button>
        <button class="ai-choice-btn" onclick="window.open('mailto:migueleeaurora@gmail.com')">${lang === 'zh' ? '📧 发送邮件直接联系' : '📧 Send email directly'}</button>
        <button class="ai-choice-btn" onclick="window.location.href='contact.html'">${lang === 'zh' ? '📱 查看微信/小红书/抖音' : '📱 View WeChat/RED/TikTok'}</button>
        <button class="ai-choice-btn" onclick="switchTab('search')">${lang === 'zh' ? '🔍 先在知识库里找答案' : '🔍 Search knowledge base first'}</button>
      </div>
    `;
  } else if (tab === 'picker') {
    body.innerHTML = buildDecisionTree(0);
  }
}

// ---- Mode B: Knowledge Base Search ----
function performKnowledgeSearch(query) {
  const resultsContainer = document.getElementById('ai-results');
  if (!resultsContainer) return;
  const lang = localStorage.getItem('aurora-lang') || 'zh';

  if (!query || query.trim().length < 1) {
    resultsContainer.innerHTML = `<div style="text-align:center;color:var(--color-text-light);padding:20px;font-size:0.85rem;">${lang === 'zh' ? '💡 试试搜索：费用 / 面签 / Sponsor / 住宿 / 工资' : '💡 Try: cost / interview / sponsor / housing / salary'}</div>`;
    return;
  }

  const q = query.toLowerCase().trim();
  // Score-based matching
  const scored = knowledgeBase.map(entry => {
    let score = 0;
    // Exact match in question
    if (entry.q.toLowerCase().includes(q)) score += 10;
    // Partial word match in question
    q.split('').filter(c => c !== ' ').forEach(char => {
      if (entry.q.includes(char)) score += 0.3;
    });
    // Keyword match
    entry.keywords.forEach(kw => {
      if (kw.toLowerCase().includes(q) || q.includes(kw.toLowerCase())) score += 8;
      // Partial keyword match
      if (q.length >= 2 && kw.toLowerCase().includes(q.substring(0, 2))) score += 2;
    });
    // Match in answer
    if (entry.a.toLowerCase().includes(q)) score += 5;
    return { ...entry, score };
  });

  const results = scored.filter(s => s.score > 2).sort((a, b) => b.score - a.score).slice(0, 5);

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div style="text-align:center;padding:20px;font-size:0.85rem;color:var(--color-text-light);">
        ${lang === 'zh' ? '😕 没有找到相关内容<br><br>试试：费用、面签、Sponsor、住宿、岗位<br>或切换到"💬 深度咨询"直接联系 Miguel' : '😕 No results found<br><br>Try: cost, interview, sponsor, housing, job<br>Or switch to "💬 Deep Consultation"'}
      </div>`;
    return;
  }

  resultsContainer.innerHTML = results.map(r => `
    <div class="ai-result-card" onclick="showAIAnswer('${escapeHtml(r.q)}', '${escapeHtml(r.a)}')">
      <div style="font-weight:600;margin-bottom:4px;font-size:0.85rem;">${r.q}</div>
      <div style="font-size:0.8rem;color:var(--color-text-light);">${r.a.substring(0, 60)}...</div>
    </div>
  `).join('');
}

function showAIAnswer(question, answer) {
  const body = document.getElementById('ai-drawer-body');
  if (!body) return;
  const lang = localStorage.getItem('aurora-lang') || 'zh';
  body.innerHTML = `
    <div class="ai-messages">
      <div class="ai-msg user">${unescapeHtml(question)}</div>
      <div class="ai-msg bot" style="line-height:1.7">${unescapeHtml(answer)}</div>
    </div>
    <div style="margin-top:16px;text-align:center;">
      <button class="ai-choice-btn" onclick="switchTab('search')" style="text-align:center;">${lang === 'zh' ? '← 返回搜索' : '← Back to search'}</button>
      <button class="ai-choice-btn" onclick="window.location.href='consult.html'" style="text-align:center;margin-top:4px;">${lang === 'zh' ? '📝 这个答案还不够？立即咨询 →' : '📝 Need more details? Consult now →'}</button>
    </div>
  `;
}

// ---- Mode D: Decision Tree ----
const decisionTree = {
  start: {
    question: { zh: "你的主要目标是什么？", en: "What's your main goal?" },
    options: [
      { text: { zh: "毕业后想在美国酒店行业工作", en: "Work in U.S. hospitality after graduation" }, next: "major" },
      { text: { zh: "暑假体验美国生活+赚零花钱", en: "Summer experience + earn some money" }, next: "swt" },
      { text: { zh: "不确定，先了解一下", en: "Not sure, just exploring" }, next: "exploring" }
    ]
  },
  major: {
    question: { zh: "你的专业是？", en: "What's your major?" },
    options: [
      { text: { zh: "酒店/旅游/烹饪相关", en: "Hospitality/Tourism/Culinary" }, next: "green_jobs" },
      { text: { zh: "其他商科/文科", en: "Other business/arts" }, next: "cross_major" },
      { text: { zh: "完全不相关", en: "Completely unrelated" }, next: "cross_major" }
    ]
  },
  green_jobs: {
    result: { zh: "🎯 推荐方案：Pro 顾问评估报告（¥1,500-5,000）\n\n你的专业背景非常适合 ITP！推荐绿灯岗位：酒店厨房 Cook、前台接待、餐饮轮岗。Miguel 可以帮你精准匹配 Sponsor 和岗位——面签通过率 90%+。", en: "🎯 Recommended: Pro Report ($229-749)\n\nYour major is a perfect fit for ITP! Green-light positions: Kitchen Cook, Front Desk, F&B Rotation. Miguel can match you with the right Sponsor and position." },
    product: "pro-report"
  },
  cross_major: {
    result: { zh: "🎯 推荐方案：入门包（¥299-1,500）+ Pro 简历包装\n\n跨专业申请完全可行！关键是简历包装和岗位匹配逻辑。先通过入门包了解 ITP 全貌，再用 Pro 方案做精准简历优化和 Sponsor 匹配。", en: "🎯 Recommended: Starter Bundle ($45-229) + Pro Resume Pack\n\nCross-major applications are viable! Key is resume packaging and job matching logic. Start with the Starter Bundle for a full picture, then use Pro for targeted optimization." },
    product: "starter-bundle"
  },
  swt: {
    result: { zh: "🎯 推荐方案：入门包（¥299-1,500）\n\nSWT 适合暑假短期体验。虽然我们不专门做 SWT，但入门包中的签证流程、费用分析和生存指南对 SWT 同样适用。想了解 SWT 和 ITP 的详细区别？咨询 Miguel 聊聊。", en: "🎯 Recommended: Starter Bundle ($45-229)\n\nSWT is great for short summer experience. While we don't specialize in SWT, the Starter Bundle's visa process, cost analysis and survival guide apply to SWT too. Want to learn more? Chat with Miguel." },
    product: "starter-bundle"
  },
  exploring: {
    result: { zh: "🎯 推荐方案：先免费咨询 + 入门包（¥299-1,500）\n\n还在探索阶段？建议先约一个免费咨询，让 Miguel 根据你的背景给一个初步建议。如果感兴趣，入门包 23 页指南会帮你系统了解整个 ITP 项目。", en: "🎯 Recommended: Free Consultation + Starter Bundle ($45-229)\n\nStill exploring? Book a free consultation first — Miguel will give you a personalized initial assessment. If interested, the 23-page Starter Guide will help you understand the full ITP picture." },
    product: null
  }
};

function buildDecisionTree(nodeKey) {
  const node = decisionTree[nodeKey] || decisionTree['start'];
  const lang = localStorage.getItem('aurora-lang') || 'zh';

  if (node.result) {
    return `
      <div class="ai-messages">
        <div class="ai-msg bot" style="white-space:pre-line;line-height:1.7">${node.result[lang] || node.result.zh}</div>
      </div>
      <div class="ai-choices">
        ${node.product ? `<button class="ai-choice-btn" onclick="window.location.href='product-detail.html?id=${node.product}'">${lang === 'zh' ? '查看推荐方案 →' : 'View Recommended Plan →'}</button>` : ''}
        <button class="ai-choice-btn" onclick="window.location.href='consult.html'">${lang === 'zh' ? '📝 立即免费咨询 →' : '📝 Free Consultation →'}</button>
        <button class="ai-choice-btn" onclick="switchTab('picker')">${lang === 'zh' ? '🔄 重新选择' : '🔄 Start Over'}</button>
      </div>
    `;
  }

  const optionsHtml = node.options.map(o => `
    <button class="ai-choice-btn" onclick="document.getElementById('ai-drawer-body').innerHTML = buildDecisionTree('${o.next}')">${o.text[lang] || o.text.zh}</button>
  `).join('');

  return `
    <div class="ai-messages">
      <div class="ai-msg bot">${node.question[lang] || node.question.zh}</div>
    </div>
    <div class="ai-choices">${optionsHtml}</div>
  `;
}

// ---- Helpers ----
function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
function unescapeHtml(str) {
  return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'");
}
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
