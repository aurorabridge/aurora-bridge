/* ============================================================
   Aurora Bridge — Product Data Model
   ============================================================ */

const products = [
  {
    id: "starter-bundle",
    tier: "starter",
    emoji: "📘",
    name: {
      zh: "零基础入门包",
      en: "Zero-to-One Starter Bundle"
    },
    tagline: {
      zh: "从零开始，一册读懂 J-1 ITP",
      en: "Everything you need to understand J-1 ITP"
    },
    price: {
      zh: "¥299 – 1,500",
      en: "$45 – 229"
    },
    description: {
      zh: "适合第一次了解 J-1 ITP，需要系统化了解项目全貌的同学。包含结构化入门指南、签证资料清单和真实美国厨房生存经验分享。",
      en: "Perfect for those exploring J-1 ITP for the first time. Includes a structured starter guide, visa document checklist, and real U.S. kitchen survival experience."
    },
    includes: [
      { zh: "2026–2027 J-1 ITP 零基础入门指南（23页）—— 从项目概念、资格判断、费用行情到 Sponsor 审核逻辑与面签实战，一册读懂", en: "2026-2027 J-1 ITP Starter Guide (23 pages) — Program overview, eligibility, real costs, Sponsor review logic & interview strategy" },
      { zh: "海阔•2026 J-1 签证资料清单（Excel 详细版）—— 逐项列出所有签证材料、准备时间、提供方和特殊说明", en: "2026 J-1 Visa Document Checklist (Detailed Excel) — Every required document, timeline, provider & special notes" },
      { zh: "美国厨房服务岗一年生存指南（19页）—— 8大章节覆盖真实厨房生态、技能生存、文化避坑、情绪管理与成长故事", en: "U.S. Kitchen Service Role Survival Guide (19 pages) — 8 chapters on real kitchen life, survival skills, cultural tips & emotional growth" }
    ],
    forWho: {
      zh: "第一次了解 J-1 ITP；对项目和费用没有清晰概念；需要系统化入门资料；正在对比不同机构/中介",
      en: "First-time J-1 explorers; need a clear picture of the program and costs; want structured introductory materials; comparing different agencies"
    },
    delivery: {
      zh: "PDF 电子版，支付后即时下载",
      en: "Digital PDF, instant download after payment"
    },
    featured: false
  },
  {
    id: "pro-report",
    tier: "pro",
    emoji: "📋",
    name: {
      zh: "顾问评估报告 + 简历模板",
      en: "Consultant Report + Resume Pack"
    },
    tagline: {
      zh: "个性化方案，精准匹配你的美国之路",
      en: "Personalized strategy for your unique path"
    },
    price: {
      zh: "¥1,500 – 5,000",
      en: "$229 – 749"
    },
    description: {
      zh: "适合已有初步了解、需要专业评估和简历包装的同学。包含一对一背景评估、Sponsor 三选一匹配建议、岗位推荐排序和全套简历模板。",
      en: "For those ready to go deeper: one-on-one background assessment, three-option Sponsor matching, ranked job recommendations and full resume template pack."
    },
    includes: [
      { zh: "一对一背景评估报告 —— 年龄、专业、毕业时间与 J-1 ITP 符合度分析 + 整体成功率评估", en: "One-on-One Background Assessment — Degree, graduation, experience fit analysis with success rate estimate" },
      { zh: "Sponsor 匹配建议（3家对比）—— 最稳/可尝试/备选三种方案，附每家理由分析", en: "Sponsor Matching (3 options) — Best fit / Worth trying / Backup, with rationale for each" },
      { zh: "岗位推荐（按稳妥度排序）—— ★★★★★ 最稳岗 vs ★★★★ 可尝试岗 vs ★☆☆☆☆ 不建议岗", en: "Job Recommendations (ranked) — ★★★★★ Safest vs ★★★★ Try-able vs ★☆☆☆☆ Not recommended" },
      { zh: "ITP 简历模板合集 —— 覆盖酒店前台/厨房 Cook/服务生三大主流岗位，英文简历模板", en: "ITP Resume Template Pack — Hotel front desk / Kitchen cook / Server — three major roles, English templates" },
      { zh: "拒签二签路线规划 —— 换 Sponsor / 换稳岗 / 补材料 / 强化财力 / 改签证逻辑", en: "Visa Denial Recovery Plan — Sponsor change / Role change / Document supplement / Financial proof / Logic adjustment" }
    ],
    forWho: {
      zh: "已有基础了解；需要专业背景评估；正在准备简历和申请材料；需要知道哪些 Sponsor 和岗位最适合自己",
      en: "Have basic knowledge; need professional assessment; preparing application materials; need to know which Sponsor and role fit best"
    },
    delivery: {
      zh: "在线交付 + 一对一在线咨询（微信/腾讯会议）",
      en: "Online delivery + One-on-one consultation (WeChat/Tencent Meeting)"
    },
    featured: true
  },
  {
    id: "premium-landing",
    tier: "premium",
    emoji: "✨",
    name: {
      zh: "Premium 赴美全流程护航",
      en: "Premium Full Journey Guide"
    },
    tagline: {
      zh: "从签证到落地，全程陪伴每一步",
      en: "End-to-end support from visa to landing"
    },
    price: {
      zh: "¥8,000+",
      en: "$1,199+"
    },
    description: {
      zh: "适合已经决定赴美、需要全方位支持的同学。覆盖签证材料准备、面签培训、赴美落地指南和工作第一周的完整全流程陪伴。",
      en: "For those committed to the journey. Full coverage: visa documentation, interview training, pre-departure guide, and first week at work — complete end-to-end support."
    },
    includes: [
      { zh: "《ITP Premium｜赴美落地指南》—— 出发前30天详细规划、资金准备、必带文件清单、行李建议", en: "ITP Premium Landing Guide — 30-day pre-departure plan, finance prep, essential documents checklist, packing advice" },
      { zh: "2026 ITP 安全·住宿·工作注意事项手册 —— 10页实操指南，涵盖安全底线、住宿守则、工作法规", en: "2026 ITP Safety, Housing & Work Handbook — 10-page practical guide on safety, housing rules & work regulations" },
      { zh: "工作第一周实战指南（Day 1-5）—— 每日任务清单 + 英文沟通话术 + Miguel 实战 Tips", en: "First Week at Work Guide (Day 1-5) — Daily checklist + English communication scripts + Miguel's real-world tips" },
      { zh: "全套签证材料准备 + 面签培训 —— DS-160/DS-2019/DS-7002 填写指导 + 面签模拟训练", en: "Full Visa Documentation + Interview Training — DS-160/DS-2019/DS-7002 guidance + mock interview practice" },
      { zh: "赴美后持续在线支持 —— 工作适应、文化冲突、紧急情况处理等落地后问题的即时咨询", en: "Ongoing Post-Arrival Online Support — Work adaptation, culture shock, emergency handling & real-time advice" }
    ],
    forWho: {
      zh: "已决定赴美；需要签证全程支持；希望落地后有人持续指导；不想一个人面对陌生国度",
      en: "Committed to the journey; need full visa support; want ongoing guidance after landing; don't want to face a foreign country alone"
    },
    delivery: {
      zh: "全套 PDF 电子版 + 一对一深度咨询 + 赴美后持续在线支持",
      en: "Full PDF digital pack + In-depth one-on-one consultation + Ongoing post-arrival online support"
    },
    valueAnchor: {
      title: { zh: "为什么值这个价格？", en: "Why Is This Worth It?" },
      marketComparison: {
        zh: "同类服务市场价 ¥15,000 – 30,000，Aurora Bridge ¥8,000+",
        en: "Market rate for comparable services: $2,200 – 4,500. Aurora Bridge: $1,199+"
      },
      breakdown: [
        { zh: "签证材料准备 + 面签培训（市场等价 ¥3,000）", en: "Visa documentation + interview training (market value $450)" },
        { zh: "赴美落地指南 + 安全手册（市场等价 ¥2,000）", en: "Landing guide + safety handbook (market value $300)" },
        { zh: "工作第一周实战指导（市场等价 ¥2,500）", en: "First week survival guide (market value $375)" },
        { zh: "赴美后半年持续支持（市场等价 ¥8,000+）", en: "6 months post-arrival support (market value $1,200+)" },
        { zh: "紧急情况即时响应（无价）", en: "Emergency real-time response (priceless)" }
      ],
      roi: {
        zh: "赴美一年净收入约 $15,000-25,000，投入不到 ¥10,000。一次投资，十倍回报。",
        en: "Estimated annual net income in the U.S.: $15,000-25,000. Your investment: less than $1,200. One investment, tenfold return."
      },
      guarantee: {
        zh: "如果面签未通过，免费提供二签策略规划",
        en: "Free visa denial recovery strategy if you don't pass the first time"
      }
    },
    featured: false
  }
];

