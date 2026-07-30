/* ============================================================
   Aurora Bridge — ITP/SWT Encyclopedia Data
   15 主题 · 全流程深度内容
   ============================================================ */

const guideTopics = [
  {
    id: "what-is-itp",
    icon: "📖",
    category: "基础认知",
    title: { zh: "J-1 ITP / SWT 到底是什么？", en: "What Are J-1 ITP & SWT?" },
    summary: { zh: "5分钟读懂 J-1 赴美实习项目，看清 ITP 和 SWT 的本质区别。", en: "Understand J-1 programs in 5 minutes — ITP vs SWT explained." },
    content: {
      zh: `
        <h3>J-1 文化交流签证</h3>
        <p>J-1 是美国国务院推出的“文化交流访问者”签证类别，核心目的是促进国际文化交流。ITP（Intern/Trainee Program）和 SWT（Summer Work & Travel）都是 J-1 旗下的子类别。</p>

        <h3>ITP · 专业实习项目</h3>
        <p><strong>对象：</strong>在校生或毕业1年内的学生</p>
        <p><strong>时长：</strong>最长12个月（Intern类）/ 最长18个月（Trainee类，需累计相关工作经验）</p>
        <p><strong>核心特点：</strong>必须与专业相关，岗位有明确的培训计划（DS-7002 Training Plan），不是普通打工</p>
        <p><strong>工资：</strong>有薪，时薪 $12–22（因岗位和城市差异大）</p>
        <p><strong>典型岗位：</strong>酒店厨房 / 前台 / 餐饮服务 / 酒店管理轮岗</p>

        <h3>SWT · 暑期打工旅行</h3>
        <p><strong>对象：</strong>在校大学生（大三、大四居多）</p>
        <p><strong>时长：</strong>2–4个月（暑假期间）</p>
        <p><strong>核心特点：</strong>无专业限制，偏打工+旅行性质</p>
        <p><strong>工资：</strong>有薪，时薪 $10–18，多为基础服务岗</p>
        <p><strong>典型岗位：</strong>国家公园服务 / 快餐 / 游乐园 / 零售</p>

        <div class="guide-tip">
          <strong>🤔 怎么选？</strong><br>
          · 如果是酒店/烹饪/旅游管理专业 → 走 ITP，含金量高，对职业有帮助<br>
          · 如果是暑假想体验美国生活 + 赚点零花钱 → SWT 足够<br>
          · 如果毕业后想留在美国发展 → ITP 简历价值远高于 SWT
        </div>
      `,
      en: `<h3>J-1 Cultural Exchange Visa</h3><p>The J-1 visa is a U.S. State Department program designed for cultural exchange. ITP and SWT are two sub-categories under J-1.</p><h3>ITP — Intern/Trainee Program</h3><p>For students or recent grads (within 1 year). Up to 12 months (Intern) or 18 months (Trainee). Must be related to your major.</p><h3>SWT — Summer Work & Travel</h3><p>For current university students. 2-4 months during summer break. No major restriction.</p><div class="guide-tip"><strong>Which one?</strong> Hospitality/tourism major → ITP. Want summer experience → SWT. Career value → ITP wins.</div>`
    }
  },
  {
    id: "eligibility",
    icon: "✅",
    category: "基础认知",
    title: { zh: "资格自测：你符合申请条件吗？", en: "Eligibility: Do You Qualify?" },
    summary: { zh: "对照六大条件，30秒判断你是否适合申请 J-1 ITP。", en: "Check 6 criteria in 30 seconds to see if you qualify for J-1 ITP." },
    content: {
      zh: `
        <h3>六大基本条件</h3>
        <ol class="guide-checklist">
          <li>✅ <strong>年龄：</strong>18–28岁（大多数Sponsor要求）</li>
          <li>✅ <strong>学历：</strong>高中以上，大专/本科在读或毕业1年内</li>
          <li>✅ <strong>专业：</strong>建议与申请岗位相关（跨专业可操作但需额外包装）</li>
          <li>✅ <strong>英语：</strong>基础日常交流能力（面签是口语测试）</li>
          <li>✅ <strong>护照：</strong>有效期至少覆盖项目结束日+6个月</li>
          <li>✅ <strong>资金：</strong>能够覆盖 Sponsor 费用 + 签证费 + 机票 + 初期生活费（总计约 ¥3-8万）</li>
        </ol>

        <h3>⚠️ 你可能不适用的情况</h3>
        <ul>
          <li>超过28岁 → 部分 Sponsor 可接受但难度增加</li>
          <li>毕业超过1年 → 不属于"recent graduate"，面签风险高</li>
          <li>没有护照 → 先去办，约15个工作日</li>
          <li>英语完全无法交流 → 建议先提升基础再申请</li>
        </ul>

        <div class="guide-tip">
          <strong>💡 跨专业可行吗？</strong><br>
          可行。Miguel 辅导过非酒店专业的学员成功拿到酒店 ITP。关键是简历包装——把任何相关经验（志愿者、兼职、社团活动）转化为岗位关联逻辑。
        </div>
      `,
      en: `<h3>Six Core Requirements</h3><ol><li>Age: 18-28</li><li>Education: High school+, current student or graduated within 1 year</li><li>Major: Related to position (cross-major possible with packaging)</li><li>English: Basic conversational ability</li><li>Passport: Valid 6 months beyond program end</li><li>Funds: ~$1,200-$4,500 total</li></ol>`
    }
  },
  {
    id: "sponsor-comparison",
    icon: "🏢",
    category: "Sponsor",
    title: { zh: "Sponsor 全对比：谁是你最好的选择？", en: "Sponsor Comparison: Which One Fits You?" },
    summary: { zh: "美国四大 Sponsor 机构的真实费用、审核风格、优势劣势全拆解。", en: "Real costs, review styles, pros & cons of the four major U.S. Sponsor agencies." },
    content: {
      zh: `
        <h3>Sponsor 是什么？</h3>
        <p>Sponsor 是经美国国务院认证的"项目监管机构"，负责审核你的资格、发放 DS-2019 表格。没有 Sponsor，你拿不到 J-1 签证。</p>

        <h3>四大 Sponsor 横评</h3>
        <table class="guide-compare-table">
          <tr><th>Sponsor</th><th>费用范围</th><th>审核风格</th><th>岗位库</th><th>推荐指数</th></tr>
          <tr><td>Sponsor A</td><td>$2,800–3,500</td><td>较松，适合新手</td><td>酒店/餐饮类多</td><td>⭐⭐⭐⭐</td></tr>
          <tr><td>Sponsor B</td><td>$3,200–4,500</td><td>严格，需完整材料</td><td>覆盖面广</td><td>⭐⭐⭐⭐⭐</td></tr>
          <tr><td>Sponsor C</td><td>$3,500–5,000</td><td>模板化，效率高</td><td>高星级酒店多</td><td>⭐⭐⭐</td></tr>
          <tr><td>Sponsor D</td><td>$4,000–6,350</td><td>面签通过率高</td><td>精品岗位为主</td><td>⭐⭐⭐⭐</td></tr>
        </table>

        <div class="guide-tip">
          <strong>🔑 Miguel 的建议：</strong><br>
          选 Sponsor 不是越贵越好。关键是这家 Sponsor 在你的目标城市有岗位资源，且能配合你的时间线。入门包中会详细对比并给出最适合你的 3 家。
        </div>
      `,
      en: `<h3>What is a Sponsor?</h3><p>U.S. State Department-certified agencies that review your eligibility and issue DS-2019 forms.</p><h3>Four Major Sponsors</h3><p>Fees range from $2,800-$6,350 depending on agency and program type. Detailed comparison in the Starter Bundle.</p>`
    }
  },
  {
    id: "cost-breakdown",
    icon: "💰",
    category: "费用",
    title: { zh: "费用完全透明：每一分钱花在哪", en: "Complete Cost Breakdown" },
    summary: { zh: "从 Sponsor 费到落地第一周，你的全部花费清单——没有隐藏费用。", en: "Every single expense from Sponsor fees to your first week — zero hidden costs." },
    content: {
      zh: `
        <h3>费用全景图（以 Intern 12个月为例）</h3>
        <table class="guide-compare-table">
          <tr><th>项目</th><th>金额</th><th>支付给谁</th><th>时间</th></tr>
          <tr><td>Sponsor 项目费</td><td>$2,800–6,350</td><td>Sponsor 机构</td><td>签约时</td></tr>
          <tr><td>SEVIS 费</td><td>$220</td><td>美国国土安全部</td><td>DS-2019后</td></tr>
          <tr><td>DS-160 签证费</td><td>$185</td><td>美国使领馆</td><td>面签前</td></tr>
          <tr><td>往返机票</td><td>¥3,000–10,000</td><td>航空公司</td><td>签证后</td></tr>
          <tr><td>住宿押金+首月</td><td>$800–1,500</td><td>房东/公寓</td><td>出发前</td></tr>
          <tr><td>初期生活费</td><td>$500–1,000</td><td>自己</td><td>出发前</td></tr>
          <tr><td>保险（如需要）</td><td>$300–600</td><td>保险公司</td><td>出发前</td></tr>
          <tr><td style="font-weight:700">综合最低预算</td><td style="font-weight:700;color:var(--color-gold)">约 ¥3–5万</td><td colspan="2"></td></tr>
          <tr><td style="font-weight:700">综合宽裕预算</td><td style="font-weight:700;color:var(--color-gold)">约 ¥5–8万</td><td colspan="2"></td></tr>
        </table>

        <div class="guide-tip">
          <strong>⚠️ 警惕"全包价"陷阱</strong><br>
          一些中介报"全包价 ¥3万"，但实际只含 Sponsor 费和基础服务，签完后机票、住宿、保险等统统要加钱。我们会在入门包中逐项拆解，让你看清每一分钱。
        </div>
      `,
      en: `<h3>Full Cost Breakdown</h3><table><tr><th>Item</th><th>Amount</th></tr><tr><td>Sponsor Fee</td><td>$2,800-6,350</td></tr><tr><td>SEVIS</td><td>$220</td></tr><tr><td>Visa Fee</td><td>$185</td></tr><tr><td>Flights</td><td>$450-1,500</td></tr><tr><td>Housing</td><td>$800-1,500</td></tr><tr><td>Living Expenses</td><td>$500-1,000</td></tr><tr><td>Budget Total</td><td>$5,000-12,000</td></tr></table>`
    }
  },
  {
    id: "visa-process",
    icon: "📋",
    category: "签证",
    title: { zh: "签证全流程：DS-160 / DS-2019 / DS-7002", en: "Visa Process: DS-160 / DS-2019 / DS-7002" },
    summary: { zh: "从拿到 DS-2019 到面签通过，每一步的注意事项和填写要点。", en: "From receiving DS-2019 to passing the interview — every step explained." },
    content: {
      zh: `
        <h3>签证时间线</h3>
        <div class="guide-timeline">
          <div class="guide-tl-item"><strong>Step 1：</strong>收到 Sponsor Offer → 签署合同 → 缴纳费用</div>
          <div class="guide-tl-item"><strong>Step 2：</strong>Sponsor 发放 DS-2019 表格（约1-3周）</div>
          <div class="guide-tl-item"><strong>Step 3：</strong>在线填写 DS-160 表格 → 缴纳签证费 $185</div>
          <div class="guide-tl-item"><strong>Step 4：</strong>预约面签时间 → 准备面签材料</div>
          <div class="guide-tl-item"><strong>Step 5：</strong>面签 → 当场告知结果 → 等待护照寄回（3-7天）</div>
        </div>

        <h3>DS-160 填写要点</h3>
        <p>这是最重要的一张表。签证官看到你之前就靠这张表对你有了第一印象。关键要点：</p>
        <ul>
          <li>所有信息必须与 DS-2019 完全一致，包括日期、地址拼写</li>
          <li>工作经历要写清楚，特别是与申请岗位相关的经历</li>
          <li>"Purpose of Trip" 写 J-1 Intern/Trainee，不是 Work</li>
          <li>美国联系人填 Sponsor 的联系方式，不是朋友</li>
        </ul>

        <div class="guide-tip">
          <strong>🚫 常见拒签原因：</strong><br>
          DS-160 信息与面签回答不一致 → 签证官判定"撒谎" → 直接拒签。所以 DS-160 一定要认真填！
        </div>
      `,
      en: `<h3>Visa Timeline</h3><p>5 steps: Sponsor Offer → DS-2019 → DS-160 → Interview → Passport Return.</p><h3>DS-160 Tips</h3><p>Must match DS-2019 exactly. Purpose: J-1 Intern, not Work. U.S. contact: your Sponsor, not a friend.</p>`
    }
  },
  {
    id: "interview-prep",
    icon: "🎤",
    category: "签证",
    title: { zh: "面签备战：30个高频问题与标准答案", en: "Interview Prep: 30 Common Questions" },
    summary: { zh: "签证官最常问的30个问题，真实的面签逻辑和回答模板。", en: "The 30 most frequently asked questions with sample answers and proven logic." },
    content: {
      zh: `
        <h3>面签核心逻辑（记住这三点）</h3>
        <ol>
          <li><strong>你是去学习的</strong>——不是去打工的，是去接受培训和文化交流</li>
          <li><strong>你会回来的</strong>——有明确的回国计划（学业、工作、家庭）</li>
          <li><strong>你说的是真的</strong>——所有信息与 DS-160/DS-2019 一致</li>
        </ol>

        <h3>Top 10 高频问题</h3>
        <div class="guide-qa">
          <p><strong>Q1: Why do you want to go to the United States?</strong><br>→ I am participating in a J-1 Intern program to gain professional training in [your field]. This is a cultural exchange and training opportunity.</p>
          <p><strong>Q2: What will you be doing there?</strong><br>→ I will be training as a [position] at [hotel/company name] in [city]. I have a detailed Training Plan (DS-7002).</p>
          <p><strong>Q3: Who is paying for your trip?</strong><br>→ My parents/self-funded. I have proof of funds with me.</p>
          <p><strong>Q4: What will you do after the program ends?</strong><br>→ I will return to China to complete my degree / apply my international experience in the hospitality industry here.</p>
          <p><strong>Q5: Do you have relatives in the U.S.?</strong><br>→ No. (实话实说，有就说有)</p>
        </div>

        <div class="guide-tip">
          <strong>💡 Miguel 的面签口诀：</strong><br>
          自信 + 简洁 + 直视眼睛。不要背诵，要像聊天。签证官每天面试上百人，你的真诚是最大的加分项。
        </div>
      `,
      en: `<h3>Core Logic</h3><p>1. You're going to learn. 2. You're coming back. 3. Your information is consistent.</p><h3>Top Questions</h3><p>Practice these: Why the U.S.? What will you do? Who pays? After the program? Relatives?</p>`
    }
  },
  {
    id: "job-ranking",
    icon: "🎯",
    category: "选岗",
    title: { zh: "岗位红绿灯：哪些岗位最安全？", en: "Job Ranking: Green, Yellow, Red Lights" },
    summary: { zh: "按面签通过率和职业发展双重标准，给 ITP 岗位排个队。", en: "ITP positions ranked by visa approval rate and career development potential." },
    content: {
      zh: `
        <h3>岗位安全度排名</h3>
        <div class="guide-rank">
          <div class="guide-rank-item green">
            <h4>🟢 绿灯岗位（面签通过率90%+）</h4>
            <ul>
              <li>酒店厨房 Cook / Prep Cook —— 与烹饪/酒店专业强关联</li>
              <li>酒店前台/宾客服务 —— 与酒店管理专业对口</li>
              <li>餐饮部轮岗培训 —— 培训计划清晰完整</li>
            </ul>
          </div>
          <div class="guide-rank-item yellow">
            <h4>🟡 黄灯岗位（通过率70-85%）</h4>
            <ul>
              <li>餐饮服务生 —— 岗位与专业关联弱，需额外包装</li>
              <li>客房部 —— 被怀疑"纯体力劳动"，需强调培训性质</li>
              <li>零售/商场 —— 与多数专业关联度低</li>
            </ul>
          </div>
          <div class="guide-rank-item red">
            <h4>🔴 红灯岗位（通过率<50%，不建议）</h4>
            <ul>
              <li>快餐店/便利店 —— 签证官眼中"纯打工"</li>
              <li>纯清洁/搬运 —— 无培训计划支撑</li>
              <li>岗位描述模糊的任意岗 —— 容易被质疑真实性</li>
            </ul>
          </div>
        </div>
      `,
      en: `<h3>Job Safety Ranking</h3><p><strong>Green:</strong> Kitchen Cook, Front Desk — strong major alignment, 90%+ approval.</p><p><strong>Yellow:</strong> Server, Housekeeping — needs extra packaging, 70-85%.</p><p><strong>Red:</strong> Fast food, generic labor — seen as "just working," <50%.</p>`
    }
  },
  {
    id: "salary-truth",
    icon: "💵",
    category: "薪资",
    title: { zh: "薪资真相：到手工薪能拿多少？", en: "Salary Truth: What's Your Take-Home Pay?" },
    summary: { zh: "不同城市、不同岗位的真实薪资数据，到手多少钱算清楚。", en: "Real salary data across cities and positions — calculate your actual take-home pay." },
    content: {
      zh: `
        <h3>各城市薪资参考（ITP Intern）</h3>
        <table class="guide-compare-table">
          <tr><th>城市</th><th>时薪范围</th><th>月收入估算</th><th>生活成本</th><th>净存/月</th></tr>
          <tr><td>里诺（NV）</td><td>$14-18</td><td>$2,240-2,880</td><td>$800-1,200</td><td>$1,000-1,800</td></tr>
          <tr><td>拉斯维加斯</td><td>$13-16</td><td>$2,080-2,560</td><td>$900-1,300</td><td>$700-1,500</td></tr>
          <tr><td>奥兰多</td><td>$12-15</td><td>$1,920-2,400</td><td>$800-1,200</td><td>$600-1,300</td></tr>
          <tr><td>纽约</td><td>$15-22</td><td>$2,400-3,520</td><td>$1,500-2,500</td><td>$400-1,000</td></tr>
        </table>

        <div class="guide-tip">
          <strong>🧮 简单公式：</strong><br>
          月净存 = (时薪 × 160小时) - 房租 - 吃饭 - 交通<br>
          多数 ITP Intern 可以存下 $500-1,500/月，一年下来 $6,000-18,000。
        </div>
      `,
      en: `<h3>Salary by City</h3><table><tr><th>City</th><th>Hourly</th><th>Monthly</th></tr><tr><td>Reno</td><td>$14-18</td><td>$2,240-2,880</td></tr><tr><td>Las Vegas</td><td>$13-16</td><td>$2,080-2,560</td></tr><tr><td>Orlando</td><td>$12-15</td><td>$1,920-2,400</td></tr><tr><td>NYC</td><td>$15-22</td><td>$2,400-3,520</td></tr></table>`
    }
  },
  {
    id: "city-guide",
    icon: "🏙️",
    category: "城市",
    title: { zh: "城市选择指南：哪里最适合你？", en: "City Guide: Where Should You Go?" },
    summary: { zh: "从气候、生活成本、工作机会、华人社区四个维度选出最适合你的城市。", en: "Choose your city based on climate, cost, jobs, and community." },
    content: {
      zh: `
        <h3>四大热门城市对比</h3>
        <table class="guide-compare-table">
          <tr><th>维度</th><th>里诺（NV）</th><th>拉斯维加斯</th><th>奥兰多</th><th>纽约</th></tr>
          <tr><td>气候</td><td>四季分明，冬天冷</td><td>沙漠，夏天热</td><td>湿热，有飓风</td><td>四季分明</td></tr>
          <tr><td>生活成本</td><td>⭐⭐（低）</td><td>⭐⭐（中等）</td><td>⭐⭐（中等偏低）</td><td>⭐⭐⭐⭐⭐（很高）</td></tr>
          <tr><td>工作机会</td><td>酒店/博彩业多</td><td>酒店/餐饮/娱乐</td><td>主题公园/酒店</td><td>全行业覆盖</td></tr>
          <tr><td>华人社区</td><td>小但有</td><td>中等</td><td>中等</td><td>很大</td></tr>
          <tr><td>适合人群</td><td>喜欢安静、省钱</td><td>喜欢热闹、赚钱</td><td>喜欢阳光、乐园</td><td>喜欢都市、不差钱</td></tr>
        </table>

        <div class="guide-tip">
          <strong>🌉 Miguel 的推荐：</strong><br>
          首推里诺和奥兰多。里诺生活成本低，存钱多；奥兰多岗位丰富，天气好。纽约适合不差钱、想体验大都市生活的同学。
        </div>
      `,
      en: `<h3>City Comparison</h3><table><tr><th>City</th><th>Cost</th><th>Jobs</th></tr><tr><td>Reno</td><td>Low</td><td>Hotels/Casinos</td></tr><tr><td>Las Vegas</td><td>Medium</td><td>Hospitality</td></tr><tr><td>Orlando</td><td>Medium-Low</td><td>Theme Parks</td></tr><tr><td>NYC</td><td>Very High</td><td>All Industries</td></tr></table>`
    }
  },
  {
    id: "housing-guide",
    icon: "🏠",
    category: "落地",
    title: { zh: "住宿找法全攻略 + 常见坑点", en: "Housing Guide + Common Traps" },
    summary: { zh: "美国租房渠道、费用、注意事项——不是 Airbnb 上订个房那么简单。", en: "U.S. rental channels, costs, and precautions — it's not just booking an Airbnb." },
    content: {
      zh: `
        <h3>找房渠道</h3>
        <ul>
          <li><strong>Facebook Marketplace / 华人社群：</strong>最多短租/合租信息，直接联系房东</li>
          <li><strong>Zillow / Apartments.com：</strong>正规长租平台，但多数要签1年合同</li>
          <li><strong>Airbnb：</strong>适合落地前2-3周过渡，但不适合长期住（贵）</li>
          <li><strong>同事推荐：</strong>最靠谱的方式，到了之后问同事</li>
        </ul>

        <h3>⚠️ 常见坑</h3>
        <ul>
          <li>❌ 没看房就交押金 → 照片和实际差距大</li>
          <li>❌ 不看lease条款就签 → 提前搬出罚两个月房租</li>
          <li>❌ 合租不签书面协议 → 室友跑路你一个人付全部</li>
          <li>❌ 位置只看租金 → 通勤2小时更不划算</li>
        </ul>

        <div class="guide-tip">
          <strong>💡 Miguel 的经验：</strong><br>
          到了先住 Airbnb 1-2周，实地看3-5套房再定。宁可多花几百过渡费，也别因为着急租错房。
        </div>
      `,
      en: `<h3>Rental Channels</h3><p>Facebook Marketplace, Zillow, Airbnb (short-term), coworker referrals.</p><h3>Common Traps</h3><p>Never send deposit without viewing. Read lease carefully. Get roommate agreements in writing.</p>`
    }
  },
  {
    id: "timeline-planning",
    icon: "📅",
    category: "规划",
    title: { zh: "时间轴规划：倒推6个月精准准备", en: "Timeline: 6-Month Countdown Plan" },
    summary: { zh: "从决定赴美到落地工作的完整时间轴，每个阶段做什么、花多少钱。", en: "Complete timeline from decision to landing — what to do and how much to spend at each stage." },
    content: {
      zh: `
        <h3>建议时间轴（以2026年3月目标出发为例）</h3>
        <div class="guide-timeline">
          <div class="guide-tl-item"><strong>📅 6个月前（2025.9）：</strong>开始了解项目，评估自身条件，做初步预算</div>
          <div class="guide-tl-item"><strong>📅 5个月前（2025.10）：</strong>选定 Sponsor，递交申请材料，缴 Sponsor 费</div>
          <div class="guide-tl-item"><strong>📅 3-4个月前（2025.11-12）：</strong>收到 DS-2019，填 DS-160，预约面签</div>
          <div class="guide-tl-item"><strong>📅 2-3个月前（2026.1）：</strong>面签，等待护照寄回</div>
          <div class="guide-tl-item"><strong>📅 1-2个月前（2026.2）：</strong>买机票，找住宿，准备行李</div>
          <div class="guide-tl-item"><strong>📅 出发（2026.3）：</strong>✈️ 飞美国！</div>
        </div>

        <div class="guide-tip">
          <strong>⏰ 加急可以多快？</strong><br>
          最快可以3个月走完流程（前提是护照已有、英语过关、资金到位）。但不建议压缩太紧，留足缓冲应对意外。
        </div>
      `,
      en: `<h3>6-Month Timeline</h3><p>Month 6: Research. Month 5: Apply. Months 3-4: DS-2019 + Interview. Month 1-2: Flights + Housing. Launch!</p>`
    }
  },
  {
    id: "visa-denial",
    icon: "🔄",
    category: "签证",
    title: { zh: "拒签怎么办？二签策略全解析", en: "Visa Denial: Recovery Strategy" },
    summary: { zh: "被拒签不可怕——关键是知道原因，然后换策略再战。", en: "Denial isn't the end — it's about understanding the reason and adjusting your strategy." },
    content: {
      zh: `
        <h3>拒签五大原因</h3>
        <ol>
          <li><strong>逻辑不通：</strong>你的专业和岗位关联太弱</li>
          <li><strong>移民倾向：</strong>回答"我想留在美国"相关的暗示</li>
          <li><strong>材料瑕疵：</strong>DS-160与面签回答不一致</li>
          <li><strong>财务可疑：</strong>资金来源不清或金额不够</li>
          <li><strong>英语不过关：</strong>无法用英语完成基本交流</li>
        </ol>

        <h3>二签策略</h3>
        <ul>
          <li>如果是<strong>逻辑问题</strong> → 换岗位（绿灯岗），重新包装简历</li>
          <li>如果是<strong>移民倾向</strong> → 强化回国计划陈述</li>
          <li>如果是<strong>材料问题</strong> → 修正 DS-160，带齐补充文件</li>
          <li>如果是<strong>财务问题</strong> → 增加资金证明（父母赞助信 + 银行流水）</li>
          <li>如果是<strong>英语问题</strong> → 提升口语后再约面签</li>
        </ul>

        <div class="guide-tip">
          <strong>🔑 Miguel 的二签成功率：</strong><br>
          辅导的二签学员，通过率约85%。关键是找到真正的拒签原因并针对性修复——不是简单"再试一次"。
        </div>
      `,
      en: `<h3>Top 5 Denial Reasons</h3><p>Weak logic, immigration intent, document errors, financial issues, poor English.</p><h3>Recovery Strategy</h3><p>Fix the root cause: change position, strengthen return plan, fix documents, add proof of funds, improve English.</p>`
    }
  },
  {
    id: "first-week",
    icon: "🛬",
    category: "落地",
    title: { zh: "赴美第一周生存手册", en: "First Week Survival Guide" },
    summary: { zh: "落地第一天到第一周，每一步做什么、说什么——来自Miguel的亲身体验。", en: "Day 1 to Day 7 — what to do and say, from Miguel's firsthand experience." },
    content: {
      zh: `
        <h3>Day 1：落地</h3>
        <ul>
          <li>入境时跟海关说：J-1 Intern program</li>
          <li>取行李 → 打车/同事接 → 到住处</li>
          <li>第一时间给家人报平安</li>
        </ul>

        <h3>Day 2-3：安顿</h3>
        <ul>
          <li>去银行开户（带护照 + DS-2019）</li>
          <li>办手机卡（T-Mobile / AT&T prepaid）</li>
          <li>熟悉住处周边：超市、公交、药店</li>
          <li>买生活必需品（Walmart / Target）</li>
        </ul>

        <h3>Day 4-5：入职准备</h3>
        <ul>
          <li>准备入职材料：护照、DS-2019、I-94、SSN 申请回执</li>
          <li>提前去工作地点踩点，算好通勤时间</li>
          <li>准备第一天上班的服装和鞋子</li>
        </ul>

        <h3>Day 6-7：工作第一周</h3>
        <ul>
          <li>第一天提前15分钟到</li>
          <li>主动问："What can I help with?"</li>
          <li>记住同事名字，哪怕发音不准</li>
          <li>被骂了别往心里去——厨房就这样</li>
        </ul>
      `,
      en: `<h3>Day 1:</h3><p>Arrive, tell CBP: J-1 Intern. Get to housing.</p><h3>Day 2-3:</h3><p>Bank account, phone, grocery store.</p><h3>Day 4-5:</h3><p>Prepare onboarding docs, scout commute.</p><h3>Day 6-7:</h3><p>First day: arrive 15 min early. Ask "What can I help with?"</p>`
    }
  },
  {
    id: "culture-shock",
    icon: "🌍",
    category: "落地",
    title: { zh: "文化冲击与应对：你不是一个人", en: "Culture Shock & Coping" },
    summary: { zh: "语言障碍、孤独感、饮食差异——每个赴美人都会经历的事。", en: "Language barriers, loneliness, food shock — what every traveler to the U.S. goes through." },
    content: {
      zh: `
        <h3>文化冲击四阶段</h3>
        <ol>
          <li><strong>蜜月期（1-2周）：</strong>一切都新鲜，拍照发朋友圈</li>
          <li><strong>冲击期（3-6周）：</strong>语言吃力、想家、怀疑自己"来这儿干嘛"</li>
          <li><strong>调整期（2-3个月）：</strong>慢慢适应、交到朋友、建立routine</li>
          <li><strong>融入期（3个月+）：</strong>开始享受、觉得"我能行"</li>
        </ol>

        <h3>应对策略</h3>
        <ul>
          <li>找华人同事/朋友聊——你经历的他们都经历过</li>
          <li>不要整天刷中文社交媒体——主动进入英文环境</li>
          <li>每周跟家里视频一次，但不要天天打</li>
          <li>给自己找一个"小确幸"：一杯好咖啡、一段跑步路、一个喜欢的角落</li>
        </ul>

        <div class="guide-tip">
          <strong>💙 Miguel 说：</strong><br>
          我第二周最想放弃。蹲在休息室里给国内朋友打了2小时电话。但第三周就慢慢好起来了。走出来的方式没有捷径——就是一天一天熬过去，然后某天发现：好像也没那么难了。
        </div>
      `,
      en: `<h3>4 Stages</h3><p>Honeymoon → Shock → Adjustment → Integration.</p><h3>Coping</h3><p>Talk to Chinese coworkers. Stay in English environment. Video call home weekly, not daily. Find your small joy.</p>`
    }
  },
  {
    id: "career-after",
    icon: "🚀",
    category: "发展",
    title: { zh: "回国后：这段经历怎么用？", en: "After Return: How to Leverage This Experience" },
    summary: { zh: "一年国际经验不是简历上的几行字——而是你职业发展的核武器。", en: "One year of international experience isn't just a line on your resume — it's your career weapon." },
    content: {
      zh: `
        <h3>这段经历给你的核心能力</h3>
        <ul>
          <li>🌐 <strong>跨文化沟通：</strong>能跟十几个国家的同事一起干活</li>
          <li>💪 <strong>抗压能力：</strong>在语言不通的环境里活下来</li>
          <li>🎯 <strong>专业实战：</strong>美式酒店管理的实打实经验</li>
          <li>🗣️ <strong>英语飞跃：</strong>一年沉浸式环境，听说读写全面升级</li>
        </ul>

        <h3>回国后三大发展方向</h3>
        <ol>
          <li><strong>国际酒店集团：</strong>万豪/希尔顿/洲际管理培训生——你的美国经验是直接加分</li>
          <li><strong>跨境电商/外贸：</strong>英语 + 跨文化理解 = 核心能力</li>
          <li><strong>自己创业：</strong>餐饮、贸易、咨询——见过世界之后眼光不一样</li>
        </ol>

        <div class="guide-tip">
          <strong>📊 数据说话：</strong><br>
          Miguel 的学员中，回国一年内拿到国际酒店或跨国公司 offer 的比例超过70%。关键是你会用这段经历讲故事。
        </div>
      `,
      en: `<h3>Skills Gained</h3><p>Cross-cultural communication, stress resilience, professional experience, English fluency.</p><h3>Career Paths</h3><p>International hotel groups (Marriott/Hilton), cross-border e-commerce, entrepreneurship.</p>`
    }
  }
];

