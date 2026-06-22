export type StudentYear = "sophomore" | "junior" | "senior" | "graduate";
export type TargetRole =
  | "frontend"
  | "backend"
  | "fullstack"
  | "ai"
  | "data"
  | "test"
  | "embedded";
export type Priority =
  | "internship"
  | "campus-recruiting"
  | "skill-building"
  | "portfolio";
export type LearningStyle =
  | "videos"
  | "docs"
  | "project-driven"
  | "mixed";
export type Blocker =
  | "roadmap"
  | "projects"
  | "algorithms"
  | "resume"
  | "discipline"
  | "english";

export interface SkillRatings {
  programming: number;
  fundamentals: number;
  algorithms: number;
  projects: number;
  interviewing: number;
  english: number;
}

export interface DiagnosisInput {
  name: string;
  year: StudentYear;
  targetRole: TargetRole;
  priority: Priority;
  weeklyHours: number;
  monthsToDeadline: number;
  learningStyle: LearningStyle;
  blockers: Blocker[];
  ratings: SkillRatings;
}

export interface FocusArea {
  title: string;
  reason: string;
  action: string;
}

export interface RoadmapPhase {
  label: string;
  title: string;
  goal: string;
  tasks: string[];
}

export interface ProjectIdea {
  name: string;
  why: string;
  milestones: string[];
}

export interface ResourceSuggestion {
  title: string;
  type: string;
  reason: string;
}

export interface DiagnosisOutput {
  readinessScore: number;
  headline: string;
  summary: string;
  strengths: string[];
  risks: string[];
  focusAreas: FocusArea[];
  roadmap: RoadmapPhase[];
  projects: ProjectIdea[];
  firstWeekChecklist: string[];
  resources: ResourceSuggestion[];
  notes: string[];
}

export const studentYearOptions: Array<{ value: StudentYear; label: string }> = [
  { value: "sophomore", label: "大二" },
  { value: "junior", label: "大三" },
  { value: "senior", label: "大四" },
  { value: "graduate", label: "研一 / 研二" },
];

export const targetRoleOptions: Array<{ value: TargetRole; label: string }> = [
  { value: "frontend", label: "前端开发" },
  { value: "backend", label: "后端开发" },
  { value: "fullstack", label: "全栈开发" },
  { value: "ai", label: "AI 应用 / Agent 开发" },
  { value: "data", label: "数据开发 / 数据分析" },
  { value: "test", label: "测试开发 / QA" },
  { value: "embedded", label: "嵌入式 / 物联网" },
];

export const priorityOptions: Array<{ value: Priority; label: string }> = [
  { value: "internship", label: "尽快找实习" },
  { value: "campus-recruiting", label: "准备秋招 / 校招" },
  { value: "skill-building", label: "先把基础能力补扎实" },
  { value: "portfolio", label: "先做项目和作品集" },
];

export const learningStyleOptions: Array<{
  value: LearningStyle;
  label: string;
}> = [
  { value: "videos", label: "看视频更容易进入状态" },
  { value: "docs", label: "看文档和源码更有效" },
  { value: "project-driven", label: "一边做项目一边学" },
  { value: "mixed", label: "混合方式最好" },
];

export const blockerOptions: Array<{ value: Blocker; label: string }> = [
  { value: "roadmap", label: "不知道该先学什么" },
  { value: "projects", label: "缺少能写进简历的项目" },
  { value: "algorithms", label: "算法和题感偏弱" },
  { value: "resume", label: "简历和表达不够强" },
  { value: "discipline", label: "执行力和节奏不稳定" },
  { value: "english", label: "英文文档和阅读速度偏弱" },
];

export const weeklyHourOptions = [
  { value: 8, label: "每周 5-8 小时" },
  { value: 12, label: "每周 10-12 小时" },
  { value: 18, label: "每周 15-18 小时" },
  { value: 24, label: "每周 20 小时以上" },
];