// Helper: get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

// Helper: filter products by tier
function getProductsByTier(tier) {
  if (!tier || tier === 'all') return products;
  return products.filter(p => p.tier === tier);
}

// Render product card for products list page
function renderProductCard(product, lang) {
  const l = lang || 'zh';
  return `
    <div class="product-card animate-on-scroll" data-tier="${product.tier}" onclick="window.location.href='product-detail.html?id=${product.id}'">
      <div class="product-card-image ${product.tier}">
        <span style="font-size:3rem">${product.emoji}</span>
      </div>
      <div class="product-card-body">
        <div class="product-card-tier ${product.tier}">${product.tier === 'starter' ? 'Starter' : product.tier === 'pro' ? 'Pro' : 'Premium'}</div>
        <h3>${product.name[l]}</h3>
        <p class="product-card-desc">${product.tagline[l]}</p>
        <div class="product-card-price">${product.price[l]} <span>${l === 'zh' ? '起' : 'from'}</span></div>
      </div>
    </div>
  `;
}

// Render product detail
function renderProductDetail(product, lang) {
  const l = lang || 'zh';
  const tierLabel = product.tier === 'starter' ? '入门 Starter' : product.tier === 'pro' ? '进阶 Pro' : '尊享 Premium';
  const tierLabelEn = product.tier === 'starter' ? 'Starter' : product.tier === 'pro' ? 'Pro' : 'Premium';

  document.querySelector('.product-detail-emoji').textContent = product.emoji;
  document.querySelector('.product-detail-tier-badge').className = `product-detail-tier-badge ${product.tier}`;
  document.querySelector('.product-detail-tier-badge').textContent = l === 'zh' ? tierLabel : tierLabelEn;
  document.querySelector('.product-detail-info h1').textContent = product.name[l];
  document.querySelector('.product-detail-price').textContent = product.price[l];
  document.querySelector('.product-detail-desc').textContent = product.description[l];

  const includesList = document.querySelector('.product-detail-includes ul');
  includesList.innerHTML = product.includes.map(item => `<li>${item[l]}</li>`).join('');

  document.querySelector('.product-detail-forwho p').textContent = product.forWho[l];
  document.querySelector('.product-detail-delivery p').textContent = product.delivery[l];

  // Set up CTA button to go to consult page with pre-selected product
  const ctaBtn = document.getElementById('product-cta');
  if (ctaBtn) {
    ctaBtn.href = `consult.html?product=${product.id}`;
  }
}