/* ---- Qualification Self-Test ---- */
const selfTest = {
  title: { zh: "快速资格自测", en: "Quick Eligibility Check" },
  questions: [
    { id: "age", q: { zh: "你的年龄？", en: "Your age?" }, options: [
      { text: { zh: "18-25岁", en: "18-25" }, score: 10 },
      { text: { zh: "26-28岁", en: "26-28" }, score: 7 },
      { text: { zh: "29岁以上", en: "29+" }, score: 2 }
    ]},
    { id: "edu", q: { zh: "你的学历状态？", en: "Education status?" }, options: [
      { text: { zh: "大专/本科在读或毕业1年内", en: "College student or graduated within 1 year" }, score: 10 },
      { text: { zh: "已毕业1-3年", en: "Graduated 1-3 years ago" }, score: 5 },
      { text: { zh: "毕业超过3年", en: "Graduated 3+ years ago" }, score: 1 }
    ]},
    { id: "english", q: { zh: "你的英语水平？", en: "English level?" }, options: [
      { text: { zh: "日常交流没问题", en: "Comfortable with daily conversation" }, score: 10 },
      { text: { zh: "基础交流可以", en: "Basic conversation" }, score: 6 },
      { text: { zh: "几乎不会", en: "Almost none" }, score: 1 }
    ]},
    { id: "major", q: { zh: "你的专业与岗位关联度？", en: "Major relevance?" }, options: [
      { text: { zh: "酒店/旅游/餐饮相关", en: "Hospitality/Tourism/Culinary" }, score: 10 },
      { text: { zh: "其他商科/文科", en: "Other business/arts" }, score: 6 },
      { text: { zh: "完全不相关", en: "Completely unrelated" }, score: 3 }
    ]},
    { id: "budget", q: { zh: "你的预算范围？", en: "Budget?" }, options: [
      { text: { zh: "¥5万以上", en: "Above ¥50,000" }, score: 10 },
      { text: { zh: "¥3-5万", en: "¥30,000-50,000" }, score: 7 },
      { text: { zh: "¥3万以下", en: "Below ¥30,000" }, score: 3 }
    ]}
  ],
  results: [
    { min: 40, text: { zh: "🎉 高匹配度！你的条件非常适合 J-1 ITP 项目。建议立即开始准备，选择 Pro 或 Premium 方案，Miguel 会帮你精准匹配。", en: "Great fit! You're well-positioned for J-1 ITP. Start preparing now." }},
    { min: 25, text: { zh: "👍 基本符合，但有几个方面需要加强。建议先从入门包开始，系统了解后再决定。", en: "Qualified with some areas to strengthen. Start with the Starter Bundle." }},
    { min: 0, text: { zh: "🤔 有几个条件需要进一步评估。别担心——不一定不适合，建议预约免费咨询让 Miguel 帮你做个案分析。", en: "Some conditions need further evaluation. Book a free consultation for a personalized assessment." }}
  ]
};