export const deadlineOptions = [
  { value: 1, label: "1 个月内就要投递" },
  { value: 3, label: "1-3 个月内" },
  { value: 6, label: "3-6 个月内" },
  { value: 9, label: "半年以后，先打基础" },
];

export const defaultDiagnosisInput: DiagnosisInput = {
  name: "同学",
  year: "junior",
  targetRole: "fullstack",
  priority: "internship",
  weeklyHours: 12,
  monthsToDeadline: 3,
  learningStyle: "project-driven",
  blockers: ["projects", "roadmap"],
  ratings: {
    programming: 3,
    fundamentals: 3,
    algorithms: 2,
    projects: 2,
    interviewing: 2,
    english: 3,
  },
};

interface RoleBlueprint {
  label: string;
  coreSkills: string[];
  scoreWeights: SkillRatings;
  projectIdeas: ProjectIdea[];
  interviewFocus: string[];
  documentationFocus: string[];
}

const roleBlueprints: Record<TargetRole, RoleBlueprint> = {
  frontend: {
    label: "前端开发",
    coreSkills: ["TypeScript", "React / Next.js", "组件抽象", "工程化"],
    scoreWeights: {
      programming: 4,
      fundamentals: 2,
      algorithms: 2,
      projects: 4,
      interviewing: 2,
      english: 1,
    },
    projectIdeas: [
      {
        name: "AI 学习路径看板",
        why: "能同时展示组件设计、状态管理和产品表达能力。",
        milestones: [
          "完成多步骤表单和进度看板",
          "接入真实数据存储和筛选",
          "补上 README、设计说明和线上演示",
        ],
      },
      {
        name: "求职复盘仪表盘",
        why: "贴近真实需求，也方便你在面试里讲用户视角。",
        milestones: [
          "实现投递记录、面试阶段和标签筛选",
          "补充图表和数据可视化",
          "优化移动端和加载体验",
        ],
      },
    ],
    interviewFocus: ["浏览器原理", "React 机制", "工程化流程"],
    documentationFocus: ["组件设计决策", "技术选型", "性能优化记录"],
  },
  backend: {
    label: "后端开发",
    coreSkills: ["数据库建模", "接口设计", "鉴权", "部署与日志"],
    scoreWeights: {
      programming: 3,
      fundamentals: 4,
      algorithms: 3,
      projects: 3,
      interviewing: 2,
      english: 1,
    },
    projectIdeas: [
      {
        name: "任务调度与提醒系统",
        why: "能覆盖权限、消息队列、定时任务和可观测性。",
        milestones: [
          "设计用户、任务、通知三张核心表",
          "实现鉴权、定时提醒和日志记录",
          "部署并补上接口文档与压测记录",
        ],
      },
      {
        name: "岗位追踪 API 平台",
        why: "结构清晰，适合讲数据库设计和业务抽象。",
        milestones: [
          "完成岗位、投递、面试反馈等接口",
          "加入分页、筛选、导出和错误处理",
          "补充测试和部署说明",
        ],
      },
    ],
    interviewFocus: ["操作系统", "网络", "数据库", "并发基础"],
    documentationFocus: ["ER 图", "接口契约", "部署架构图"],
  },
  fullstack: {
    label: "全栈开发",
    coreSkills: ["前后端协作", "产品拆解", "数据模型", "部署上线"],
    scoreWeights: {
      programming: 3,
      fundamentals: 3,
      algorithms: 2,
      projects: 4,
      interviewing: 2,
      english: 1,
    },
    projectIdeas: [
      {
        name: "Career Compass AI",
        why: "就是你当前这个项目，能天然形成产品闭环和长期演进故事。",
        milestones: [
          "完成目标诊断和规划生成",
          "加入任务系统、周报和进度追踪",
          "接入 AI 能力和用户认证",
        ],
      },
      {
        name: "校园项目协作平台",
        why: "适合展示从需求建模到权限控制的一整套能力。",
        milestones: [
          "实现招募、报名、看板和评论系统",
          "加上文件上传和项目状态流转",
          "做一版运营后台和部署说明",
        ],
      },
    ],
    interviewFocus: ["HTTP 与鉴权", "数据库设计", "前端状态管理"],
    documentationFocus: ["需求拆解", "端到端流程图", "版本迭代记录"],
  },
  ai: {
    label: "AI 应用 / Agent 开发",
    coreSkills: ["Python 工程化", "RAG 基础", "提示词设计", "评测意识"],
    scoreWeights: {
      programming: 3,
      fundamentals: 3,
      algorithms: 3,
      projects: 4,
      interviewing: 2,
      english: 2,
    },
    projectIdeas: [
      {
        name: "资料检索问答助手",
        why: "能展示文档处理、检索、生成和评测思路。",
        milestones: [
          "实现文档上传、切片和检索",
          "加入问答界面和引用来源",
          "补上错误案例和评测报告",
        ],
      },
      {
        name: "简历与面试教练 Agent",
        why: "和求职场景高度契合，也容易展示 agent workflow。",
        milestones: [
          "支持简历解析和岗位匹配",
          "生成面试题与模拟追问",
          "补充评价维度和多轮会话记忆",
        ],
      },
    ],
    interviewFocus: ["模型调用链路", "上下文工程", "检索与评测"],
    documentationFocus: ["prompt 设计", "检索策略", "失败案例复盘"],
  },
  data: {
    label: "数据开发 / 数据分析",
    coreSkills: ["SQL", "数据建模", "可视化", "业务理解"],
    scoreWeights: {
      programming: 2,
      fundamentals: 3,
      algorithms: 2,
      projects: 4,
      interviewing: 2,
      english: 1,
    },
    projectIdeas: [
      {
        name: "就业市场趋势分析看板",
        why: "能体现数据抓取、清洗、分析和可视化全链路。",
        milestones: [
          "构建岗位数据表和清洗脚本",
          "完成地区、薪资、技能的可视化",
          "补充分析结论和方法说明",
        ],
      },
      {
        name: "学生学习行为分析系统",
        why: "业务故事清晰，适合展示指标体系和报表能力。",
        milestones: [
          "设计埋点和指标口径",
          "输出日报、周报和异常预警",
          "补上分析结论与建议",
        ],
      },
    ],
    interviewFocus: ["SQL", "统计思维", "指标设计"],
    documentationFocus: ["指标口径", "分析假设", "结论解释"],
  },
  test: {
    label: "测试开发 / QA",
    coreSkills: ["测试设计", "自动化", "接口调试", "质量流程"],
    scoreWeights: {
      programming: 2,
      fundamentals: 3,
      algorithms: 2,
      projects: 4,
      interviewing: 3,
      english: 1,
    },
    projectIdeas: [
      {
        name: "接口自动化回归平台",
        why: "非常贴近测试开发岗位，容易讲自动化价值。",
        milestones: [
          "实现用例管理和批量执行",
          "补充报告、告警和环境配置",
          "加入失败重试和历史对比",
        ],
      },
      {
        name: "Web 质量看板",
        why: "可展示埋点、缺陷管理和稳定性指标意识。",
        milestones: [
          "接入性能、错误和接口监控数据",
          "展示版本质量趋势和告警",
          "补上自动化测试入口",
        ],
      },
    ],
    interviewFocus: ["测试用例设计", "自动化框架", "接口排障"],
    documentationFocus: ["测试策略", "覆盖率边界", "缺陷复盘"],
  },
  embedded: {
    label: "嵌入式 / 物联网",
    coreSkills: ["C/C++", "单片机调试", "通信协议", "软硬件联调"],
    scoreWeights: {
      programming: 3,
      fundamentals: 4,
      algorithms: 1,
      projects: 4,
      interviewing: 2,
      english: 1,
    },
    projectIdeas: [
      {
        name: "宿舍环境监测终端",
        why: "能覆盖传感器采集、通信协议和上位机联调。",
        milestones: [
          "完成传感器采集与串口通信",
          "补上异常告警和数据展示",
          "输出硬件接线图和调试记录",
        ],
      },
      {
        name: "智能门锁控制系统",
        why: "项目完整度高，适合讲状态机和系统稳定性。",
        milestones: [
          "实现刷卡 / 密码输入流程",
          "加入日志、告警和异常处理",
          "补充联调视频和技术文档",
        ],
      },
    ],
    interviewFocus: ["通信协议", "中断与定时器", "调试思路"],
    documentationFocus: ["硬件结构图", "通信时序", "问题排查记录"],
  },
};

const priorityLabels: Record<Priority, string> = {
  internship: "尽快形成可投递的实习版本",
  "campus-recruiting": "为校招准备一套稳定输出的求职节奏",
  "skill-building": "先把能力底座补扎实，再放大项目质量",
  portfolio: "优先做出高质量项目和作品集",
};

const learningStyleAdvice: Record<LearningStyle, string> = {
  videos: "先用系统课程快速建立全貌，再用项目验证关键点。",
  docs: "优先看官方文档和源码示例，把知识结构搭得更稳。",
  "project-driven": "把每个知识点都挂到项目任务上，避免只学不产出。",
  mixed: "用课程建立框架，用文档校准细节，再用项目落地。",
};

const blockerAdvice: Record<Blocker, FocusArea> = {
  roadmap: {
    title: "先建立顺序，而不是先追求全会",
    reason: "你当前最大的损耗不是不努力，而是没有清晰路线，容易今天学一块明天学一块。",
    action: "固定一条主线，每周只推进 2-3 个关键任务。",
  },
  projects: {
    title: "补足能讲清楚的项目经历",
    reason: "对计算机学生来说，没有可解释的项目，学习成果很难转化为求职竞争力。",
    action: "从一个贴近岗位的中型项目开始，持续写文档和里程碑。",
  },
  algorithms: {
    title: "建立题感和讲题表达",
    reason: "算法不只是刷题数量，很多同学卡在思路表达和复盘方式上。",
    action: "固定题单和复盘模板，每周做 3-5 题并口头讲解。",
  },
  resume: {
    title: "把经历翻译成招聘语言",
    reason: "你做过的事不一定少，但如果说不清楚，面试官就感知不到价值。",
    action: "同步维护简历、项目亮点和 STAR 复盘卡片。",
  },
  discipline: {
    title: "先修执行系统，再谈长期成长",
    reason: "路线不是最大的障碍，真正的问题是节奏容易断，计划无法持续。",
    action: "把任务颗粒度降到可以在 60-90 分钟内完成。",
  },
  english: {
    title: "提高英文资料读取效率",
    reason: "不少优质文档和 issue 都是英文，卡在这一步会影响自学速度。",
    action: "固定看官方文档，遇到关键词就做术语卡片。",
  },
};