/* ---- Cost Calculator ---- */
const costCalculator = {
  title: { zh: "赴美预算计算器", en: "U.S. Budget Calculator" },
  fields: [
    { id: "sponsor", label: { zh: "Sponsor 费用区间", en: "Sponsor fee range" }, options: [
      { text: { zh: "经济型 ($2,800-3,500)", en: "Budget ($2,800-3,500)" }, value: 3150 },
      { text: { zh: "标准型 ($3,500-5,000)", en: "Standard ($3,500-5,000)" }, value: 4250 },
      { text: { zh: "精品型 ($5,000+)", en: "Premium ($5,000+)" }, value: 5675 }
    ]},
    { id: "city", label: { zh: "目标城市", en: "Target city" }, options: [
      { text: { zh: "里诺/小城市", en: "Reno/Small city" }, housing: 800, living: 500 },
      { text: { zh: "拉斯维加斯/奥兰多", en: "Las Vegas/Orlando" }, housing: 1000, living: 600 },
      { text: { zh: "纽约/大都市", en: "NYC/Major city" }, housing: 1800, living: 1000 }
    ]},
    { id: "flight", label: { zh: "机票预算", en: "Flight budget" }, options: [
      { text: { zh: "经济舱（¥3,000-5,000）", en: "Economy (¥3,000-5,000)" }, value: 4000 },
      { text: { zh: "正常价位（¥5,000-8,000）", en: "Standard (¥5,000-8,000)" }, value: 6500 },
      { text: { zh: "宽裕（¥8,000+）", en: "Flexible (¥8,000+)" }, value: 9000 }
    ]}
  ],
  fixedCosts: { sevis: 220, visa: 185, insurance: 450 },
  exchangeRate: 7.2
};

/* ---- Timeline Generator ---- */
const timelineGenerator = {
  title: { zh: "出发时间轴生成器", en: "Departure Timeline Generator" },
  months: [
    { offset: -6, label: { zh: "开始了解项目、评估条件、做预算", en: "Start researching, assess eligibility, budget" } },
    { offset: -5, label: { zh: "选定 Sponsor、递交申请材料、缴费", en: "Select Sponsor, submit application, pay fees" } },
    { offset: -4, label: { zh: "等待 DS-2019、准备签证材料", en: "Wait for DS-2019, prepare visa documents" } },
    { offset: -3, label: { zh: "填写 DS-160、预约面签", en: "Complete DS-160, schedule interview" } },
    { offset: -2, label: { zh: "面签、等待护照", en: "Interview, wait for passport" } },
    { offset: -1, label: { zh: "买机票、找住宿、准备行李", en: "Book flights, find housing, pack" } },
    { offset: 0, label: { zh: "✈️ 出发赴美！", en: "✈️ Depart for the U.S.!" } }
  ]
};