const roleSkillGaps: Record<TargetRole, Array<keyof SkillRatings>> = {
  frontend: ["projects", "programming", "interviewing", "fundamentals"],
  backend: ["fundamentals", "programming", "algorithms", "projects"],
  fullstack: ["projects", "programming", "fundamentals", "interviewing"],
  ai: ["projects", "programming", "algorithms", "english"],
  data: ["projects", "fundamentals", "programming", "interviewing"],
  test: ["projects", "interviewing", "programming", "fundamentals"],
  embedded: ["projects", "fundamentals", "programming", "interviewing"],
};

const skillLabels: Record<keyof SkillRatings, string> = {
  programming: "编程实现",
  fundamentals: "基础知识",
  algorithms: "算法题感",
  projects: "项目经历",
  interviewing: "面试表达",
  english: "英文阅读",
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function average(values: number[]) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function getRoleWeightedScore(input: DiagnosisInput) {
  const weights = roleBlueprints[input.targetRole].scoreWeights;
  const totalWeight = Object.values(weights).reduce((sum, value) => sum + value, 0);
  const weightedScore =
    (input.ratings.programming * weights.programming +
      input.ratings.fundamentals * weights.fundamentals +
      input.ratings.algorithms * weights.algorithms +
      input.ratings.projects * weights.projects +
      input.ratings.interviewing * weights.interviewing +
      input.ratings.english * weights.english) /
    totalWeight;

  return weightedScore;
}

function buildStrengths(input: DiagnosisInput, blueprint: RoleBlueprint) {
  const strengths: string[] = [];

  if (input.weeklyHours >= 18) {
    strengths.push("你当前的时间预算不错，只要节奏稳定，成长速度会明显快于平均水平。");
  }
  if (input.ratings.programming >= 4) {
    strengths.push("编程实现能力是你的强项，适合尽快通过项目把优势放大。");
  }
  if (input.ratings.projects >= 4) {
    strengths.push("你已经具备一定项目基础，下一步更值得做的是把项目讲清楚、做完整。");
  }
  if (input.ratings.fundamentals >= 4) {
    strengths.push(`基础知识比较稳，这对 ${blueprint.label} 的长期发展很关键。`);
  }
  if (input.ratings.interviewing >= 4) {
    strengths.push("你的表达和面试拆题能力不错，后面会更容易把成果转化成 offer 竞争力。");
  }

  if (strengths.length === 0) {
    strengths.push("你最大的优势是已经开始认真审视自己的现状，这意味着路线一旦清晰，执行会比盲学更高效。");
  }

  return strengths.slice(0, 4);
}

function buildRisks(input: DiagnosisInput, blueprint: RoleBlueprint) {
  const risks: string[] = [];

  if (input.monthsToDeadline <= 1) {
    risks.push("时间窗口非常紧，接下来要优先做出可投递版本，而不是追求面面俱到。");
  }
  if (input.ratings.projects <= 2) {
    risks.push("项目经历偏弱，面试时很难证明你真正做过什么。");
  }
  if (input.ratings.algorithms <= 2 && (input.targetRole === "backend" || input.targetRole === "ai")) {
    risks.push(`算法和题感会拖慢你冲击 ${blueprint.label} 的节奏，需要尽早补上。`);
  }
  if (input.ratings.interviewing <= 2) {
    risks.push("即使你学了不少内容，如果讲不清楚，也很难在面试里体现出来。");
  }
  if (input.weeklyHours <= 8) {
    risks.push("每周可投入时间偏少，计划必须非常聚焦，否则会不断被打断。");
  }
  if (input.blockers.includes("discipline")) {
    risks.push("执行力波动会让路线失效，所以需要先建立稳定的任务节奏。");
  }

  return risks.slice(0, 4);
}

function buildFocusAreas(input: DiagnosisInput, blueprint: RoleBlueprint) {
  const focusAreas: FocusArea[] = [];

  for (const blocker of input.blockers) {
    focusAreas.push(blockerAdvice[blocker]);
  }

  for (const key of roleSkillGaps[input.targetRole]) {
    if (input.ratings[key] > 2) {
      continue;
    }

    if (key === "programming") {
      focusAreas.push({
        title: `补强 ${skillLabels[key]}，让想法能稳定落地`,
        reason: `你的目标方向是 ${blueprint.label}，但当前实现能力还不足以支撑完整项目输出。`,
        action: "把主语言和工程目录练熟，至少独立完成 2-3 个中等功能模块。",
      });
    }

    if (key === "fundamentals") {
      focusAreas.push({
        title: `补基础知识，避免面试只会写不会讲`,
        reason: `${blueprint.label} 的岗位很看重原理认知，基础薄会让成长很快碰到天花板。`,
        action: "聚焦操作系统、网络、数据库或浏览器原理中的高频部分，先补主干知识。",
      });
    }

    if (key === "algorithms") {
      focusAreas.push({
        title: "建立算法训练闭环",
        reason: "算法题感不稳时，常常不是不会，而是缺少持续练习和讲题复盘。",
        action: "从高频题单开始，固定做题、复盘、二刷三步循环。",
      });
    }

    if (key === "projects") {
      focusAreas.push({
        title: "尽快做出一段能被招聘方看见的作品",
        reason: "没有成型项目时，简历会显得很空，学习投入也难以被验证。",
        action: "选择一个贴近岗位的项目，连续迭代到可以放进 GitHub 和简历。",
      });
    }

    if (key === "interviewing") {
      focusAreas.push({
        title: "把项目经验翻译成面试语言",
        reason: "很多同学的问题不是没做，而是讲不出来亮点、边界和取舍。",
        action: "为每个项目准备问题卡：目标、难点、方案、结果、反思。",
      });
    }

    if (key === "english") {
      focusAreas.push({
        title: "提高英文文档阅读速度",
        reason: "目标方向的信息密度高时，英文资料读取效率会直接影响上限。",
        action: "每周固定读官方文档和 issue，总结术语和常见表达。",
      });
    }
  }

  return focusAreas.filter((item, index, array) => array.findIndex((current) => current.title === item.title) === index).slice(0, 3);
}

function buildRoadmap(input: DiagnosisInput, blueprint: RoleBlueprint, focusAreas: FocusArea[]) {
  const priorityGoal = priorityLabels[input.priority];
  const project = blueprint.projectIdeas[0];

  return [
    {
      label: "第 1-2 周",
      title: "建立主线，停止无序补课",
      goal: `围绕“${priorityGoal}”先搭好你的执行节奏和最小成果面。`,
      tasks: [
        `把目标岗位收束到 ${blueprint.label}，列出 3 个最关键能力点：${blueprint.coreSkills.slice(0, 3).join("、")}。`,
        `从诊断里选 2 个最高优先级问题，先解决：${focusAreas.map((item) => item.title).join("；")}。`,
        `初始化项目“${project.name}”，把仓库、README 和任务拆解写出来。`,
      ],
    },
    {
      label: "第 3-6 周",
      title: "边学边做，形成第一个可讲项目",
      goal: "不要等学完再做项目，而是在项目里带着问题补基础。",
      tasks: [
        `按周推进 ${project.name} 的第一个可用版本，至少完成：${project.milestones[0]}。`,
        `同步补核心知识：${blueprint.interviewFocus.join("、")}，每周输出 1 份笔记。`,
        "把做过的功能、踩过的坑和技术取舍整理成面试可复述的项目故事。",
      ],
    },
    {
      label: "第 7-12 周",
      title: "把成果转成可投递版本",
      goal: "进入投递和面试准备阶段，让项目、简历和表达互相配合。",
      tasks: [
        `补齐 ${project.name} 的第二轮迭代，优先完成：${project.milestones[1]}。`,
        "开始简历迭代、模拟问答和项目讲解训练，至少完成 2 轮复盘。",
        `为 GitHub 仓库补上文档：${blueprint.documentationFocus.join("、")}。`,
      ],
    },
  ];
}

function buildResources(input: DiagnosisInput, blueprint: RoleBlueprint) {
  const commonResources: ResourceSuggestion[] = [
    {
      title: "LeetCode Hot 100 或高频题单",
      type: "算法训练",
      reason: "适合作为算法复盘主线，先把常见题型打通。",
    },
    {
      title: "一份长期维护的项目 README",
      type: "作品集沉淀",
      reason: "比起零散笔记，公开的项目文档更能转化为求职资产。",
    },
  ];

  const roleResources: Record<LearningStyle, ResourceSuggestion> = {
    videos: {
      title: `${blueprint.label} 系统课程 + 自己的项目同步推进`,
      type: "学习方式",
      reason: "你更适合先用视频建立全貌，再用项目把知识固定下来。",
    },
    docs: {
      title: `${blueprint.label} 官方文档与源码示例`,
      type: "学习方式",
      reason: "你偏向文档流学习，适合直接从一手资料建立正确模型。",
    },
    "project-driven": {
      title: `围绕“${blueprint.projectIdeas[0].name}”反向查资料`,
      type: "学习方式",
      reason: "你更适合先拆项目任务，再定向补知识点。",
    },
    mixed: {
      title: "课程 + 文档 + 项目三段式学习",
      type: "学习方式",
      reason: "混合方式最稳，既能防止碎片化，也能避免只学不做。",
    },
  };

  return [roleResources[input.learningStyle], ...commonResources];
}

function buildFirstWeekChecklist(input: DiagnosisInput, blueprint: RoleBlueprint) {
  return [
    `写下你选择 ${blueprint.label} 的原因，以及接下来 3 个月最想拿到的结果。`,
    "把每周固定可学习时间写进日历，至少锁定 3 个时间块。",
    `初始化一个项目仓库，优先做“${blueprint.projectIdeas[0].name}”。`,
    "新建一份简历草稿，把现有经历先全部堆进去，再慢慢裁剪。",
    `开始第一轮高频复盘：${blueprint.interviewFocus.join("、")}。`,
    "做一次周末复盘，检查自己有没有按计划推进，而不是只做了情绪化学习。",
  ];
}

function buildNotes(input: DiagnosisInput, blueprint: RoleBlueprint, readinessScore: number) {
  const notes = [
    `当前建议的主路线是 ${blueprint.label}，优先级目标是“${priorityLabels[input.priority]}”。`,
    learningStyleAdvice[input.learningStyle],
  ];

  if (readinessScore >= 75) {
    notes.push("你已经不适合继续长期潜水式学习，接下来更该把时间花在高质量项目和投递节奏上。");
  } else if (readinessScore >= 60) {
    notes.push("你已经有一定基础，但竞争力还不够稳定，最关键的是建立持续产出。");
  } else {
    notes.push("当前更重要的是快速收缩战线，把有限时间集中到一条主线，而不是同时补所有短板。");
  }

  return notes;
}

export function generateDiagnosis(input: DiagnosisInput): DiagnosisOutput {
  const blueprint = roleBlueprints[input.targetRole];
  const weightedScore = getRoleWeightedScore(input);
  const ratingAverage = average(Object.values(input.ratings));
  const timeBoost = input.weeklyHours >= 20 ? 8 : input.weeklyHours >= 15 ? 5 : input.weeklyHours >= 10 ? 2 : -3;
  const deadlinePenalty = input.monthsToDeadline <= 1 ? 8 : input.monthsToDeadline <= 3 ? 4 : input.monthsToDeadline <= 6 ? 1 : -2;
  const blockerPenalty = input.blockers.length * 1.5;

  // Convert the mixed signals into a stable 0-100 style readiness score.
  const readinessScore = clamp(
    Math.round(weightedScore * 17 + ratingAverage * 4 + timeBoost - deadlinePenalty - blockerPenalty),
    35,
    95,
  );

  const focusAreas = buildFocusAreas(input, blueprint);
  const strengths = buildStrengths(input, blueprint);
  const risks = buildRisks(input, blueprint);

  const headline =
    readinessScore >= 75
      ? `${input.name}，你已经接近“该上场了”的阶段。`
      : readinessScore >= 60
        ? `${input.name}，你现在最缺的不是努力，而是把努力收束成主线。`
        : `${input.name}，先别急着卷更多内容，先把路线和节奏稳住。`;

  const summary = `以你目前的基础和时间预算来看，最适合的策略是围绕 ${blueprint.label} 做一条明确主线：先补最影响投递结果的短板，再尽快做出能放进 GitHub 和简历的项目。`;

  return {
    readinessScore,
    headline,
    summary,
    strengths,
    risks,
    focusAreas,
    roadmap: buildRoadmap(input, blueprint, focusAreas),
    projects: blueprint.projectIdeas,
    firstWeekChecklist: buildFirstWeekChecklist(input, blueprint),
    resources: buildResources(input, blueprint),
    notes: buildNotes(input, blueprint, readinessScore),
  };
}
